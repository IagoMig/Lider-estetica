import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

type Post = {
  title: string;
  slug: string;
  content: string;
  image_url: string | null;
  created_at: string;
};

export function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;

      const { data } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .single();

      setPost(data);
      setLoading(false);
    }

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Carregando...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">
          Post não encontrado
        </h1>
        <Link to="/" className="text-green-400">
          Voltar
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-black text-white">
      {post.image_url && (
        <img
          src={post.image_url}
          className="w-full h-[420px] object-cover"
        />
      )}

      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link to="/" className="text-green-400 text-sm">
          ← Voltar
        </Link>

        <h1 className="text-4xl font-black italic mt-6">
          {post.title}
        </h1>

        <div className="mt-8 text-gray-300 leading-relaxed whitespace-pre-line">
          {post.content}
        </div>
      </div>
    </article>
  );
}
