import Image from "next/image";

import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image
        className={styles.image}
        src="/vercel.png"
        alt="Estudio Integral - Logo"
        width={41}
        height={41}
        priority
      />

      <div>
        <h2>Estudio Integral</h2>
        <h2>Estudio Integral</h2>
      </div>
    </div>
  );
};

export default Logo;
