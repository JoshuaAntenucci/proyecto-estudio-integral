import { SiGooglemaps } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import styles from "./Footer.module.css";

import Logo from "@/components/Logo/Logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Logo image={false} />
      </div>

      <div className={styles.about}>
        <h3>Sobre Nosotros</h3>
        <p>
          Scuola di Vita Montessori nace de una historia compartida: la de una
          madre, docente y guía de vida, que camina junto a sus hijos creando un
          espacio donde el aprendizaje sea real, amoroso y profundo.
        </p>
      </div>

      <div className={styles.links}>
        <h3>Contacto</h3>

        <ul>
          <li>
            <SiGooglemaps /> <p>Valle de Punilla, Córdoba, Argentina</p>
          </li>
          <li>
            <FaPhoneAlt /> <p>351 - 3913779</p>
          </li>
          <li>
            <MdEmail /> <p>antenucci.asoc.integral@gmail.com</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
