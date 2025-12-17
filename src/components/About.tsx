import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Expand } from 'lucide-react';

const beforeAfterItems = [
  {
    before: '/antes1.PNG',
    after: '/depois1.PNG',
  },
  {
    before: '/antes2.PNG',
    after: '/depois2.PNG',
  },
];

export function About() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative bg-black py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-neutral-900 skew-x-[-20deg] translate-x-1/3 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-6xl font-black italic uppercase text-white mb-8 leading-tight">
            Movidos Por <br />
            <span className="text-[#39FF14]">Paixão</span>
          </h2>

          <div className="space-y-6 text-gray-300 text-lg">
            <p>
              Cada veículo é tratado como obra-prima, com atenção absoluta aos
              detalhes.
            </p>
            <p>
              Tecnologia de ponta unida a técnicas artesanais para resultados
              acima do padrão.
            </p>
            <p className="text-[#39FF14] font-bold">
              Atendimento premium em Curitiba.
            </p>
          </div>
        </motion.div>

        {/* IMAGENS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 relative space-y-10"
        >
          {/* Imagem principal */}
          <div className="relative z-10 border-2 border-[#39FF14] p-2 skew-x-[-5deg]">
            <img
              src="/limpeza.png"
              alt="Limpeza automotiva"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Carrossel mini */}
          <div className="relative z-10 max-w-xs mx-auto">
            <motion.div className="bg-black border border-[#39FF14]/30 p-3 shadow-[0_0_25px_rgba(57,255,20,0.15)]">
              <div className="grid grid-cols-2 gap-3">
                {['before', 'after'].map((type, i) => (
                  <button
                    key={i}
                    onClick={() => setIsOpen(true)}
                    className="group relative bg-neutral-900 p-1 overflow-hidden"
                  >
                    <img
                      src={
                        type === 'before'
                          ? beforeAfterItems[index].before
                          : beforeAfterItems[index].after
                      }
                      className="w-full h-28 object-contain transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Ícone expandir */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                      <Expand className="text-[#39FF14] w-6 h-6" />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {beforeAfterItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === i
                      ? 'bg-[#39FF14] shadow-[0_0_10px_#39FF14]'
                      : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* MODAL EXPANDIDO */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          >
            <div className="relative max-w-5xl w-full px-6">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-10 right-0 text-[#39FF14] uppercase text-sm"
              >
                Fechar ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img
                  src={beforeAfterItems[index].before}
                  className="w-full h-[70vh] object-contain bg-black"
                />
                <img
                  src={beforeAfterItems[index].after}
                  className="w-full h-[70vh] object-contain bg-black"
                />
              </div>

              {/* Navegação */}
              <div className="flex justify-center gap-4 mt-6">
                {beforeAfterItems.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`px-3 py-1 text-sm border ${
                      index === i
                        ? 'border-[#39FF14] text-[#39FF14]'
                        : 'border-gray-600 text-gray-400'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
