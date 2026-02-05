import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5541987484057?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Orçamento via WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-3
        bg-[#25D366]
        text-white
        px-5
        py-3
        rounded-full
        shadow-lg
        hover:scale-105
        hover:shadow-xl
        transition-all
        font-semibold
      "
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline">
        Orçamento via WhatsApp
      </span>
    </a>
  );
}
