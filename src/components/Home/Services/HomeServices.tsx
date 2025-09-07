import { GoLaw } from "react-icons/go";

import styles from "./HomeServices.module.css";

const HomeServices = () => {
  return (
    <section id="services" className={styles.container}>
      <h2>Nuestros Servicios</h2>

      <div className={styles.cardContainer}>
        <h3>Jurídicos</h3>

        <div className={styles.services}>
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.icon}>
                <GoLaw />
              </div>
              <div className={styles.title}>Familia</div>
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
              <div className={styles.title}>Civil</div>
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
              <div className={styles.title}>Previsional</div>
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
              <div className={styles.title}>Sucesiones</div>
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
              <div className={styles.title}>Tránsito</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerun,
                reprehenderit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <h3>Forestal</h3>

        <div className={styles.services}>
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.icon}>
                <GoLaw />
              </div>
              <div className={styles.title}>Gestión de Ambiente</div>
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
              <div className={styles.title}>Asesoramiento</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerun,
                reprehenderit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <h3>Gestoría</h3>

        <div className={styles.services}>
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.icon}>
                <GoLaw />
              </div>
              <div className={styles.title}>Automotor</div>
              <ul>
                <li>Transferencias</li>
                <li>Altas / Bajas</li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.icon}>
                <GoLaw />
              </div>
              <div className={styles.title}>Sociedades</div>
              <ul>
                <li>Constitución</li>
                <li>Seguimientos</li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.icon}>
                <GoLaw />
              </div>
              <div className={styles.title}>Asociaciones</div>
              <ul>
                <li>Constitución</li>
                <li>Estatuto</li>
                <li>Objeto</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
