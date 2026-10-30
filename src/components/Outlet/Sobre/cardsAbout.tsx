export const CardsAbout = () => {
  return (
    <div
      className="
        grid
        w-full
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        sm:gap-4
      "
    >
      {/* CARD 1 */}
      <div
        className="
          group
          mx-auto
          flex
          aspect-square
          w-full
          max-w-70
          sm:max-w-full
          flex-col
          items-center
          justify-center
          rounded-full
          border
          border-[#ECE2DE]
          bg-white/80
          p-6
          text-center
          shadow-sm
          backdrop-blur-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-violet-200
          hover:shadow-xl
          hover:shadow-violet-100/50
        "
      >
        <h4 className="mt-2 text-sm font-semibold text-neutral-800">
          100% Online
        </h4>
        <div className="mt-1 h-1 w-6 rounded-full bg-[#D9A694]" />
        <p className="mt-2 max-w-50text-[13px] leading-4 text-neutral-600">
          Estude quando quiser com aulas liberadas semanalmente.
        </p>
      </div>

      {/* CARD 2 */}
      <div
        className="
          group
          mx-auto
          flex
          aspect-square
          w-full
          max-w-70
          sm:max-w-full
          flex-col
          items-center
          justify-center
          rounded-full
          border
          border-[#ECE2DE]
          bg-white/80
          p-6
          text-center
          shadow-sm
          backdrop-blur-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-violet-200
          hover:shadow-xl
          hover:shadow-violet-100/50
        "
      >
        <h4 className="mt-2 text-sm font-semibold text-neutral-800">
          Conteúdo Prático
        </h4>
        <div className="mt-1 h-1 w-6 rounded-full bg-[#D9A694]" />
        <p className="mt-2 max-w-50 text-[13px] leading-4 text-neutral-600">
          Aprenda no seu ritmo, sem provas nem tarefas.
        </p>
      </div>

      {/* CARD 3 */}
      <div
        className="
          group
          mx-auto
          flex
          aspect-square
          w-full
          max-w-70
          sm:max-w-full
          flex-col
          items-center
          justify-center
          rounded-full
          border
          border-[#ECE2DE]
          bg-white/80
          p-6
          text-center
          shadow-sm
          backdrop-blur-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-violet-200
          hover:shadow-xl
          hover:shadow-violet-100/50
        "
      >
        <h4 className="mt-2 text-sm font-semibold text-neutral-800">
          Certificado
        </h4>
        <div className="mt-1 h-1 w-6 rounded-full bg-[#D9A694]" />
        <p className="mt-2 max-w-50 text-[13px] leading-4 text-neutral-600">
          Receba seu certificado ao finalizar o curso.
        </p>
      </div>
    </div>
  );
};