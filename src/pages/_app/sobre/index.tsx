import { createFileRoute, Link } from '@tanstack/react-router'
import { Mic } from 'lucide-react' // Importando o ícone de microfone
import { Sobre } from '../../../components/Outlet/Sobre'

export const Route = createFileRoute("/_app/sobre/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Sobre - A Voz que Vende" }],
  }),
});

function RouteComponent() {

  return (
    <section >

    <div className="container mx-auto flex flex-col items-center justify-center relative my-5 rounded-[20px] overflow-hidden py-20 bg-purple-100" >
      
   {/* Componente Sobre */}
         <div className="w-full sm:px-6 lg:px-8">
           < Sobre />
         </div>
         
       </div>

       {/* Botão Voltar para a Home */}
         <div className="mb-20 flex items-center justify-center text-center">
           <Link
             to="/"
             className="
               group
               mt-8
               inline-flex
               items-center
               gap-3
               rounded-full
               px-6
               py-3
               font-medium
               text-gray-900 
               bg-violet-100
               shadow-sm
               hover:bg-gray-50
               transition-all
               duration-200
               cursor-pointer
             "
           >
             <Mic className="w-5 h-5 text-purple-600 transition-transform group-hover:scale-110" />
             <span>Voltar para a Home</span>
           </Link>
         </div>
         
       </section>
     );
   }