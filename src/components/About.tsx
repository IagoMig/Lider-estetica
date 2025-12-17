import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Expand, ChevronLeft, ChevronRight } from 'lucide-react';

// Montagens Antes & Depois
const galleryItems = ['/01.png', '/2.png', '/3.png', '4.png'];

export function About() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [direction, setDirection] = useState(1);

  const paginate = (newIndex: number) => {
    setDirection(newIndex > index ? 1 : -1);
    setIndex(newIndex);
  };

  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-900/70 skew-x-[-14deg] translate-x-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12">
        {/* HEADER */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black italic uppercase text-white mb-6">
              Movidos por <br />
              <span className="text-[#39FF14]">Paixão</span>
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
              Tecnologia, técnica e cuidado extremo aplicados em cada detalhe.
              Resultados que falam por si.
            </p>
          </motion.div>

          {/* IMAGEM PRINCIPAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
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

        {/* GALERIA */}
        <div className="mt-20 md:mt-28 flex flex-col items-center">
          <h3 className="text-2xl md:text-4xl font-black uppercase text-white mb-10">
            Antes <span className="text-[#39FF14]">e</span> Depois
          </h3>

          {/* CARD */}
          <div className="relative w-full max-w-5xl">
            <div className="absolute inset-0 bg-neutral-900/80 border border-white/10 rounded-2xl" />

            <div className="relative rounded-2xl p-4 sm:p-6 md:p-10">
              <div className="relative overflow-hidden rounded-xl">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.img
                    key={index}
                    src={galleryItems[index]}
                    custom={direction}
                    initial={{ x: direction * 120, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction * -120, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-contain mx-auto"
                    onClick={() => setIsOpen(true)}
                  />
                </AnimatePresence>

                {/* Overlay */}
                <div className="absolute inset-0 flex items-end justify-end p-4 pointer-events-none">
                  <Expand className="w-5 h-5 text-[#39FF14] opacity-80" />
                </div>
              </div>

              {/* CONTROLES */}
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={() => paginate((index - 1 + galleryItems.length) % galleryItems.length)}
                  className="p-2 border border-white/20 hover:border-[#39FF14] transition"
                >
                  <ChevronLeft className="text-white" />
                </button>

                <div className="flex gap-2">
                  {galleryItems.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => paginate(i)}
                      className={`w-2.5 h-2.5 rounded-full transition ${
                        index === i
                          ? 'bg-[#39FF14] shadow-[0_0_10px_#39FF14]'
                          : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => paginate((index + 1) % galleryItems.length)}
                  className="p-2 border border-white/20 hover:border-[#39FF14] transition"
                >
                  <ChevronRight className="text-white" />
                </button>
              </div>
            </div>
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
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-[#39FF14] text-sm uppercase"
            >
              Fechar ✕
            </button>

            <motion.img
              src={galleryItems[index]}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="max-w-[95vw] max-h-[85vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
