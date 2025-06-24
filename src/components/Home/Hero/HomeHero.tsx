import Image from "next/image";

import styles from "./HomeHero.module.css";
import CTA from "./CTA";

const HomeHero = () => {
  return (
    <section id="hero" className={styles.container}>
      <Image
        className={styles.image}
        src="/hero.jpg"
        alt="Hero background"
        width={6720}
        height={4480}
        priority
      />

      <div className={styles.text}>
        <h1>Soluciones legales efectivas</h1>

        <p>
          Asesoría jurídica integral para personas y empresas. Soluciones
          claras, ágiles y a tu medida.
        </p>

        <CTA />
      </div>
    </section>
  );
};

export default HomeHero;
