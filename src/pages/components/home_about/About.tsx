import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">

      <div className="container about__container">
        
        <h1>About Me</h1>

          {/* paragraph of text */}
        <p>
            Having worked on delivering hyperscale routing products, and led major product development for customers in Europe and Americas, 
            I joined a startup in 2019 to build, structure and lead the engineering chapter for a revolutionary new AI-driven smartphone. 
            In 2022, I moved to a FinTech startup where I led the Wealth domain, comprising of a portfolio of regulated 
            financial products to help consumers grow their wealth through trading, short and long term investments.
            <br />
            Currently, I am serving as Engineering Manager for a cryptocurrency startup providing regulated crypto custody and staking solutions to global businesses.
        </p>

        <br />  


        <div className="about__cards">
          <article className="about__card">
            {/* <FaAward /> */}
            <h4>Telecom</h4>
            <h5>2009 - 2019</h5>
            <br />
            <small>About a decade of experience working on hyper-scale internet routing and enterprise security products across Ericsson GmbH, Juniper Networks</small>
          </article>

          <article className="about__card">
            {/* <FiUsers /> */}
            <h4>Smartphones</h4>
            <h5>2019 - 2002</h5>
            <br />
            <small>
              Built and scaled the engineering team of a stealth-mode startup 
              aiming to build an intelligent smartphone with AI capabilities built 
              into every layer of the product.
            </small>
          </article>

          <article className="about__card">
            {/* <FiUsers /> */}
            <h4>Cryptocurrency</h4>
            <h5>2022 - now</h5>
            <br />
            <small>
              Led teams and chapters working on crypto custody, trading, ETFs and staking.
            </small>
          </article>

        </div>

          
      </div>
    </section>
  );
};

export default About;