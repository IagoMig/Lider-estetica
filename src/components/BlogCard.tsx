import { Link } from 'react-router-dom';

type BlogCardProps = {
  slug: string;                 
  title: string;
  excerpt: string;
  image_url?: string | null;
};

export function BlogCard({
  slug,
  title,
  excerpt,
  image_url,
}: BlogCardProps) {
  return (
    <Link
      to={`/blog/${slug}`}       
      className="
        group
        bg-black/60 backdrop-blur
        border border-green-400/20
        rounded-xl overflow-hidden
        transition-all duration-300
        hover:border-green-400
        hover:shadow-[0_0_20px_rgba(57,255,20,0.15)]
      "
    >
      {image_url && (
        <div className="h-44 overflow-hidden">
          <img
            src={image_url}
            alt={title}
            className="
              h-full w-full object-cover
              transition-transform duration-500
              group-hover:scale-105
            "
          />
        </div>
      )}

      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-lg font-bold text-white group-hover:text-green-400">
          {title}
        </h3>

        <p className="text-sm text-gray-400 line-clamp-3">
          {excerpt}
        </p>

        <span className="mt-3 text-sm font-semibold uppercase text-green-400">
          Ler artigo →
        </span>
      </div>
    </Link>
  );
}
