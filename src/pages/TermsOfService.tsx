// src/pages/TermsOfService.tsx
import React from 'react';

export function TermsOfService() {
  return (
    <section className="min-h-screen bg-black text-gray-300 px-6 md:px-12 py-28">
      <div className="max-w-4xl mx-auto space-y-8">

        <h1 className="text-4xl font-black uppercase text-[#39FF14]">
          Termos de Serviço
        </h1>

        {/* 1. Termos */}
        <h2 className="text-2xl font-bold text-white mt-10">1. Termos</h2>
        <p>
          Ao acessar o site{' '}
          <a
            href="https://www.lideresteticaautomotiva.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#39FF14] underline"
          >
            Líder Estética Automotiva
          </a>
          , você concorda em cumprir estes termos de serviço, todas as leis e
          regulamentos aplicáveis, sendo responsável pelo cumprimento das leis
          locais.
        </p>

        <p>
          Caso não concorde com algum destes termos, está proibido de usar ou
          acessar este site. Os materiais contidos neste site são protegidos
          pelas leis de direitos autorais e marcas comerciais.
        </p>

        {/* 2. Uso de Licença */}
        <h2 className="text-2xl font-bold text-white mt-10">
          2. Uso de Licença
        </h2>

        <p>
          É concedida permissão para baixar temporariamente uma cópia dos
          materiais (informações ou software) no site do Líder Estética
          Automotiva, apenas para visualização pessoal e não comercial.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Modificar ou copiar os materiais;</li>
          <li>
            Usar os materiais para qualquer finalidade comercial ou exibição
            pública;
          </li>
          <li>
            Tentar descompilar ou fazer engenharia reversa de qualquer software;
          </li>
          <li>
            Remover direitos autorais ou outras notações de propriedade;
          </li>
          <li>
            Transferir os materiais para terceiros ou espelhá-los em outro
            servidor.
          </li>
        </ul>

        <p>
          Esta licença será automaticamente rescindida caso haja violação de
          qualquer uma dessas restrições.
        </p>

        {/* 3. Isenção */}
        <h2 className="text-2xl font-bold text-white mt-10">
          3. Isenção de Responsabilidade
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Os materiais são fornecidos &quot;como estão&quot;, sem garantias
            expressas ou implícitas.
          </li>
          <li>
            O Líder Estética Automotiva não garante precisão, confiabilidade ou
            resultados do uso dos materiais.
          </li>
        </ul>

        {/* 4. Limitações */}
        <h2 className="text-2xl font-bold text-white mt-10">
          4. Limitações
        </h2>

        <p>
          Em nenhum caso o Líder Estética Automotiva será responsável por danos
          decorrentes do uso ou da incapacidade de uso dos materiais, incluindo
          perda de dados, lucro ou interrupção de negócios.
        </p>

        {/* 5. Precisão */}
        <h2 className="text-2xl font-bold text-white mt-10">
          5. Precisão dos Materiais
        </h2>

        <p>
          Os materiais exibidos podem conter erros técnicos, tipográficos ou
          fotográficos. O Líder Estética Automotiva pode alterar os conteúdos a
          qualquer momento, sem aviso prévio.
        </p>

        {/* 6. Links */}
        <h2 className="text-2xl font-bold text-white mt-10">
          6. Links
        </h2>

        <p>
          O Líder Estética Automotiva não é responsável pelo conteúdo de sites
          externos vinculados. O uso de qualquer site vinculado é por conta e
          risco do usuário.
        </p>

        {/* Modificações */}
        <h2 className="text-2xl font-bold text-white mt-10">
          Modificações
        </h2>

        <p>
          O Líder Estética Automotiva pode revisar estes termos de serviço a
          qualquer momento, sem aviso prévio.
        </p>

        {/* Lei aplicável */}
        <h2 className="text-2xl font-bold text-white mt-10">
          Lei Aplicável
        </h2>

        <p>
          Estes termos são regidos pelas leis brasileiras, e você se submete à
          jurisdição exclusiva dos tribunais competentes.
        </p>

      </div>
    </section>
  );
}
