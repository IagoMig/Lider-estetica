// src/pages/PrivacyPolicy.tsx
import React from 'react';

export function PrivacyPolicy() {
  return (
    <section className="min-h-screen bg-black text-gray-300 px-6 md:px-12 py-28">
      <div className="max-w-4xl mx-auto space-y-8">

        <h1 className="text-4xl font-black uppercase text-[#39FF14]">
          Política de Privacidade
        </h1>

        <p>
          A sua privacidade é importante para nós. É política do{' '}
          <strong>Líder Estética Automotiva</strong> respeitar a sua privacidade
          em relação a qualquer informação sua que possamos coletar no site{' '}
          <a
            href="https://www.lideresteticaautomotiva.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#39FF14] underline"
          >
            Líder Estética Automotiva
          </a>
          .
        </p>

        <p>
          Solicitamos informações pessoais apenas quando realmente precisamos
          delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais,
          com o seu conhecimento e consentimento.
        </p>

        <p>
          Apenas retemos as informações coletadas pelo tempo necessário para
          fornecer o serviço solicitado. Quando armazenamos dados, protegemos
          dentro de meios comercialmente aceitáveis para evitar acessos não
          autorizados.
        </p>

        <p>
          Não compartilhamos informações de identificação pessoal publicamente
          ou com terceiros, exceto quando exigido por lei.
        </p>

        <p>
          Nosso site pode conter links para sites externos que não são operados
          por nós. Não temos controle sobre o conteúdo e práticas desses sites.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">
          Publicidade e Cookies
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            O Google AdSense utiliza o cookie DoubleClick para exibir anúncios
            mais relevantes e limitar repetições.
          </li>
          <li>
            Para mais informações, consulte as políticas oficiais do Google
            AdSense.
          </li>
          <li>
            Cookies de publicidade comportamental são usados para exibir
            conteúdos mais relevantes de forma anônima.
          </li>
          <li>
            Cookies de afiliados permitem identificar acessos vindos de parceiros.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10">
          Compromisso do Usuário
        </h2>

        <p>
          O usuário se compromete a fazer uso adequado dos conteúdos e informações
          oferecidas pelo Líder Estética Automotiva, comprometendo-se a:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Não se envolver em atividades ilegais ou contrárias à boa-fé e à
            ordem pública;
          </li>
          <li>
            Não difundir conteúdos racistas, xenofóbicos, jogos de azar,
            pornografia ilegal ou apologia ao terrorismo;
          </li>
          <li>
            Não causar danos aos sistemas físicos ou lógicos do site ou de
            terceiros.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10">
          Mais Informações
        </h2>

        <p>
          Se houver algo que você não tem certeza se precisa ou não, geralmente
          é mais seguro deixar os cookies ativados, caso interaja com recursos
          do site.
        </p>

        <p className="text-sm text-gray-500 mt-12">
          Política efetiva a partir de <strong>04 de fevereiro de 2026</strong>
        </p>
      </div>
    </section>
  );
}
