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
                Divorcios, régimen de comunicación, cuota alimentaria, cuidado
                personal de hijos, uniones convivenciales, adopciones, etc.
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
                Incumplimientos de contrato, daños y perjuicios, desalojos,
                cobros de deudas y otros asuntos civiles.
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
                Jubilaciones, pensiones, reajustes y reconocimientos de
                servicios ante ANSES y otros organismos.
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
                Desde la apertura del trámite hasta la adjudicación de bienes.
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
                Siniestros viales, infracciones, pérdida de licencia o defensa
                ante multas.
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
                Asesoramos y acompañamos a empresas, instituciones y
                particulares en el cumplimiento de normas ambientales,
                evaluaciones de impacto, permisos y planes de gestión
                sostenible.
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
                Orientación legal en conflictos ambientales, responsabilidad por
                daños, uso del suelo, residuos y cumplimiento de la legislación
                vigente para proteger el entorno y prevenir sanciones.
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
