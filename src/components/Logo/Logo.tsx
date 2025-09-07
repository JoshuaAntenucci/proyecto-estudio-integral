import Image from "next/image";

import styles from "./Logo.module.css";

const Logo = ({ white = false }: { white?: boolean }) => {
  return (
    <div className={styles.logo}>
      <Image
        className={styles.image}
        src="/vercel.svg"
        alt="Antenucci y Asociados - Isotipo"
        width={41}
        height={41}
        priority
      />

      <div className={white ? styles.whiteLogo : ""}>
        <h2>Antenucci y Asociados</h2>
        <h2>Estudio Integral</h2>
      </div>
    </div>
  );
};

export default Logo;
