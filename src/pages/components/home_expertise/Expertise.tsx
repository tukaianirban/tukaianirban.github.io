import React from 'react';
import { BiCheck } from 'react-icons/bi';
import './expertise.css';

const Expertise = () => {
  return (
    <section id='services'>
      <h5>What I specialise in</h5>
      <h2>Expertise</h2>

      <div className='container services__container'>

        {/* App/Web Development */}
        <article className='service'>
          <div className="service__head">
            <h3>App and Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck />
              <p>React-based or native smartphone apps</p>
            </li>
            <li>
              <BiCheck />
              <p>User centric experiences</p>
            </li>
            <li>
              <BiCheck />
              <p>B2C and C2C apps</p>
            </li>
            <li>
              <BiCheck />
              <p>Bootstrap your business idea with fast prototype systems</p>
            </li>
          </ul>
        </article>

        {/* software development consultancy */}
        <article className='service'>
          <div className="service__head">
            <h3>Cloud and backend development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck />
              <p>Amazon Web Services</p>
            </li>
            <li>
              <BiCheck />
              <p>Google Cloud Platform</p>
            </li>
            <li>
              <BiCheck />
              <p>Microservice based architectures</p>
            </li>
            <li>
              <BiCheck />
              <p>Event driven systems</p>
            </li>
            <li>
              <BiCheck />
              <p>Realtime systems</p>
            </li>
          </ul>
        </article>

        {/* software development consultancy */}
        <article className='service'>
          <div className="service__head">
            <h3>System Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck />
              <p>Domain driven designs</p>
            </li>
            <li>
              <BiCheck />
              <p>Hyperscale system architectures</p>
            </li>
            <li>
              <BiCheck />
              <p>Domain specific system architecture design</p>
            </li>
            <li>
              <BiCheck />
              <p>Integration and Deployment pipelines</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Expertise;