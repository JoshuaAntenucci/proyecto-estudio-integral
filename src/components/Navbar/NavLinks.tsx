"use client";

// import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const NavLinks = () => {
  const authUser = false;

  return (
    <>
      {authUser ? (
        <>
          {/* <li>
            <Link href="/">Products</Link>
          </li>
          <li>
            <Link href="/">Features</Link>
          </li>
          <li>
            <Link href="/pieces">Piezas</Link>
          </li> */}
        </>
      ) : (
        <>
          <li>
            <ScrollLink to="services" smooth={true} duration={300}>
              Servicios
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={300}>
              Sobre Nosotros
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={300}>
              Contacto
            </ScrollLink>
          </li>
          {/* <li>
            <Link href="/login">Iniciar Sesión</Link>
          </li>
          <li>
            <Link href="/register">Registrarse</Link>
          </li> */}
        </>
      )}
    </>
  );
};

export default NavLinks;
