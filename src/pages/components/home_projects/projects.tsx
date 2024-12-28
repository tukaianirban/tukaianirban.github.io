import React from 'react';
import './projects.css';
import icon_pathfinder_germany from "../../../assets/pathfinder-germany_logo.png";
import icon_pricetrends from "../../../assets/pricetrends_logo.png";
import icon_yt_time_manager from "../../../assets/youtube_time_manager_logo.png";

const Projects = () => {
  return (
    <header id='projects'>

      <div className="container section__container">

        <h1>Projects</h1>
        
        <div className='cards'>

          <article className="card"
            onClick={()=> window.open("https://www.anirban-mukherjee.com/projects/pathfinder_germany/", "_blank")}>
            <div className="project_icon__image">
              <img src={icon_pathfinder_germany} alt="Pathfinder Germany" />
            </div>
            <br />
            <h4>Pathfinder Germany</h4>
            <small>Providing a seamless and hassle-free experience for international students to Germany</small>
          </article>

          <article className="card"
            onClick={()=> window.open("https://www.anirban-mukherjee.com/projects/price_trends/", "_blank")}>
            <div className="project_icon__image">
              <img src={icon_pricetrends} alt="PriceTrends" />
            </div>
            <br />
            <h4>PriceTrends</h4>
            <small>Track market price trends of tokens to make faster, quicker trades, swaps </small>
          </article>

          <article className="card"
            onClick={()=> window.open("https://www.anirban-mukherjee.com/projects/youtube-time-manager/", "_blank")}>
            <div className="project_icon__image">
              <img src={icon_yt_time_manager} alt="YouTube Time Manager" />
            </div>
            <br />
            <h4>YouTube Time Manager</h4>
            <small>A Chrome extension to give insights and help manage your time spent on YouTube</small>
          </article>

        </div>

      </div>
    </header>
  )
}

export default Projects;