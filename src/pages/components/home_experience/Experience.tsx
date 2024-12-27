import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        {/* Frontend development experience */}
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>React JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>React Native</h4>
                <small className='text-light'>Experienced</small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>Android OS</h4>
                <small className='text-light'>Advanced</small> 
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Experienced</small> 
              </div>
            </article>
          </div>
        </div>

        {/* backend development experience */}
        <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>Golang</h4>
                <small className='text-light'>Advanced</small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Intermediate</small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>System Architecture</h4>
                <small className='text-light'>Experienced</small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>System Design</h4>
                <small className='text-light'>Experienced</small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill  />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div> 
            </article>
          </div>
        </div>

        {/* Storage */}
        <div className='experience__backend'>
        <h3>Storage technologies</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>RDS</h4>
                <small className='text-light'>Experienced</small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>Document Storage</h4>
                <small className='text-light'>Experienced</small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>Object Storage</h4>
                <small className='text-light'>Experienced</small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>Caching</h4>
                <small className='text-light'>Experienced</small>
              </div> 
            </article>
          </div>
        </div>

        {/* Web3 */}
        <div className='experience__backend'>
        <h3>Web3</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>Smart Contracts</h4>
                <small className='text-light'>Intermediate</small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>Blockchain functions</h4>
                <small className='text-light'>Intermediate</small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>Crypto Custody</h4>
                <small className='text-light'>Experienced</small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>Crypto trading</h4>
                <small className='text-light'>Experienced</small>
              </div> 
            </article>
          </div>
        </div>

        {/* Leadership */}
        <div className='experience__backend'>
        <h3>Organisational Leadership</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>People Management</h4>
                <small className='text-light'>Experienced</small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>Servant Leadership</h4>
                <small className='text-light'>Experienced</small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>Career grooming</h4>
                <small className='text-light'>Experienced</small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>Coaching, Mentorship</h4>
                <small className='text-light'>Experienced</small>
              </div> 
            </article>
          </div>
        </div>




      </div>
    </section>
  )
}

export default Experience;