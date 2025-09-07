import Image from "next/image";

import styles from "./HomeAbout.module.css";

const HomeAbout = () => {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.leftContainer}>
        <Image
          className={styles.image}
          src="/about.jpg"
          alt="Antenucci y Asociados - About"
          width={6078}
          height={4052}
          priority
        />
      </div>
      <div className={styles.rightContainer}>
        <h2>Sobre Nosotros</h2>

        <p>
          <strong>Scuola di Vita</strong> nace de una historia compartida: la de
          una madre, docente y guía de vida, que camina junto a sus hijos
          creando un espacio donde el <strong>aprendizaje</strong> sea{" "}
          <strong>real</strong>, <strong>amoroso</strong> y{" "}
          <strong>profundo</strong>.
        </p>

        <p>
          <strong>Eva</strong> —fundadora del proyecto— es{" "}
          <strong>docente y licenciada en Nivel Inicial</strong> con más de{" "}
          <strong>25 años de experiencia</strong>,{" "}
          <strong>asistente terapéutica</strong> y{" "}
          <strong>guía Montessori</strong>.
        </p>
        <p>
          Su mirada está atravesada por una fuerte <strong>vocación</strong>, el{" "}
          <strong>respeto</strong> por las infancias y la convicción de que
          educar es <strong>acompañar</strong> el <strong>alma</strong>, no solo
          la <strong>mente</strong>.
        </p>
        <p>
          Construimos un espacio <strong>interdisciplinario</strong>,{" "}
          <strong>cálido</strong> y <strong>humano</strong>, donde cada
          propuesta está hecha con <strong>amor</strong>,{" "}
          <strong>profesionalismo</strong> y <strong>propósito</strong>.
        </p>
        <p>
          Creemos que <strong>la escuela de la vida</strong> se construye con
          manos que <strong>acompañan</strong>, palabras que{" "}
          <strong>inspiran</strong> y vínculos que <strong>sanan</strong>.
        </p>
      </div>
    </section>
  );
};

export default HomeAbout;
