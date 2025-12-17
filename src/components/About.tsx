import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Expand } from 'lucide-react';

const beforeAfterItems = [
  { before: '/antes1.PNG', after: '/depois1.PNG' },
  { before: '/antes2.PNG', after: '/depois2.PNG' },
];

export function About() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [direction, setDirection] = useState(1);

  const paginate = (newIndex: number) => {
    setDirection(newIndex > index ? 1 : -1);
    setIndex(newIndex);
  };

  return (
    <section className="relative bg-black py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-900/70 skew-x-[-18deg] translate-x-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* HEADER */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black italic uppercase text-white mb-8">
              Movidos por <br />
              <span className="text-[#39FF14]">Paixão</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Cada veículo recebe um cuidado minucioso, combinando tecnologia de
              ponta com acabamento artesanal para resultados impecáveis.
            </p>
          </motion.div>

          {/* IMAGEM PRINCIPAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="/limpeza.png"
              alt="Limpeza automotiva"
              className="w-full h-auto grayscale hover:grayscale-0 transition duration-700"
            />
          </motion.div>
        </div>

        {/* ANTES / DEPOIS */}
        <div className="mt-28 flex flex-col items-center">
          <h3 className="text-3xl md:text-4xl font-black uppercase text-white mb-12">
            Antes <span className="text-[#39FF14]">e</span> Depois
          </h3>

          {/* CARD BASE */}
          <div className="relative w-full max-w-6xl">
            <div className="absolute inset-0 bg-neutral-900/80 border border-white/10 rounded-xl -z-10" />

            <div className="relative overflow-hidden rounded-xl p-8 md:p-12">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={index}
                  custom={direction}
                  initial={{ x: direction * 120, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction * -120, opacity: 0 }}
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                  {['before', 'after'].map((type, i) => (
                    <button
                      key={i}
                      onClick={() => setIsOpen(true)}
                      className="group relative rounded-lg overflow-hidden bg-neutral-800/40 border border-white/10"
                    >
                      {/* CONTAINER */}
                      <div className="h-[340px] md:h-[420px] flex items-center justify-center p-4">
                        <img
                          src={
                            type === 'before'
                              ? beforeAfterItems[index].before
                              : beforeAfterItems[index].after
                          }
                          className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                      </div>

                      {/* LABEL */}
                      <span className="absolute top-4 left-4 text-xs tracking-widest uppercase text-white/70">
                        {type === 'before' ? 'Antes' : 'Depois'}
                      </span>

                      {/* ICON */}
                      <Expand className="absolute bottom-4 right-4 w-5 h-5 text-[#39FF14] opacity-0 group-hover:opacity-100 transition" />
                    </button>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* DOTS */}
          <div className="flex gap-3 mt-10">
            {beforeAfterItems.map((_, i) => (
              <button
                key={i}
                onClick={() => paginate(i)}
                className={`w-3 h-3 rounded-full transition ${
                  index === i
                    ? 'bg-[#39FF14] shadow-[0_0_10px_#39FF14]'
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          >
            <div className="relative max-w-6xl w-full px-6">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-10 right-0 text-[#39FF14] text-sm uppercase"
              >
                Fechar ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <img
                  src={beforeAfterItems[index].before}
                  className="w-full h-[75vh] object-contain bg-transparent"
                />
                <img
                  src={beforeAfterItems[index].after}
                  className="w-full h-[75vh] object-contain bg-transparent"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
