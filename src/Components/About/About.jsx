import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
      <h3>ABOUT UNIVERSITY</h3>
      <h2>Nurturing Tomorrow's Leaders Today</h2>
      <p>
        Welcome to Edusity, a hub of academic excellence and vibrant campus
        life. Established in 2000, our university in New york, offers top-tier
        facilities and a diverse community. At Edusity, we are dedicated to
        fostering intellectual curiosity, personal growth, and global
        citizenship.
      </p>

      <p>
        Edusity offers diverse academic programs across humanities, STEM, and
        more. Our esteemed faculty and cutting-edge facilities support
        pioneering research and industry partnerships, ensuring our graduates
        are well-prepared for their careers.
      </p>
      <p>
        Life at Edusity, extends beyond academics with over 10 student clubs and
        organizations. Our lively campus hosts cultural events, academic
        symposiums, and community outreach, fostering a rich student experience
        and lifelong connections.
      </p>
      </div>
    </div>
  );
};

export default About;
