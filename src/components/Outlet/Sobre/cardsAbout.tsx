import { Globe, Sparkles, Award } from "lucide-react";

export const CardsAbout = () => {
  // Lista dos destaques/estatísticas do curso
  const items = [
    {
      icon: <Globe className="w-6 h-6" />, 
      label: "100% Online",
      description: "Aulas liberadas semanalmente", 
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      label: " Prático",
      description: "Aprenda no seu rítmo, sem provas",
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: "Certificado",
      description: "Certificado de conclusão de curso",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
      {items.map((item, index) => (
        <div
          key={index}
          className="
            group flex flex-col items-center text-center p-3 
            rounded-3xl bg-white/80 backdrop-blur-sm 
            border shadow-sm 
            transition-all duration-300 
            hover:-translate-y-1 hover:shadow-md 
    
          "
        >
          {/* Círculo de destaque com o número/ícone */}
          <div 
            className="
              flex h-16 w-16 items-center justify-center 
              rounded-full bg-violet-100 text-violet-700 
              font-bold text-lg sm:text-xl shadow-inner
              transition-transform duration-300 group-hover:scale-110
            "
          >
            {item.icon}
          </div>

          {/* Título do card */}
          <h4 className="mt-3 font-semibold text-neutral-900 text-sm sm:text-base">
            {item.label}
          </h4>

          {/* Descrição secundária */}
          <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};