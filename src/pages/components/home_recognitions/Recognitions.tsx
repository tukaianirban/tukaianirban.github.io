import React from 'react';
import { FaAward } from "react-icons/fa";
import { IconContext } from "react-icons";

import './recognitions.css';

const Recognitions = () => {
  return (
    <section id='recognitions'>
      <h1>Recognitions</h1>

      <div className="container cards__container">

        <div className="cards">

          <article className="card__empty"></article>

            <article className="card" 
              onClick={()=> window.open("https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/20230008255", "_blank")}>
              <IconContext.Provider value={{className: "card__icon"}}>
                <FaAward size={70} />
              </IconContext.Provider>
              <br />
              <small>Published: Jan, 2021</small>
              <br />
              <br />
              <h4>Privacy Protection for Electronic Devices in Public Settings</h4>
              {/* <br /> */}
              {/* <small>About a decade of experience working on hyper-scale internet routing and enterprise security products across Ericsson GmbH, Juniper Networks</small> */}
            </article>

            <article className="card__empty"></article>
        </div>

      </div>
       
    </section>
  )
}

export default Recognitions;