

// Imports de Vídeos
import videoFernanda from "../../../assets/videos/fernanda-cipriano.mov";
import videoWilson from "../../../assets/videos/wilson-alves.mp4"; 
import videoLuciana from "../../../assets/videos/luciana.mp4";
import videoGuilherme from "../../../assets/videos/guilherme.mp4";

// Imports de Prints / Imagens
import PrintCarla from "../../../assets/images/carlakuhlewein.jpg"; 
import PrintGisele from "../../../assets/images/giselecorreia.jpg";
import PrintAbel from "../../../assets/images/abel.png"; 
import PrintAlex from "../../../assets/images/alex.jpg";

export const Depoimentos = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-10">
      <div className="container mx-auto ">

        {/* =====================================================
            CABEÇALHO DA SEÇÃO
        ====================================================== */}
        <div className="mx-auto mb-5 max-w-2xl text-center">
          <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-violet-500" />
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            O que dizem nossos alunos
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-600">
            Histórias reais de transformação, superação e conquistas profissionais através da locução.
          </p>
        </div>

        {/* =====================================================
            GRID DE VÍDEOS DE DEPOIMENTO
        ====================================================== */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Aluno 1: Fernanda */}
          <div className="group flex flex-col overflow-hidden rounded-3xl border border-violet-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100/50">
            <div className="relative overflow-hidden rounded-2xl bg-black aspect-[9/16] sm:aspect-[4/5]">
              <video
                controls
                className="h-full w-full object-cover"
                src={videoFernanda}
              >
                Seu navegador não suporta vídeos.
              </video>
            </div>
            <div className="mt-4 px-2">
              <h3 className="font-semibold text-neutral-900">Fernanda Cipriano</h3>
              <p className="text-xs font-medium text-violet-600">Atriz</p>
            </div>
          </div>

          {/* Aluno 2: Wilson */}
          <div className="group flex flex-col overflow-hidden rounded-3xl border border-violet-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100/50">
            <div className="relative overflow-hidden rounded-2xl bg-black aspect-[9/16] sm:aspect-[4/5]">
              <video
                controls
                className="h-full w-full object-cover"
                src={videoWilson}
              >
                Seu navegador não suporta vídeos.
              </video>
            </div>
            <div className="mt-4 px-2">
              <h3 className="font-semibold text-neutral-900">Wilson Alves</h3>
              <p className="text-xs font-medium text-violet-600">Locutor de rádio</p>
            </div>
          </div>

          {/* Aluno 3: Luciana */}
          <div className="group flex flex-col overflow-hidden rounded-3xl border border-violet-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100/50">
            <div className="relative overflow-hidden rounded-2xl bg-black aspect-[9/16] sm:aspect-[4/5]">
              <video
                controls
                className="h-full w-full object-cover"
                src={videoLuciana}
              >
                Seu navegador não suporta vídeos.
              </video>
            </div>
            <div className="mt-4 px-2">
              <h3 className="font-semibold text-neutral-900">Luciana Tierno</h3>
              <p className="text-xs font-medium text-violet-600">Jornalista</p>
            </div>
          </div>

          {/* Aluno 4: Guilherme */}
          <div className="group flex flex-col overflow-hidden rounded-3xl border border-violet-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100/50">
            <div className="relative overflow-hidden rounded-2xl bg-black aspect-[9/16] sm:aspect-[4/5]">
              <video
                controls
                className="h-full w-full object-cover"
                src={videoGuilherme}
              >
                Seu navegador não suporta vídeos.
              </video>
            </div>
            <div className="mt-4 px-2">
              <h3 className="font-semibold text-neutral-900">Guilherme Pereira</h3>
              <p className="text-xs font-medium text-violet-600">Ator e Professor de inglês</p>
            </div>
          </div>

        </div>

        {/* =====================================================
            GRID DE PRINTS / DEPOIMENTOS ESCRITOS
        ====================================================== */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Print 1: Carla */}
          <div className="group flex flex-col overflow-hidden rounded-3xl border border-violet-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100/50">
            <div className="relative overflow-hidden rounded-2xl bg-neutral-100 h-60">
              <img
                src={PrintCarla}
                alt="Depoimento de Carla Kuhlewein"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 px-2">
              <h3 className="font-semibold text-neutral-900">Carla Kuhlewein</h3>
              <p className="text-xs text-neutral-500">Aluna do curso</p>
            </div>
          </div>

          {/* Print 2: Gisele */}
          <div className="group flex flex-col overflow-hidden rounded-3xl border border-violet-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100/50">
            <div className="relative overflow-hidden rounded-2xl bg-neutral-100 h-60">
              <img
                src={PrintGisele}
                alt="Depoimento de Gisele Correia"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 px-2">
              <h3 className="font-semibold text-neutral-900">Gisele Correia</h3>
              <p className="text-xs text-neutral-500">Aluna do curso</p>
            </div>
          </div>

          {/* Print 3: Abel */}
          <div className="group flex flex-col overflow-hidden rounded-3xl border border-violet-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100/50">
            <div className="relative overflow-hidden rounded-2xl bg-neutral-100 h-60">
              <img
                src={PrintAbel}
                alt="Depoimento de Abel"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 px-2">
              <h3 className="font-semibold text-neutral-900">Abel</h3>
              <p className="text-xs text-neutral-500">Aluno do curso</p>
            </div>
          </div>

          {/* Print 4: Alex */}
          <div className="group flex flex-col overflow-hidden rounded-3xl border border-violet-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100/50">
            <div className="relative overflow-hidden rounded-2xl bg-neutral-100 h-60">
              <img
                src={PrintAlex}
                alt="Depoimento de Alex"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 px-2">
              <h3 className="font-semibold text-neutral-900">Alex</h3>
              <p className="text-xs text-neutral-500">Aluno do curso</p>
            </div>
          </div>

        </div>

        {/* =====================================================
            CTA / BOTÃO FINAL DE INSCRIÇÃO
        ====================================================== */}
        <div className="mt-16 text-center">
          <button
            type="button"
            onClick={() => window.open("https://pay.kiwify.com.br/ZzSIGgV", "_blank")}
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-violet-600
              px-8
              py-4
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
            Quero me inscrever e transformar minha voz
            <span className="text-xl">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};