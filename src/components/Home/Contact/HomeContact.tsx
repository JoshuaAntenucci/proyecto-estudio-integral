import styles from "./HomeContact.module.css";

import HomeContactForm from "./HomeContactForm";

const HomeContact = () => {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.dataContainer}>
        <div className={styles.leftContainer}>
          <h2>¿No sabés en qué campo encaja tu consulta?</h2>
          <h3>Contanos en qué te podemos ayudar</h3>

          <p>Estamos listos para ofrecerte una solución clara y efectiva.</p>
          <p>
            Dejanos tus datos y uno de nuestros abogados se comunicará a la
            brevedad.
          </p>
        </div>

        <div className={styles.rightContainer}>
          <HomeContactForm />
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
