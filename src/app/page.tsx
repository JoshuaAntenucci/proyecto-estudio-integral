import styles from "./page.module.css";

import Hero from "@/components/Home/Hero/HomeHero";
import Services from "@/components/Home/Services/HomeServices";
import About from "@/components/Home/About/HomeAbout";
import Contact from "@/components/Home/Contact/HomeContact";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />

      <Services />

      <About />

      <Contact />
    </div>
  );
}
