import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
export function ContactForm() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const inputClasses = (name: string) => `
    w-full bg-neutral-900 border-b-2 px-4 py-4 text-white outline-none transition-all duration-300
    ${focusedField === name ? 'border-[#39FF14] bg-neutral-800' : 'border-neutral-700'}
  `;
  return <section className="relative bg-neutral-900 py-32" style={{
    clipPath: 'polygon(0 100px, 100% 0, 100% 100%, 0 100%)'
  }}>
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase text-white mb-4">
            Book Your <span className="text-[#39FF14]">Appointment</span>
          </h2>
          <p className="text-gray-400">
            Ready to transform your vehicle? Let's get started.
          </p>
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="bg-black p-8 md:p-12 border-2 border-[#39FF14] shadow-[0_0_50px_rgba(57,255,20,0.1)] relative">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 bg-[#39FF14]" />
          <div className="absolute top-0 right-0 w-4 h-4 bg-[#39FF14]" />
          <div className="absolute bottom-0 left-0 w-4 h-4 bg-[#39FF14]" />
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#39FF14]" />

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[#39FF14] text-xs font-bold uppercase tracking-widest mb-2">
                  Name
                </label>
                <input type="text" className={inputClasses('name')} onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} placeholder="JOHN DOE" />
              </div>
              <div>
                <label className="block text-[#39FF14] text-xs font-bold uppercase tracking-widest mb-2">
                  Phone
                </label>
                <input type="tel" className={inputClasses('phone')} onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)} placeholder="+1 (555) 000-0000" />
              </div>
            </div>

            <div>
              <label className="block text-[#39FF14] text-xs font-bold uppercase tracking-widest mb-2">
                Email
              </label>
              <input type="email" className={inputClasses('email')} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} placeholder="JOHN@EXAMPLE.COM" />
            </div>

            <div>
              <label className="block text-[#39FF14] text-xs font-bold uppercase tracking-widest mb-2">
                Service Interest
              </label>
              <select className={inputClasses('service')} onFocus={() => setFocusedField('service')} onBlur={() => setFocusedField(null)}>
                <option>Full Detail Package</option>
                <option>Ceramic Coating</option>
                <option>Paint Correction</option>
                <option>Interior Deep Clean</option>
              </select>
            </div>

            <div>
              <label className="block text-[#39FF14] text-xs font-bold uppercase tracking-widest mb-2">
                Message
              </label>
              <textarea rows={4} className={inputClasses('message')} onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} placeholder="TELL US ABOUT YOUR VEHICLE..." />
            </div>

            <motion.button whileHover={{
            scale: 1.02,
            backgroundColor: '#39FF14',
            color: '#000'
          }} whileTap={{
            scale: 0.98
          }} className="w-full py-5 bg-transparent border-2 border-[#39FF14] text-[#39FF14] font-black uppercase tracking-widest text-lg flex items-center justify-center gap-3 transition-colors group">
              Send Request{' '}
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>;
}