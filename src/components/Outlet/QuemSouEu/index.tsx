import { useState, useRef } from "react";

// Imports de Mídia e Imagens
import FotoRita from "../../../assets/images/quem-eu-sou-rita.jpg";
import VideoLocucao from "../../../assets/videos/radio-locucao-rita.mp4";
import Randvi from "../../../assets/images/randvi-assassins-creed.jpg"; 
import Slone from "../../../assets/images/slone-titanfall.jpg";
import Sif from "../../../assets/images/sif-lego.jpg";

export const QuemSouEu = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Função utilizada para controlar o play/pause via código (caso queira criar um botão customizado)
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
    <section className="quemSouEu mx-auto max-w-7xl px-5 py-20 lg:px-8">
      {/* =====================================================
          CONTAINER PRINCIPAL (2 COLUNAS: BIOGRAFIA + VÍDEO)
      ====================================================== */}
      <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
        
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
              <div className="flex items-center gap-2">
                {/* Exemplo de uso da variável isPlaying e da função toggleVideo */}
                <button 
                  onClick={toggleVideo}
                  className="rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white hover:bg-violet-700 transition-colors"
                >
                  {isPlaying ? "Pausar" : "Reproduzir"}
                </button>
                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                  Showreel
                </span>
              </div>
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

      {/* ===================================================
          IMAGENS ILUSTRATIVAS DAS DUBLAGENS & MARCAS (ABAIXO)
      ==================================================== */}
      <div className="mt-16 border-t border-violet-100/80 pt-10">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-violet-900/70 mb-6 text-center lg:text-left">
          Destaques em Games:
        </h4>

        {/* Grid ajustado para responsividade abaixo das colunas (ex: 3 colunas em telas maiores) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card Ilustrativo 1: Randvi */}
          <div className="group relative overflow-hidden rounded-2xl border border-violet-100 bg-white p-4 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <img 
                src={Randvi} 
                alt="Dublagem de Games - Randvi" 
                className="h-14 w-14 rounded-xl object-cover shrink-0 ring-1 ring-violet-100"
              />
              <div>
                <span className="text-xs font-bold text-violet-700">Assassin's Creed Valhalla</span>
                <p className="text-sm font-medium text-neutral-800 leading-snug mt-0.5">
                  Randvi
                </p>
              </div>
            </div>
          </div>

          {/* Card Ilustrativo 2: Slone */}
          <div className="group relative overflow-hidden rounded-2xl border border-violet-100 bg-white p-4 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <img 
                src={Slone} 
                alt="Dublagem de Games - Slone" 
                className="h-14 w-14 rounded-xl object-cover shrink-0 ring-1 ring-violet-100"
              />
              <div>
                <span className="text-xs font-bold text-violet-700">Titanfall 2</span>
                <p className="text-sm font-medium text-neutral-800 leading-snug mt-0.5">
                  Slone
                </p>
              </div>
            </div>
          </div>

          {/* Card Ilustrativo 3: Sif */}
          <div className="group relative overflow-hidden rounded-2xl border border-violet-100 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4">
              <img 
                src={Sif} 
                alt="Dublagem de Games - Sif" 
                className="h-14 w-14 rounded-xl object-cover shrink-0 ring-1 ring-violet-100"
              />
              <div>
                <span className="text-xs font-bold text-violet-700">Lego Marvel Vingadores</span>
                <p className="text-sm font-medium text-neutral-800 leading-snug mt-0.5">
                  Sif
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </section>
  );
};