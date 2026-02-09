import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { BlogCard } from './BlogCard';

/* ===============================
   TYPES
================================ */
type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image_url: string | null;
};

export function BlogSection() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { data, error } = await supabase
      .from('posts')
      .select('id, title, slug, excerpt, image_url')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Erro ao buscar posts:', error);
      return;
    }

    if (data) setPosts(data);
  }

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white">
            Nosso <span className="text-green-500">Blog</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Conteúdos, dicas e novidades sobre tecnologia, negócios e inovação.
          </p>

          <div className="mt-6 flex justify-center">
            <div className="h-[2px] w-24 bg-green-500 shadow-[0_0_20px_#22c55e]" />
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              image_url={post.image_url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
