import styles from "./Outlet.module.css";  
import { Sobre } from "./Sobre/index";
import { QuemSouEu } from "./QuemSouEu/index"
import { Depoimentos } from "./Depoimentos/index"


// Componente principal da Outlet
export const Outlet = () => {
  return (
    // {/* Container principal da galeria */}
    <div className="container">

      <div className={styles.outletGrid}>

        {/* Sessão About */}
        <section className={`${styles.sobre} rounded-[20px]`}>

         <Sobre />

        </section>

        {/* Sessão Quem eu sou */}
        <section className={`${styles.quemSouEu} rounded-[20px]`}>
          
         <QuemSouEu />

        </section>

        {/* Sessão Depoimentos */}
        <section className={` ${styles.depoimentos} rounded-[20px]`}>

        <Depoimentos />
          
        </section>
      </div>
    </div>
  );
};
