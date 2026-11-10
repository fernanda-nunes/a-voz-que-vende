import Banner from "../../assets/images/hero.jpg";
import Arrow from "../../assets/images/seta_preta.png";
import { Overlay } from "../Overlay";

export const Hero = () => {
  return (
    <div className="container">
      <section className="relative h-200 rounded-[20px] mb-5 overflow-hidden md:h-240">
        <img
          src={Banner}
          alt="Rita Mirone com um microfone"
          className="w-full h-full object-cover rounded-[20px]"
        />

        <Overlay
          title="A Voz Que Vende"
          subtitle="Transformando vozes em oportunidades."
          // CORREÇÃO: Removido o right-120 solto e adicionado md: para aplicar a margem apenas no desktop
          className="absolute bottom-20 md:bottom-120 px-7 right-120 pb-20 justify-start transition-all duration-300 z-10"
        >
          <div className="flex items-center gap-3"></div>
        </Overlay>

        {/* Seta branca animada */}
        <img
          src={Arrow}
          alt="Rolar para baixo"
          className="absolute bottom-5 left-1/2 -translate-x-1/2
                     w-14 h-14 object-contain z-20
                     brightness-0 invert animate-bounce"
        />
      </section>
    </div>
  );
};

