import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

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

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  /* ===============================
     FETCH POST BY SLUG
  =============================== */
  useEffect(() => {
    async function fetchPost() {
      if (!slug) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('posts')
        .select(`
          id,
          title,
          slug,
          excerpt,
          content,
          image_url,
          created_at
        `)
        .eq('slug', slug)
        .single();

      if (error || !data) {
        console.error(error);
        setNotFound(true);
      } else {
        setPost(data);
      }

      setLoading(false);
    }

    fetchPost();
  }, [slug]);

  /* ===============================
     LOADING
  =============================== */
  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <span className="text-green-400 font-semibold animate-pulse">
          Carregando artigo...
        </span>
      </div>
    );
  }

  /* ===============================
     404
  =============================== */
  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-black uppercase mb-4">
          Post <span className="text-green-400">não encontrado</span>
        </h1>

        <p className="text-gray-400 mb-8">
          O artigo que você tentou acessar não existe ou foi removido.
        </p>

        <Link
          to="/"
          className="border-2 border-green-400 text-green-400
                     px-6 py-3 font-bold uppercase
                     hover:bg-green-400 hover:text-black transition"
        >
          Voltar ao site
        </Link>
      </div>
    );
  }

  /* ===============================
     POST
  =============================== */
  return (
    <article className="min-h-screen bg-black text-white">
      {/* HERO IMAGE */}
      {post.image_url && (
        <div className="w-full h-[420px] relative">
          <img
            src={post.image_url}
            alt={post.title}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>
      )}

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="text-green-400 text-sm uppercase font-semibold
                     hover:underline"
        >
          ← Voltar
        </Link>

        <h1 className="text-4xl md:text-5xl font-black uppercase italic mt-6 mb-6">
          {post.title}
        </h1>

        <p className="text-gray-400 mb-10">
          {new Date(post.created_at).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          })}
        </p>

        <div className="prose prose-invert prose-green max-w-none">
          {post.content.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
