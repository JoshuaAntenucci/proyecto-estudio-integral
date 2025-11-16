import Image from "next/image";

import styles from "./Logo.module.css";

const Logo = ({
  white = false,
  image = true,
}: {
  white?: boolean;
  image?: boolean;
}) => {
  return (
    <div className={styles.logo}>
      {image && (
        <Image
          className={styles.image}
          src="/AyA-isologo.png"
          alt="Antenucci & Asociados - Isotipo"
          width={153 * 0.25}
          height={206 * 0.25}
          priority
        />
      )}

      <div className={white ? styles.whiteLogo : ""}>
        <h2>Antenucci & Asociados</h2>
        <h2>Estudio Jurídico Integral</h2>
      </div>
    </div>
  );
};

export default Logo;
