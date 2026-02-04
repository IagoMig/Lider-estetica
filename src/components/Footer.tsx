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
              className="h-20 md:h-24 object-contain mb-4"
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

            <div className="space-y-6 text-gray-400">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#39FF14] mt-1" />
                <p className="text-sm leading-relaxed">
                  <strong>Unidade Uberaba</strong>
                  <br />
                  Rua Cel. José Carvalho de Oliveira, 100
                  <br />
                  Uberaba – Curitiba/PR
                </p>
              </div>

              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#39FF14] mt-1" />
                <p className="text-sm leading-relaxed">
                  <strong>Unidade Jardim das Américas</strong>
                  <br />
                  Rua Prof. João Doetzer, 51
                  <br />
                  Jardim das Américas – Curitiba/PR
                </p>
              </div>

              <div className="flex items-center gap-3 hover:text-white transition-colors pt-2">
                <Phone className="w-5 h-5 text-[#39FF14]" />
                (41) 8748-4057
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-6 text-[#39FF14]">
              Redes Sociais
            </h4>

            <div className="flex gap-4 flex-wrap">
              <a
                href="https://www.instagram.com/liderestetica_automotiva/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-neutral-900 flex items-center justify-center hover:bg-[#39FF14] hover:text-black transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61561429557035"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-neutral-900 flex items-center justify-center hover:bg-[#39FF14] hover:text-black transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/5541987484057"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-neutral-900 flex items-center justify-center hover:bg-[#39FF14] hover:text-black transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* MAPAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mapa Uberaba */}
          <div>
            <h5 className="text-sm font-semibold mb-3 text-[#39FF14] uppercase">
              Unidade Uberaba
            </h5>
            <iframe
              src="https://www.google.com/maps?q=Rua%20Cel.%20José%20Carvalho%20de%20Oliveira,%20100,%20Curitiba%20PR&output=embed"
              loading="lazy"
              className="w-full h-64 rounded-lg border border-neutral-800"
            />
          </div>

          {/* Mapa Jardim das Américas */}
          <div>
            <h5 className="text-sm font-semibold mb-3 text-[#39FF14] uppercase">
              Unidade Jardim das Américas
            </h5>
            <iframe
              src="https://www.google.com/maps?q=Rua%20Prof.%20João%20Doetzer,%2051,%20Curitiba%20PR&output=embed"
              loading="lazy"
              className="w-full h-64 rounded-lg border border-neutral-800"
            />
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
