import videoFernanda from "../../../assets/videos/fernanda-cipriano.mov"; 
import videoWilson from "../../../assets/videos/wilson-alves.mp4";  
import videoLuciana from "../../../assets/videos/luciana.mp4";
import videoGuilherme from "../../../assets/videos/guilherme.mp4";

import PrintCarla from "../../../assets/images/carlakuhlewein.jpg";  
import PrintGisele from "../../../assets/images/giselecorreia.jpg";
import PrintAbel from "../../../assets/images/abel.png"; 
import PrintAlex from "../../../assets/images/alex.jpg";

export const Depoimentos = () => {
  const videosAlunos = [
    { src: videoFernanda, nome: "Fernanda Cipriano", cargo: "Atriz" },
    { src: videoWilson, nome: "Wilson Alves", cargo: "Locutor de rádio" },
    { src: videoLuciana, nome: "Luciana Tierno", cargo: "Jornalista" },
    { src: videoGuilherme, nome: "Guilherme Pereira", cargo: "Ator e Professor de inglês" }
  ];

  const printsAlunos = [
    { src: PrintCarla, nome: "Carla Kuhlewein", cargo: "Aluna do curso" },
    { src: PrintGisele, nome: "Gisele Correia", cargo: "Aluna do curso" },
    { src: PrintAbel, nome: "Andressa Abel", cargo: "Aluna do curso" },
    { src: PrintAlex, nome: "Pedro Souza", cargo: "Aluno do curso" }
  ];

  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">

        {/* CABEÇALHO */}
        <div className="mb-14 text-center">
          <div className="mx-auto mb-3 h-1.5 w-14 rounded-full bg-violet-600" />
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            O que dizem nossos alunos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 max-w-2xl mx-auto">
            Histórias reais de transformação, superação e conquistas profissionais através da locução.
          </p>
        </div>

        {/* GRID DE VÍDEOS DE DEPOIMENTO */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {videosAlunos.map((aluno, index) => (
            <div key={index} className="group flex flex-col overflow-hidden rounded-3xl border border-violet-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100/50">
              <div className="relative overflow-hidden rounded-2xl bg-black aspect-9/16 sm:aspect-4/5 shadow-inner">
                <video controls className="h-full w-full object-cover" src={aluno.src}>
                  Seu navegador não suporta vídeos.
                </video>
              </div>
              <div className="mt-4 px-2">
                <h3 className="font-semibold text-neutral-900">{aluno.nome}</h3>
                <p className="text-xs font-semibold text-violet-600 mt-0.5">{aluno.cargo}</p>
              </div>
            </div>
          ))}
        </div>

        {/* GRID DE PRINTS / DEPOIMENTOS ESCRITOS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {printsAlunos.map((print, index) => (
            <div key={index} className="group flex flex-col overflow-hidden rounded-3xl border border-violet-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100/50">
              <div className="relative overflow-hidden rounded-2xl bg-neutral-900/5 h-64 flex items-center justify-center p-2 border border-violet-50">
                <img
                  src={print.src}
                  alt={`Depoimento de ${print.nome}`}
                  className="h-full w-full object-contain rounded-lg"
                />
              </div>
              <div className="mt-4 px-2">
                <h3 className="font-semibold text-neutral-900">{print.nome}</h3>
                <p className="text-xs font-semibold text-violet-600 mt-0.5">{print.cargo}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA / BOTÃO FINAL DE INSCRIÇÃO */}
        <div className="mt-16 text-center">
          <button
            type="button"
            onClick={() => window.open("https://pay.kiwify.com.br/ZzSIGgV", "_blank")}
            className="group inline-flex items-center gap-3 rounded-full bg-violet-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-violet-200 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-700 hover:shadow-xl hover:shadow-violet-300 cursor-pointer"
          >
            Quero me inscrever e transformar minha voz
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};