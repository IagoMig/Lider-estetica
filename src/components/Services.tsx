import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Car, Droplets, Wrench, Hammer } from 'lucide-react';
const services = [{
  icon: Sparkles,
  title: 'Polimento',
  description: 'Remoção de riscos, hologramas e oxidação. Restaure a verdadeira profundidade e acabamento espelhado da pintura.'
}, {
  icon: Car,
  title: 'Detalhamento',
  description: 'Cuidado completo e minucioso para cada detalhe do seu veículo. Perfeição interna e externa.'
}, {
  icon: Droplets,
  title: 'Lavagem',
  description: 'Lavagem profissional com produtos premium. Seu carro limpo e protegido com técnicas especializadas.'
}, {
  icon: Wrench,
  title: 'Limpeza',
  description: 'Limpeza profunda de interior e exterior. Eliminação de sujeira, odores e manchas difíceis.'
}, {
  icon: Hammer,
  title: 'Martelinho de Ouro',
  description: 'Remoção de amassados sem pintura. Técnica especializada que preserva a originalidade da lataria.'
}];
export function Services() {
  return <section className="relative bg-neutral-900 py-32 -mt-20 z-20" style={{
    clipPath: 'polygon(0 0, 100% 100px, 100% 100%, 0 100%)'
  }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-4xl md:text-6xl font-black italic uppercase text-white mb-4">
            Nossos <span className="text-[#39FF14]">Serviços</span>
          </motion.h2>
          <div className="h-1 w-24 bg-[#39FF14] mx-auto skew-x-[-20deg]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} whileHover={{
          y: -10
        }} className="group relative bg-black p-8 border-l-4 border-transparent hover:border-[#39FF14] transition-all duration-300 shadow-2xl hover:shadow-[#39FF14]/20">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <service.icon className="w-24 h-24 text-white" />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#39FF14] flex items-center justify-center mb-6 skew-x-[-10deg]">
                  <service.icon className="w-6 h-6 text-black skew-x-[10deg]" />
                </div>

                <h3 className="text-xl font-bold text-white uppercase italic mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}