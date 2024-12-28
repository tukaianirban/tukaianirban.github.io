import React from "react";
// import CV from "../../../assets/cv.pdf"; // requires adding .pdf to global.d.ts for pdf files to be recognised

const CTA = () => {
  return (
    <div className="cta">
      <a href="mailto:me@anirban-mukherjee.com" target="_blank" rel="noreferrer"
        className="btn btn-primary">
        Write to me
      </a>
      <a href="https://calendly.com/anirbanmukherjee" target="_blank" rel="noreferrer"
        className="btn btn-primary">
        Let's Meet
      </a>
    </div>
  );
};

export default CTA;
