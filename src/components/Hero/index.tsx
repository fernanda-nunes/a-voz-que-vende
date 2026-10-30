
import Banner from "../../assets/images/hero.jpg";
import Arrow from "../../assets/images/seta_preta.png";
import { Overlay } from "../Overlay";

export const Hero = () => {
  return (
    <div className="container">
      <section className="relative h-237 rounded-[20px] mb-5 overflow-hidden">
        <img
          src={Banner}
          alt="Rita Mirone com um microfone"
          className="w-full h-full object-cover rounded-[20px]"
        />

        <Overlay
          title="A Voz Que Vende"
          subtitle="Transformando vozes em oportunidades."
          className="bottom-20 md:bottom-30 right-110 px-7 pb-20 md:pb-90 justify-start transition-all duration-300"
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
