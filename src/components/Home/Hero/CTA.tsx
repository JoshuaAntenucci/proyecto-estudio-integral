"use client";

import { Link as ScrollLink } from "react-scroll";

const CTA = () => {
  return (
    <ScrollLink to="contact" smooth={true} duration={300}>
      Contactános
    </ScrollLink>
  );
};

export default CTA;
