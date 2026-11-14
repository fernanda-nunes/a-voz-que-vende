import { CardsAbout } from "./cardsAbout";  
import IconRita from "../../../assets/images/capa-video-sobre.jpg"; 
import VideoApresentacao from "../../../assets/videos/apresentacao-curso-rita.mp4"; 

export const Sobre = () => {
  return (
    <section className="about mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"> 
      
      {/* CABEÇALHO DA SEÇÃO */}
      <div className="mb-12 text-center lg:text-left">
        <div className="mx-auto lg:mx-0 mb-3 h-1.5 w-14 rounded-full bg-violet-600" />
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          Quer transformar sua voz em renda?
        </h2>
      </div>

      {/* GRID PRINCIPAL */}
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">

        {/* COLUNA ESQUERDA — TEXTO DE DESTAQUE, DESCRIÇÃO, VÍDEO E BOTÃO */}
        <div className="flex flex-col w-full max-w-xl mx-auto lg:mx-0">
          <p className="font-semibold text-violet-700 text-lg text-center sm:text-left">
            Você chegou ao lugar certo.
          </p>

          <p className="mt-4 text-base leading-relaxed text-neutral-600 text-center sm:text-left">
            Este é o curso de Locução Publicitária/Comercial criado por <strong className="text-neutral-900">Rita Mirone</strong>, 
            locutora de TV e dubladora, para quem quer descobrir o potencial da própria voz 
            e aprender a lucrar com ela de forma profissional.
          </p>

          {/* VÍDEO DE APRESENTAÇÃO */}
          <div className="mt-8 overflow-hidden rounded-3xl bg-neutral-900 shadow-lg shadow-violet-100/60 ring-1 ring-violet-100/80 aspect-video">
            <video
              src={VideoApresentacao}
              poster={IconRita}
              controls
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            >
              Seu navegador não suporta a reprodução de vídeos.
            </video>
          </div>

          {/* BOTÃO CTA */}
          <div className="flex justify-center sm:justify-start mt-8">
            <button
              type="button"
              onClick={() => window.open("https://pay.kiwify.com.br/ZzSIGgV", "_blank")}
              className="group inline-flex items-center gap-3 rounded-full bg-violet-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-violet-200 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-700 hover:shadow-xl hover:shadow-violet-300 cursor-pointer"
            >
              Quero comprar o curso
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>

        {/* COLUNA DIREITA — BENEFÍCIOS, CARDS E OBSERVAÇÃO */}
        <div className="relative overflow-hidden rounded-3xl border border-violet-100 bg-violet-50/60 p-6 sm:p-8 lg:p-10 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-violet-100/50">
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-violet-200/40 pointer-events-none" />

          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Por que fazer este curso?
            </h3>

            {/* BENEFÍCIOS */}
            <ul className="mt-6 space-y-4">
              {[
                "Você aprende técnicas e segredos da locução publicitária usados no mercado atual.",
                "Você aprende a desenvolver uma boa dicção e utilizar sua voz de forma profissional.",
                "Você estará preparado para conquistar uma renda extra ou iniciar um novo plano de carreira.",
                "Aprenda em apenas 3 meses o que cursos semelhantes podem levar até um ano para ensinar."
              ].map((texto, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white shadow-sm">
                    ✓
                  </span>
                  <p className="leading-relaxed text-neutral-700 text-sm sm:text-base">
                    {texto}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* CARDS CIRCULARES */}
          <div className="mt-8 w-full"> 
            <CardsAbout />
          </div>

          {/* OBSERVAÇÃO */}
          <div className="mt-8 pt-6 border-t border-violet-200/60 text-center lg:text-left">
            <p className="text-xs sm:text-sm font-medium text-neutral-600">
              <strong className="text-neutral-800">Obs:</strong> Esse curso não forma locutor de rádio e não fornece DRT.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};