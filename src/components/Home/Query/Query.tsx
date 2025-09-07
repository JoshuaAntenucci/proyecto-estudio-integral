import { SiMercadopago } from "react-icons/si";
import styles from "./Query.module.css";

import QueryForm from "./QueryForm";

const Query = () => {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.dataContainer}>
        <div className={styles.leftContainer}>
          <h2>Contanos en qué te podemos ayudar</h2>
          {/* <h3></h3> */}

          <p>Estamos listos para ofrecerte una solución clara y efectiva.</p>
          <p>
            Dejanos tus datos, el comprobante y la información de tu caso, y uno
            de nuestros abogados se comunicará con usted con las observaciones
            pertinentes.
          </p>

          <SiMercadopago className={styles.mpLogo} />

          <p>
            <strong>Recuerde:</strong> Para que su consulta sea evaluada abonar
            $15.000 al alias <strong>antenucciyasociados.mp</strong> e incluir
            el N° de identificación del comprobante en el formulario.
          </p>
        </div>

        <div className={styles.rightContainer}>
          {/* <HomeContactForm /> */}
          <QueryForm />
        </div>
      </div>
    </section>
  );
};

export default Query;
