import React from 'react';
import { motion } from 'framer-motion';
export function About() {
  return <section className="relative bg-black py-32 overflow-hidden">
      {/* Diagonal Background Accent */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-neutral-900 skew-x-[-20deg] translate-x-1/3 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
        <motion.div initial={{
        opacity: 0,
        x: -50
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true
      }} className="flex-1">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase text-white mb-8 leading-tight">
            Movidos Por <br />
            <span className="text-[#39FF14]">Paixão</span>
          </h2>

          <div className="space-y-6 text-gray-300 text-lg">
            <p>
              Na Líder Estética Automotiva, tratamos cada veículo como uma
              obra-prima. Nascidos do amor pela velocidade e perfeição, nosso
              estúdio é projetado para aqueles que exigem apenas o melhor para
              suas máquinas.
            </p>
            <p>
              Utilizamos tecnologia de ponta combinada com técnicas artesanais
              para entregar resultados que superam os padrões de fábrica.
            </p>
            <p className="text-[#39FF14] font-bold">
              Localizado estrategicamente em Curitiba, estamos prontos para
              oferecer o melhor atendimento e cuidado para o seu veículo.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-4xl font-black text-[#39FF14]">500+</h4>
              <p className="text-white uppercase text-sm tracking-wider font-bold">
                Carros Detalhados
              </p>
            </div>
            <div>
              <h4 className="text-4xl font-black text-[#39FF14]">100%</h4>
              <p className="text-white uppercase text-sm tracking-wider font-bold">
                Satisfação
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} className="flex-1 relative">
          <div className="relative z-10 border-2 border-[#39FF14] p-2 skew-x-[-5deg]">
            <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2300&auto=format&fit=crop" alt="Processo de Detalhamento" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#39FF14] z-0" />
          <div className="absolute -top-4 -left-4 w-full h-full border border-white/20 z-0" />
        </motion.div>
      </div>
    </section>;
}