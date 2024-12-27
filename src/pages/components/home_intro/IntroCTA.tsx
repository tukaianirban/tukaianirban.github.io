import React from "react";
import CV from "../../../assets/cv.pdf"; // requires adding .pdf to global.d.ts for pdf files to be recognised

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn btn-primary">
        Download CV
      </a>
      <a href="#contact" className="btn btn-secondary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
