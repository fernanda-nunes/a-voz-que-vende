import { createFileRoute, Link } from '@tanstack/react-router' 
import { CardsAbout } from "../../../components/Outlet/Sobre/cardsAbout";
import Locucao from "../../../assets/videos/que-tal-locucao.mp3"; 
import IconRita from "../../../assets/images/quem-eu-sou-rita.jpg";
import { useRef, useState } from "react";

export const Route = createFileRoute("/_app/sobre/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Sobre - A Voz que Vende" }],
  }),
});

function RouteComponent() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="container mx-auto max-w-7xl px-2 py-30 ">
      
    
      {/* =====================================================
          CONTAINER COM BORDA ARREDONDADA (Borda Redonda Geral)
      ====================================================== */}
      <div
        className="
          rounded-3xl
          border
          border-violet-100
          bg-white
          p-6
          shadow-sm
          md:p-10
        "
      >
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-2
          "
        >
          {/* ===================================================
              COLUNA ESQUERDA — SOBRE O CURSO
          ==================================================== */}
          <div className="esquerda w-full max-w-xl">
            
            {/* =================================================
                LOCUÇÃO / ÁUDIO
            ================================================== */}
            <div className="flex items-center gap-4">
              <img
                src={IconRita}
                alt="Rita Mirone - Locução Comercial"
                className="
                  h-24
                  w-24
                  shrink-0
                  rounded-full
                  object-cover
                  ring-4
                  ring-violet-100
                "
              />

              <audio
                ref={audioRef}
                src={Locucao}
                onEnded={() => setPlaying(false)}
              />

              <button
                type="button"
                onClick={toggleAudio}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-8
                  py-3
                  font-medium
                  text-violet-700
                  shadow-sm
                  ring-1
                  ring-violet-100
                  transition-all
                  duration-300
                  hover:bg-violet-100
                  hover:shadow-md
                  cursor-pointer
                "
              >
                {playing ? "Pausar" : "Ouça"}
                <span className="text-base">
                  {playing ? "⏸" : "▶"}
                </span>
              </button>
            </div>

            {/* =================================================
                SUBTÍTULO
            ================================================== */}
            <h3
              className="
                mt-8
                text-3xl
                font-medium
                leading-tight
                text-neutral-900
              "
            >
              Quer transformar sua voz em renda?
            </h3>

            {/* =================================================
                TEXTO DE DESTAQUE
            ================================================== */}
            <p
              className="
                mt-5
                font-medium
                text-violet-600
                text-lg
              "
            >
              Você chegou ao lugar certo.
            </p>

            {/* =================================================
                DESCRIÇÃO
            ================================================== */}
            <p
              className="
                mt-5
                max-w-lg
                text-base
                leading-8
                text-neutral-600
              "
            >
              Este é o curso de Locução Publicitária/Comercial
              criado por Rita Mirone, locutora de TV e dubladora,
              para quem quer descobrir o potencial da própria voz
              e aprender a lucrar com ela.
            </p>

            {/* =================================================
                CTA
            ================================================== */}
            <button
              type="button"
              onClick={() => window.open("https://pay.kiwify.com.br/ZzSIGgV", "_blank")}
              className="
                group
                mt-12
                inline-flex
                items-center
                gap-4
                rounded-full
                bg-violet-500
                px-6
                py-3
                text-base
                font-medium
                text-white
                shadow-lg
                shadow-violet-200
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-violet-700
                hover:shadow-xl
                hover:shadow-violet-200
                cursor-pointer
              "
            >
              Quero comprar o curso

              <span
                className="
                  text-xl
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </button>

            {/* =================================================
                CARDS CIRCULARES
            ================================================== */}
            <div className="mt-10 w-full">
              <CardsAbout />
            </div>

          </div>

          {/* ===================================================
              COLUNA DIREITA — DESTAQUE
          ==================================================== */}
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-violet-100
              bg-violet-50
              p-5
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              hover:shadow-violet-100
              lg:p-10
            "
          >
            {/* Detalhe decorativo */}
            <div
              className="
                absolute
                -right-12
                -top-12
                h-24
                w-24
                rounded-full
                bg-violet-200/40
              "
            />

            <div className="relative">
              <h4
                className="
                  mt-2
                  text-3xl
                  font-semibold
                  leading-tight
                  text-neutral-900
                "
              >
                Por que fazer este curso?
              </h4>

              {/* =================================================
                  BENEFÍCIOS
              ================================================== */}
              <ul className="mt-7 space-y-5">
                <li className="flex gap-3">
                  <span
                    className="
                      mt-1
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-violet-500
                      text-sm
                      font-bold
                      text-white
                    "
                  >
                    ✓
                  </span>
                  <p className="leading-7 text-neutral-600">
                    Você aprende técnicas e segredos da locução
                    publicitária usados no mercado atual.
                  </p>
                </li>

                <li className="flex gap-3">
                  <span
                    className="
                      mt-1
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-violet-500
                      text-sm
                      font-bold
                      text-white
                    "
                  >
                    ✓
                  </span>
                  <p className="leading-7 text-neutral-600">
                    Você aprende a desenvolver uma boa dicção
                    e utilizar sua voz de forma profissional.
                  </p>
                </li>

                <li className="flex gap-3">
                  <span
                    className="
                      mt-1
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-violet-500
                      text-sm
                      font-bold
                      text-white
                    "
                  >
                    ✓
                  </span>
                  <p className="leading-7 text-neutral-600">
                    Você estará preparado para conquistar uma
                    renda extra ou iniciar um novo plano de carreira.
                  </p>
                </li>

                <li className="flex gap-3">
                  <span
                    className="
                      mt-1
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-violet-500
                      text-sm
                      font-bold
                      text-white
                    "
                  >
                    ✓
                  </span>
                  <p className="leading-7 text-neutral-600">
                    Aprenda em apenas 3 meses o que cursos
                    semelhantes podem levar até um ano para ensinar.
                  </p>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Observação no rodapé */}
        <p
          className="
            mt-8
            text-[15px]
            font-bold
            text-neutral-500
          "
        >
          Obs: Esse curso não forma locutor de rádio e não dá DRT.
        </p>

      </div>
      {/* =====================================================
          BOTÃO VOLTAR PARA A HOME
      ====================================================== */}
      <div className="mb-10 items-center justify-center text-center">
        <Link
          to="/"
          className="
           group
              mt-8
              inline-flex
              items-center
              gap-4
              rounded-full
              px-3
              py-2
              font-medium
              text-violet-700
              shadow-lg
              shadow-violet-200
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              cursor-pointer
          "
        >
          <span>←</span> Voltar para a Home
        </Link>
      </div>

    </section>
  );
}