import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ChevronDown, MapPin } from 'lucide-react';
export function Hero() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const inputClasses = (name: string) => `
    w-full bg-black/50 backdrop-blur-sm border-b-2 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-gray-500
    ${focusedField === name ? 'border-[#39FF14] bg-black/70' : 'border-white/20'}
  `;
  return <section className="relative min-h-screen w-full overflow-hidden bg-black text-white py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=2525&auto=format&fit=crop" alt="Detalhamento de Carro de Luxo" className="h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-10rem)]">
          {/* Left Side - Hero Content */}
          <motion.div initial={{
          x: -100,
          opacity: 0
        }} animate={{
          x: 0,
          opacity: 1
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-[#39FF14]" />
              <span className="text-[#39FF14] font-bold tracking-widest uppercase text-sm">
                LAVA CAR E ESTÉTICA AUTOMOTIVA EM CURITIBA
              </span>
            </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black italic uppercase leading-[0.9] tracking-tighter mb-8">
                  Estética automotiva <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                  completa para
                </span>{' '}
                <br />
                <span className="text-[#39FF14]">o seu veículo</span>
              </h1>


            <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-8 font-medium leading-relaxed">
             Se você está procurando lava car em Curitiba, a Líder Estética Automotiva é a escolha certa. Somos especialistas em estética automotiva profissional, oferecendo serviços completos para limpeza, proteção e valorização do seu veículo.

            </p>

            <div className="bg-[#39FF14]/10 border-l-4 border-[#39FF14] p-4 mb-8 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-1" />
              <div>
                <p className="text-white font-bold text-sm uppercase tracking-wide mb-1">
                 Pensando na sua comodidade, a Líder conta com 2 unidades:
                </p>
                <p className="text-gray-300 text-sm">
                  Unidade Uberaba:
                  <br />
                  Rua Cel. José Carvalho de Oliveira, 100 - Uberaba, Curitiba/PR
                  <br /> <br />
                  Unidade Jardim das Américas:
                  <br />  
                  Rua Prof. João Doetzer, 51 - Jd das Américas, Curitiba/PR

                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div initial={{
          x: 100,
          opacity: 0
        }} animate={{
          x: 0,
          opacity: 1
        }} transition={{
          duration: 0.8,
          ease: 'easeOut',
          delay: 0.2
        }} className="bg-black/40 backdrop-blur-md p-8 border-2 border-[#39FF14] shadow-[0_0_50px_rgba(57,255,20,0.2)] relative">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 bg-[#39FF14]" />
            <div className="absolute top-0 right-0 w-4 h-4 bg-[#39FF14]" />
            <div className="absolute bottom-0 left-0 w-4 h-4 bg-[#39FF14]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#39FF14]" />

            <h3 className="text-2xl md:text-3xl font-black italic uppercase text-white mb-2">
              Agende Agora
            </h3>
            <p className="text-gray-400 mb-8 text-sm">
              Pronto para transformar seu veículo? Vamos começar.
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-[#39FF14] text-xs font-bold uppercase tracking-widest mb-2">
                  Nome
                </label>
                <input type="text" className={inputClasses('name')} onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} placeholder="Seu nome completo" />
              </div>

              <div>
                <label className="block text-[#39FF14] text-xs font-bold uppercase tracking-widest mb-2">
                  Telefone
                </label>
                <input type="tel" className={inputClasses('phone')} onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)} placeholder="(41) 99999-9999" />
              </div>

              <div>
                <label className="block text-[#39FF14] text-xs font-bold uppercase tracking-widest mb-2">
                  Serviço de Interesse
                </label>
                <select className={inputClasses('service')} onFocus={() => setFocusedField('service')} onBlur={() => setFocusedField(null)}>
                  <option>Polimento</option>
                  <option>Detalhamento</option>
                  <option>Lavagem</option>
                  <option>Limpeza</option>
                  <option>Martelinho de Ouro</option>
                </select>
              </div>

              <div>
                <label className="block text-[#39FF14] text-xs font-bold uppercase tracking-widest mb-2">
                  Mensagem
                </label>
                <textarea rows={3} className={inputClasses('message')} onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} placeholder="Conte-nos sobre seu veículo..." />
              </div>

              <motion.button whileHover={{
              scale: 1.02,
              backgroundColor: '#39FF14',
              color: '#000'
            }} whileTap={{
              scale: 0.98
            }} className="w-full py-4 bg-transparent border-2 border-[#39FF14] text-[#39FF14] font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-colors group">
                Enviar Solicitação{' '}
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50" animate={{
      y: [0, 10, 0]
    }} transition={{
      repeat: Infinity,
      duration: 2
    }}>
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>;
}