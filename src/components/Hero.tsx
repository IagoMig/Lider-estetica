import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ChevronDown, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function Hero() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Polimento',
    message: ''
  });

  const inputClasses = (name: string) => `
    w-full bg-black/60 backdrop-blur-md border-b-2 px-4 py-3 text-white outline-none
    transition-all duration-300 placeholder:text-gray-500
    ${focusedField === name
      ? 'border-[#39FF14] shadow-[0_0_20px_rgba(57,255,20,0.35)]'
      : 'border-white/20'}
  `;

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_67m9smg',
        'template_stqsonr',
        formData,
        'rmp_Fm8RRXPeGJwWF'
      )
      .then(() => {
        alert('Solicitação enviada com sucesso!');
        setFormData({
          name: '',
          phone: '',
          service: 'Polimento',
          message: ''
        });
      })
      .catch(() => alert('Erro ao enviar.'))
      .finally(() => setLoading(false));
  }

  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=2525&auto=format&fit=crop"
          alt="Estética automotiva em Curitiba - Líder"
          className="h-full w-full object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      {/* Diagonal inferior fixa */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 bg-black z-10"
        style={{
          clipPath: 'polygon(0 35%, 100% 0%, 100% 100%, 0% 100%)'
        }}
      />

      {/* Glow decorativo */}
      <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] bg-[#39FF14]/20 blur-[140px] z-0" />

      {/* Conteúdo */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <span className="text-[#39FF14] uppercase tracking-widest text-sm font-bold">
              Lava car e estética automotiva em Curitiba
            </span>

            <h1 className="text-4xl md:text-6xl font-black italic uppercase leading-[0.95] mt-4 mb-8">
              Estética automotiva <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                completa para
              </span>
              <br />
              <span className="text-[#39FF14]">seu veículo</span>
            </h1>

            <p className="text-gray-300 text-lg max-w-xl mb-8">
              Polimento, vitrificação, higienização e detalhamento automotivo
              profissional. Seu carro no padrão máximo de qualidade.
            </p>

            <div className="bg-[#39FF14]/10 border-l-4 border-[#39FF14] p-4 flex gap-3 max-w-md">
              <MapPin className="w-5 h-5 text-[#39FF14] mt-1" />
              <p className="text-sm text-gray-300">
                <strong>Unidade Uberaba</strong> <br />
                <strong>Unidade Jardim das Américas</strong> – Curitiba / PR
              </p>
            </div>
          </motion.div>

          {/* Formulário */}
          <motion.div
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative bg-black/55 backdrop-blur-xl p-10
                       border border-[#39FF14]/60
                       shadow-[0_0_60px_rgba(57,255,20,0.25)]"
          >
            <h3 className="text-3xl font-black italic uppercase mb-6">
              Agende agora
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className={inputClasses('name')}
              />

              <input
                name="phone"
                placeholder="Telefone / WhatsApp"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                className={inputClasses('phone')}
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                onFocus={() => setFocusedField('service')}
                onBlur={() => setFocusedField(null)}
                className={inputClasses('service')}
              >
                <option>Polimento</option>
                <option>Vitrificação</option>
                <option>Higienização</option>
                <option>Lavagem Técnica</option>
                <option>Detalhamento</option>
              </select>

              <textarea
                name="message"
                rows={3}
                placeholder="Mensagem"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                className={inputClasses('message')}
              />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{
                  scale: 1.04,
                  backgroundColor: '#39FF14',
                  color: '#000'
                }}
                className="w-full py-4 border-2 border-[#39FF14] text-[#39FF14]
                           font-black uppercase flex items-center justify-center gap-3 transition-all"
              >
                {loading ? 'Enviando...' : 'Enviar Solicitação'}
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 z-20"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
