import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Droplets,
  Car,
  SprayCan,
  Hammer,
  Wind,
  ShieldCheck,
  Brush,
  Layers,
  Wrench,
  Flame,
  Eye,
  MessageCircle
} from 'lucide-react';

const WHATSAPP_LINK =
  'https://wa.me/554187484057?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20serviço!';

const services = [
  {
    title: 'Lavagem Técnica Automotiva em Curitiba',
    image: 'https://boxdetail.com.br/wp-content/uploads/2023/05/1-1.webp',
    icon: Droplets,
    description:
      'Lavagem técnica automotiva profissional em Curitiba, utilizando métodos seguros que preservam a pintura.'
  },
  {
    title: 'Enceramento Automotivo',
    image: 'https://boxdetail.com.br/wp-content/uploads/2023/05/4-1.webp',
    icon: Sparkles,
    description:
      'Enceramento automotivo com as melhores ceras para brilho intenso e proteção da pintura.'
  },
  {
    title: 'Revitalização de Plásticos Externos',
    image: 'https://boxdetail.com.br/wp-content/uploads/2023/05/3-1.webp',
    icon: SprayCan,
    description:
      'Revitalização de plásticos externos automotivos, restaurando cor e proteção.'
  },
  {
    title: 'Polimento de Pintura Automotiva',
    image: 'https://boxdetail.com.br/wp-content/uploads/2023/05/2-1.webp',
    icon: Sparkles,
    description:
      'Polimento de pintura automotiva para remoção de riscos, marcas e oxidação.'
  },
  {
    title: 'Hidratação de Couro Automotivo',
    image: 'https://boxdetail.com.br/wp-content/uploads/2023/05/5-1.webp',
    icon: Brush,
    description:
      'Hidratação de couro automotivo para manter maciez, durabilidade e aparência original.'
  },
  {
    title: 'Impermeabilização de Tecidos Automotivos',
    image: 'https://boxdetail.com.br/wp-content/uploads/2023/05/6.webp',
    icon: ShieldCheck,
    description:
      'Impermeabilização de bancos e estofados automotivos contra líquidos e sujeiras.'
  },
  {
    title: 'Oxi-sanitização Automotiva',
    image: 'https://boxdetail.com.br/wp-content/uploads/2023/06/oxi-sanitizacao-2-1024x768-1.jpg',
    icon: Wind,
    description:
      'Oxi-sanitização automotiva com ozônio para eliminar bactérias, fungos e odores.'
  },
  {
    title: 'Higienização de Porta-Malas',
    image: 'https://boxdetail.com.br/wp-content/uploads/2023/05/8.webp',
    icon: Car,
    description:
      'Higienização completa de porta-malas, removendo sujeiras e odores.'
  },
  {
    title: 'Higienização de Cadeirão Infantil',
    image: 'https://boxdetail.com.br/wp-content/uploads/2023/06/cadeirao-para-crianca.jpg',
    icon: Car,
    description:
      'Limpeza profunda e segura de cadeirão infantil automotivo.'
  },
  {
    title: 'Cristalização de Pintura Automotiva',
    image: 'https://boxdetail.com.br/wp-content/uploads/2023/05/11.webp',
    icon: Layers,
    description:
      'Cristalização de pintura automotiva para proteção avançada e brilho duradouro.'
  },
  {
    title: 'Espelhamento de Pintura Automotiva',
    image: 'https://boxdetail.com.br/wp-content/uploads/2023/05/10.webp',
    icon: Eye,
    description:
      'Espelhamento de pintura com acabamento premium e profundidade extrema.'
  },
  {
    title: 'Vitrificação de Pintura Automotiva',
    image: 'https://boxdetail.com.br/wp-content/uploads/2023/06/00_HEADER-1.jpg',
    icon: ShieldCheck,
    description:
      'Vitrificação de pintura automotiva com proteção cerâmica de longa duração.'
  },
  {
    title: 'Revitalização de Plásticos Internos',
    image: 'https://boxdetail.com.br/wp-content/uploads/2023/05/13.webp',
    icon: SprayCan,
    description:
      'Revitalização e proteção de plásticos internos automotivos.'
  },
  {
    title: 'Vitrificação de Vidros Automotivos',
    image: 'https://boxdetail.com.br/wp-content/uploads/2023/06/13.png',
    icon: ShieldCheck,
    description:
      'Vitrificação de vidros automotivos para melhor visibilidade e repelência à água.'
  },
  {
    title: 'Descontaminação de Pintura',
    image: 'https://boxdetail.com.br/wp-content/uploads/2023/05/15.webp',
    icon: Layers,
    description:
      'Descontaminação da pintura automotiva, removendo resíduos e aspereza.'
  },
  {
    title: 'Polimento de Faróis',
    image: 'https://boxdetail.com.br/wp-content/uploads/2023/05/16.webp',
    icon: Eye,
    description:
      'Polimento de faróis automotivos para restaurar transparência e segurança.'
  },
  {
    title: 'Limpeza Técnica de Motor',
    image: 'https://boxdetail.com.br/wp-content/uploads/2023/05/17.webp',
    icon: Wrench,
    description:
      'Limpeza técnica de motor automotivo realizada com total segurança.'
  },
  {
    title: 'Higienização Interna Automotiva',
    image: 'https://boxdetail.com.br/wp-content/uploads/2023/05/18.webp',
    icon: Brush,
    description:
      'Higienização interna automotiva completa de bancos, carpetes e painéis.'
  },
  {
    title: 'Higienização de Manutenção',
    image: 'https://boxdetail.com.br/wp-content/uploads/2023/05/19.webp',
    icon: Wind,
    description:
      'Ideal para o seu Dia a dia, limpeza rápida e prática'
  },
  {
    title: 'Remoção de Chuva Ácida',
    image: 'https://boxdetail.com.br/wp-content/uploads/2023/05/20.webp',
    icon: Flame,
    description:
      'Remoção de manchas causadas por chuva ácida na pintura automotiva.'
  },
  {
    title: 'Martelinho de Ouro',
    image: 'https://mecanicagarrett.com.br/wp-content/uploads/2024/10/ferramentas-de-martelinho-de-ouro.jpg',
    icon: Hammer,
    description:
      'Martelinho de ouro para remoção de amassados sem pintura.'
  }
];

export function Services() {
  return (
    <section
      className="relative bg-neutral-900 py-32 -mt-20 z-20"
      aria-label="Serviços de estética automotiva em Curitiba"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black italic uppercase text-white mb-4"
          >
            Serviços de <span className="text-[#39FF14]">Estética Automotiva</span> em Curitiba
          </motion.h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base">
            Lava car e estética automotiva premium em Curitiba. Agende agora pelo WhatsApp
            e deixe seu veículo com acabamento impecável.
          </p>

          <div className="h-1 w-24 bg-[#39FF14] mx-auto mt-6 skew-x-[-20deg]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="group bg-black overflow-hidden shadow-2xl hover:shadow-[#39FF14]/20 transition-all"
            >
              {service.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                </div>
              )}

              <div className="p-8 border-l-4 border-transparent group-hover:border-[#39FF14] transition-all">
                <div className="w-12 h-12 bg-[#39FF14] flex items-center justify-center mb-6 skew-x-[-10deg]">
                  <service.icon className="w-6 h-6 text-black skew-x-[10deg]" />
                </div>

                <h3 className="text-xl font-bold uppercase italic text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border-2 border-[#39FF14] text-[#39FF14] px-5 py-3 text-xs font-black uppercase tracking-widest hover:bg-[#39FF14] hover:text-black transition-all"
                >
                  Agendar no WhatsApp
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
