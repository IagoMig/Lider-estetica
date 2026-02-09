import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

/* ===============================
   TYPES
================================ */
type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  created_at: string;
};

/* ===============================
   SLUG GENERATOR (ANTI-ERRO)
================================ */
function generateSlug(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function AdminDashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { data } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) setPosts(data);
  }

  async function uploadImage(file: File) {
    const ext = file.name.split('.').pop();
    const path = `posts/${crypto.randomUUID()}.${ext}`;

    const { error } = await supabase.storage
      .from('blog-images')
      .upload(path, file, { upsert: true });

    if (error) throw error;

    return supabase.storage
      .from('blog-images')
      .getPublicUrl(path).data.publicUrl;
  }

  async function createPost(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const baseSlug = generateSlug(title);
      if (!baseSlug) throw new Error('Slug inválido');

      // evita slug duplicado
      let slug = baseSlug;
      const { data: existing } = await supabase
        .from('posts')
        .select('id')
        .eq('slug', slug);

      if (existing && existing.length > 0) {
        slug = `${baseSlug}-${Date.now()}`;
      }

      let imageUrl: string | null = null;
      if (image) imageUrl = await uploadImage(image);

      const { error } = await supabase.from('posts').insert({
        title,
        slug,
        excerpt,
        content,
        image_url: imageUrl,
      });

      if (error) throw error;

      setTitle('');
      setExcerpt('');
      setContent('');
      setImage(null);
      fetchPosts();
    } catch (err) {
      console.error(err);
      alert('Erro ao criar post');
    } finally {
      setLoading(false);
    }
  }

  async function deletePost(id: string) {
    if (!window.confirm('Excluir este post?')) return;

    await supabase.from('posts').delete().eq('id', id);
    setPosts((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-black italic uppercase mb-10">
        Dashboard <span className="text-green-400">Blog</span>
      </h1>

      {/* FORM */}
      <form
        onSubmit={createPost}
        className="bg-black/60 border border-green-400/30
                   p-6 rounded-xl mb-12 max-w-2xl grid gap-4"
      >
        <input
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="bg-black border-b border-white/20 p-3"
        />

        <input
          placeholder="Resumo"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          required
          className="bg-black border-b border-white/20 p-3"
        />

        <textarea
          placeholder="Conteúdo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="bg-black border-b border-white/20 p-3 min-h-[120px]"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />

        <button
          disabled={loading}
          className="border-2 border-green-400 text-green-400
                     hover:bg-green-400 hover:text-black
                     transition py-3 font-bold"
        >
          {loading ? 'Publicando...' : 'Publicar'}
        </button>
      </form>

      {/* POSTS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-black/60 border border-green-400/20 rounded-xl overflow-hidden"
          >
            {post.image_url && (
              <img src={post.image_url} className="h-44 w-full object-cover" />
            )}

            <div className="p-4">
              <h3 className="font-bold">{post.title}</h3>
              <p className="text-sm text-gray-400">{post.excerpt}</p>
              <p className="text-xs text-green-400 mt-2">
                /blog/{post.slug}
              </p>

              <button
                onClick={() => deletePost(post.id)}
                className="mt-4 border border-red-500 text-red-500
                           hover:bg-red-500 hover:text-white
                           w-full py-2 transition"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
