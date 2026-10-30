import { createFileRoute, Link } from '@tanstack/react-router'
import { useRef, useState } from "react";

// Imports de Mídia e Imagens
import FotoRita from "../../../assets/images/quem-eu-sou-rita.jpg";
import VideoLocucao from "../../../assets/videos/radio-locucao-rita.mp4";
import Randvi from "../../../assets/images/randvi-assassins-creed.jpg"; 
import Slone from "../../../assets/images/slone-titanfall.jpg";
import Sif from "../../../assets/images/sif-lego.jpg";


export const Route = createFileRoute("/_app/quemSouEu/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Quem sou eu - A Voz que Vende" }],
  }),
});

function RouteComponent() {

  const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <section className="container mx-auto max-w-7xl px-2 py-30">
          {/* =====================================================
              CONTAINER PRINCIPAL COM BACKGROUND VIOLETA BEM CLARO
          ====================================================== */}
          
            {/* Detalhe decorativo de fundo */}
           
    
            <div className="
            relative 
            grid 
            items-center 
            gap-12 
            lg:grid-cols-2 
            rounded-3xl
          border
          border-violet-100
          bg-white
          p-6
          shadow-sm
          md:p-10
           ">
              
              {/* ===================================================
                  COLUNA ESQUERDA — BIOGRAFIA E DESTAQUES VISUAIS
              ==================================================== */}
             <div className="w-full max-w-xl">
                
                {/* Header do Perfil: Foto + Nome */}
                <div className="flex items-center gap-5">
                  <img
                    src={FotoRita}
                    alt="Rita Mirone - Jornalista, Mentora e Locutora"
                    className="
                      h-28 
                      w-28 
                      shrink-0 
                      rounded-full 
                      object-cover 
                      shadow-md 
                      ring-4 
                      ring-violet-200
                    "
                  />
                  <div>
                    <div className="h-1 w-12 rounded-full bg-violet-500" />
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                      Rita Mirone
                    </h2>
                    <p className="font-semibold text-violet-700">
                      Mentora do curso "A Voz Que Vende"
                    </p>
                  </div>
                </div>
    
                {/* Biografia Atualizada */}
                <p className="mt-6 text-base leading-8 text-neutral-600">
                  Com uma trajetória multifacetada na comunicação, <strong>Rita Mirone</strong> é 
                  jornalista, atriz, locutora comercial e dubladora. Ela acumula vasta experiência 
                  dando voz a grandes campanhas publicitárias e personagens marcantes no universo dos games.
                </p>
    
                <p className="mt-3 text-base leading-8 text-neutral-600">
                  Unindo sua sólida bagagem jornalística e artística, ela desenvolveu uma metodologia 
                  prática e direta para ensinar você a dominar a própria voz, projetar autoridade e 
                  transformá-la em uma poderosa fonte de renda.
                </p>
    
                {/* ===================================================
                    IMAGENS ILUSTRATIVAS DAS DUBLAGENS & MARCAS
                ==================================================== */}
                <div className="mt-4 border-t border-violet-100/80 pt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-violet-900/70 mb-4">
                    Destaques em Games:
                  </h4>
    
                  {/* Grid de mini cards com imagens */}
                  <div className="grid grid-cols-2 gap-4">
                    
                    {/* Card Ilustrativo 1: Games */}
                    <div className="group relative overflow-hidden rounded-2xl border border-violet-100 bg-white p-3 shadow-sm transition-all hover:shadow-md">
                      <div className="flex items-center gap-3">
                        <img 
                          src={Randvi} 
                          alt="Dublagem de Games" 
                          className="h-12 w-12 rounded-xl object-cover shrink-0 ring-1 ring-violet-100"
                        />
                        <div>
                          <span className="text-xs font-bold text-violet-700">Assassin's Creed Valhalla</span>
                          <p className="text-xs text-neutral-600 leading-snug mt-0.5">
                            Randvi
                          </p>
                        </div>
                      </div>
                    </div>
    
                    <div className="group relative overflow-hidden rounded-2xl border border-violet-100 bg-white p-3 shadow-sm transition-all hover:shadow-md">
                      <div className="flex items-center gap-3">
                        <img 
                          src={Slone} 
                          alt="Dublagem de Games" 
                          className="h-12 w-12 rounded-xl object-cover shrink-0 ring-1 ring-violet-100"
                        />
                        <div>
                          <span className="text-xs font-bold text-violet-700">Titanfall 2</span>
                          <p className="text-xs text-neutral-600 leading-snug mt-0.5">
                            Slone
                          </p>
                        </div>
                      </div>
                    </div>
    
                    <div className="group relative overflow-hidden rounded-2xl border border-violet-100 bg-white p-3 shadow-sm transition-all hover:shadow-md">
                      <div className="flex items-center gap-3">
                        <img 
                          src={Sif} 
                          alt="Dublagem de Games" 
                          className="h-12 w-12 rounded-xl object-cover shrink-0 ring-1 ring-violet-100"
                        />
                        <div>
                          <span className="text-xs font-bold text-violet-700">Lego Marvel Vingadores</span>
                          <p className="text-xs text-neutral-600 leading-snug mt-0.5">
                            Sif
                          </p>
                        </div>
                      </div>
                    </div>
    
                  </div>
                </div>
    
              </div>
    
              {/* ===================================================
                  COLUNA DIREITA — PLAYER DE VÍDEO DESTACADO
              ==================================================== */}
              <div 
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-violet-100
                  bg-white
                  p-5
                  shadow-md
                  transition-all
                  duration-300
                  hover:shadow-xl
                  hover:shadow-violet-100/50
                  lg:p-8
                "
              >
                <div className="relative">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="text-2xl font-semibold leading-tight text-neutral-900">
                      Locuções em Ação
                    </h4>
                    <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                      Showreel
                    </span>
                  </div>
    
                  {/* Player do Vídeo */}
                  <div className="relative overflow-hidden rounded-2xl bg-black shadow-inner aspect-video">
                    <video
                      ref={videoRef}
                      src={VideoLocucao}
                      controls
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onEnded={() => setIsPlaying(false)}
                      className="h-full w-full object-cover"
                    />
                  </div>
    
                  <p className="mt-4 text-center text-xs text-neutral-500">
                    Assista ao vídeo para conferir a versatilidade vocal e os comerciais gravados pela mentora.
                  </p>
                </div>
    
              </div>
    
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
