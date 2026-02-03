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
    w-full bg-black/50 backdrop-blur-sm border-b-2 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-gray-500
    ${focusedField === name ? 'border-[#39FF14] bg-black/70' : 'border-white/20'}
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
        {
          name: formData.name,
          phone: formData.phone,
          service: formData.service,
          message: formData.message
        },
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
      .catch(() => {
        alert('Erro ao enviar. Tente novamente.');
      })
      .finally(() => setLoading(false));
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white py-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=2525&auto=format&fit=crop"
          alt="Estética automotiva em Curitiba - Líder"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-10rem)]">

          {/* Left */}
          <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-black italic uppercase mb-8">
              Estética automotiva completa <br />
              <span className="text-[#39FF14]">em Curitiba</span>
            </h1>

            <p className="text-gray-300 text-lg mb-8">
              Lava car premium, polimento, vitrificação, higienização e estética automotiva profissional.
            </p>

            {/* Localização */}
            <div className="bg-[#39FF14]/10 border-l-4 border-[#39FF14] p-4 flex gap-3">
              <MapPin className="w-5 h-5 text-[#39FF14] mt-1" />
              <p className="text-sm text-gray-300">
                <strong>Unidade Uberaba</strong> – Curitiba/PR <br />
                <strong>Unidade Jardim das Américas</strong>
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black/40 backdrop-blur-md p-8 border-2 border-[#39FF14]"
          >
            <h3 className="text-3xl font-black italic mb-6">Agende Agora</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
                className={inputClasses('name')}
              />

              <input
                name="phone"
                placeholder="Telefone (WhatsApp)"
                value={formData.phone}
                onChange={handleChange}
                className={inputClasses('phone')}
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
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
                className={inputClasses('message')}
              />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.03 }}
                className="w-full py-4 border-2 border-[#39FF14] text-[#39FF14] font-black uppercase flex items-center justify-center gap-3"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
