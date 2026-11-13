import { CardsAbout } from "./cardsAbout";  

import IconRita from "../../../assets/images/capa-video-sobre.jpg";
import VideoApresentacao from "../../../assets/videos/apresentacao-curso-rita.mp4"; 

export const Sobre = () => {
  return (
    <section className="about mx-auto max-w-7xl px-3 py-10 lg:px-5 lg:py-8"> 
      
      {/* ===================================================
          TÍTULO PRINCIPAL (MAIS PARA O COMEÇO, COM MARGEM MAIOR)
      ==================================================== */}
      <div className="mb-8 pt-6 text-center lg:text-left">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-neutral-900">
          Quer transformar sua voz em renda?
        </h3>
      </div>

      {/* Grid principal com as duas colunas */}
      <div className="grid items-start gap-8 lg:grid-cols-2">

        {/* ===================================================
            COLUNA ESQUERDA — TEXTO DE DESTAQUE, DESCRIÇÃO, VÍDEO E BOTÃO
        ==================================================== */}
        <div className="esquerda w-full max-w-xl mx-auto lg:mx-0">

          {/* TEXTO DE DESTAQUE (NA COLUNA DA ESQUERDA) */}
          <p className="font-medium text-violet-800 text-lg text-center sm:text-left">
            Você chegou ao lugar certo.
          </p>

          {/* DESCRIÇÃO */}
          <p className="mt-4 text-base leading-7 text-neutral-600 text-center sm:text-left mx-auto sm:mx-0">
            Este é o curso de Locução Publicitária/Comercial criado por Rita Mirone, 
            locutora de TV e dubladora, para quem quer descobrir o potencial da própria voz 
            e aprender a lucrar com ela.
          </p>

          {/* VÍDEO DE APRESENTAÇÃO */}
          <div className="mt-8 overflow-hidden rounded-2xl bg-neutral-900 shadow-lg shadow-violet-100/60 ring-1 ring-violet-100">
            <video
              src={VideoApresentacao}
              poster={IconRita}
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full object-cover"
            >
              Seu navegador não suporta a reprodução de vídeos.
            </video>
          </div>

          {/* BOTÃO CTA (VOLTOU PARA ABAIXO DO VÍDEO, NA COLUNA DA ESQUERDA) */}
          <div className="flex justify-center sm:justify-start mt-8">
            <button
              type="button"
              onClick={() => window.open("https://pay.kiwify.com.br/ZzSIGgV", "_blank")}
              className="
                group inline-flex items-center gap-4 rounded-full bg-violet-500 
                px-8 py-4 text-base font-medium text-white shadow-lg shadow-violet-200 
                transition-all duration-300 hover:-translate-y-1 hover:bg-violet-700 
                hover:shadow-xl hover:shadow-violet-200 cursor-pointer
              "
            >
              Quero comprar o curso
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        
        </div>

        {/* ===================================================
            COLUNA DIREITA — BENEFÍCIOS, CARDS E OBSERVAÇÃO
        ==================================================== */}
        <div
          className="
            relative overflow-hidden rounded-3xl border border-violet-100 
            bg-violet-50 p-6 sm:p-8 lg:p-10 shadow-sm transition-all duration-300 
            hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100
          "
        >
          <div className="absolute -right-12 -top-12 h-25 w-25 rounded-full bg-violet-200/40" />

          <div className="relative">
            <h4 className="mt-2 text-2xl sm:text-3xl font-semibold leading-tight text-neutral-900">
              Por que fazer este curso?
            </h4>

            {/* BENEFÍCIOS */}
            <ul className="mt-6 space-y-4 sm:space-y-5">
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500 text-sm font-bold text-white">
                  ✓
                </span>
                <p className="leading-7 text-neutral-600 text-sm sm:text-base">
                  Você aprende técnicas e segredos da locução publicitária usados no mercado atual.
                </p>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500 text-sm font-bold text-white">
                  ✓
                </span>
                <p className="leading-7 text-neutral-600 text-sm sm:text-base">
                  Você aprende a desenvolver uma boa dicção e utilizar sua voz de forma profissional.
                </p>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500 text-sm font-bold text-white">
                  ✓
                </span>
                <p className="leading-7 text-neutral-600 text-sm sm:text-base">
                  Você estará preparado para conquistar uma renda extra ou iniciar um novo plano de carreira.
                </p>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500 text-sm font-bold text-white">
                  ✓
                </span>
                <p className="leading-7 text-neutral-600 text-sm sm:text-base">
                  Aprenda em apenas 3 meses o que cursos semelhantes podem levar até um ano para ensinar.
                </p>
              </li>
            </ul>
          </div>

          {/* CARDS CIRCULARES */}
          <div className="mt-10 w-full"> 
            <CardsAbout />
          </div>

          {/* OBSERVAÇÃO (LOGO ABAIXO DOS BENEFÍCIOS/CARDS) */}
          <div className="mt-8 pt-6 border-t border-violet-200/60 text-center lg:text-left">
            <p className="text-xs sm:text-sm font-semibold text-neutral-700">
              Obs: Esse curso não forma locutor de rádio e não fornece DRT.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};