import React from 'react';
import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  MessageCircle
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo / Descrição */}
          <div>
            <img
              src="/LOGO_SEMBOLHAS.png"
              alt="Líder Estética Automotiva"
              className="h-20 md:h-24 lg:h-24 object-contain"
            />
            <p className="text-gray-500 max-w-xs">
              Estética automotiva premium para quem exige perfeição. Elevando o
              cuidado automotivo a uma forma de arte.
            </p>
          </div>

          {/* Localização */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-6 text-[#39FF14]">
              Localização
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm leading-relaxed">
                    Unidade Uberaba:
                    <br />
                    Rua Cel. José Carvalho de Oliveira, 100 - Uberaba, Curitiba/PR
                    <br />
                    <br />
                    Unidade Jardim das Américas:
                    <br />
                    Rua Prof. João Doetzer, 51 - Jd das Américas, Curitiba/PR
                  </p>
                </div>
              </li>

              <li className="flex items-center gap-3 hover:text-white transition-colors mt-6">
                <Phone className="w-5 h-5 text-[#39FF14]" />
                (41) 8748-4057
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-6 text-[#39FF14]">
              Redes Sociais
            </h4>

            <div className="flex gap-4 flex-wrap">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/liderestetica_automotiva/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-neutral-900 flex items-center justify-center hover:bg-[#39FF14] hover:text-black transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61561429557035"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-neutral-900 flex items-center justify-center hover:bg-[#39FF14] hover:text-black transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/+5541987484057?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20serviço!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-neutral-900 flex items-center justify-center hover:bg-[#39FF14] hover:text-black transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              {/* Google Maps - Uberaba */}
              <a
                href="https://share.google/oXfBsDuDCoarE1GGU"
                target="_blank"
                rel="noopener noreferrer"
                title="Unidade Uberaba"
                className="w-12 h-12 bg-neutral-900 flex items-center justify-center hover:bg-[#39FF14] hover:text-black transition-all"
              >
                <MapPin className="w-5 h-5" />
              </a>

              {/* Google Maps - Jardim das Américas */}
              <a
                href="https://share.google/60s4l22zBzJrg4SJl"
                target="_blank"
                rel="noopener noreferrer"
                title="Unidade Jardim das Américas"
                className="w-12 h-12 bg-neutral-900 flex items-center justify-center hover:bg-[#39FF14] hover:text-black transition-all"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Líder Estética Automotiva. Todos os
            direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#39FF14] transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-[#39FF14] transition-colors">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
