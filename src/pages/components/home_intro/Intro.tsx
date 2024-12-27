import React from 'react';
import './intro.css';
import IntroCTA from './IntroCTA.tsx';
import ME from "../../../assets/anirban_face_closeup1.jpg";
import IntroSocials from './IntroSocials.tsx';

const Intro = () => {
  return (
    <header id='intro'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Anirban Mukherjee</h1>
        {/* <h3 className='text-light'>Engineering Leader</h3> */}
        
        <div className='container me__container'>

          {/* my image */}
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="Profile" />
            </div>
          </div>

          {/* socials and CTA */}
          <div className='container socials_cta__container'>

            <p className="intro_text">
            I am an Engineering Leader and Creator with a professional experience of over 15 years spanning
            across the telecommunications sector, IoT, FinTech and Blockchains.
            </p>

            {/* social media headers icons */}
            <IntroSocials />

            {/* Call To Actions for Download CV and contact */}
            <IntroCTA /> 
          </div>
          

        </div>

      </div>
    </header>
  )
}

export default Intro;