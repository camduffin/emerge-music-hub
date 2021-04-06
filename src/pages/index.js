import * as React from "react";
import '../../styles/index.scss';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import emergeLogo from '../images/emerge-logo.png';
import { FaArrowCircleRight } from 'react-icons/fa';

const IndexPage = () => {
  return (
      <header className="home-header">
        <div className="landing-image" data-sal="fade" data-sal-duration="1000">
          <div className="landing-header-container wrapper">
            <h1>
              <div className="sr-only">
                Emerge Music Hub
              </div>
              <div className="emerge-main-logo">
                <img data-sal="slide-right" data-sal-duration="1000" src={emergeLogo} alt=""/>
              </div>
            </h1>
            <p data-sal="slide-left" data-sal-duration="1000">A professional development online hub for emerging artists</p>
          <nav>
            <AniLink swipe direction="left" to="/home">
              <button>
                Enter Site
                <FaArrowCircleRight/>
              </button>
            </AniLink>
          </nav>
          </div>
        </div>
      </header>
  )
}

export default IndexPage
