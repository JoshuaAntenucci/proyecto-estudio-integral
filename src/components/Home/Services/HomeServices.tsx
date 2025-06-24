import { GoLaw } from "react-icons/go";

import styles from "./HomeServices.module.css";

const HomeServices = () => {
  return (
    <section id="services" className={styles.container}>
      <h2>Nuestros Servicios</h2>

      <div className={styles.services}>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.icon}>
              <GoLaw />
            </div>
            <div className={styles.title}>Web Development</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerun,
              reprehenderit.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.icon}>
              <GoLaw />
            </div>
            <div className={styles.title}>Web Development</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerun,
              reprehenderit.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.icon}>
              <GoLaw />
            </div>
            <div className={styles.title}>Web Development</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerun,
              reprehenderit.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.icon}>
              <GoLaw />
            </div>
            <div className={styles.title}>Web Development</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerun,
              reprehenderit.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.icon}>
              <GoLaw />
            </div>
            <div className={styles.title}>Web Development</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerun,
              reprehenderit.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.icon}>
              <GoLaw />
            </div>
            <div className={styles.title}>Web Development</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerun,
              reprehenderit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
