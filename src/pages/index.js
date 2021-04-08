import * as React from "react";
import '../../styles/index.scss';
import { FaArrowCircleRight, FaRegLightbulb } from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import Layout from '../components/Layout';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';


const IndexPage = () => {

  const emergeLogo = "../images/emerge-logo.png";
  
  return (
        <Layout>
          <section className="home-header">
              <div className="landing-image" >
                <div className="landing-header-container wrapper">
                  <h1>
                    <div className="sr-only">
                      Emerge Music Hub
                    </div>
                    <div className="emerge-main-logo" data-sal="slide-left" data-sal-duration="1000">
                      <StaticImage src={emergeLogo} alt="Emerge Music Hub logo" placeholder="blurred"/>
                    </div>
                  </h1>
                  <div className="main-header-text">
                    <p data-sal="slide-right" data-sal-duration="1000">A professional development online hub for emerging artists</p>
                    <button onClick={() => scrollTo('#intro-video')}>
                      <FaArrowCircleRight/>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="intro-video" id="intro-video">
              <div className="wrapper intro-video-section">
                <div className="intro-video-container">
                  <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/_o26HtOgnFY"
                      srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:#0A2F58;opacity:0.9;text-shadow:0 0 .2em black}</style><a href=https://www.youtube.com/embed/_o26HtOgnFY?autoplay=1><img src=https://img.youtube.com/vi/_o26HtOgnFY/hqdefault.jpg alt=Tame Impala - InnerSpeaker Memories><span>▶</span></a>"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Tame Impala - InnerSpeaker Memories"
                  ></iframe>
                </div>
              </div>
            </section>
            <section className="home-question-one" id="question-one">
              <div className="wrapper">
                <div className="question-one-container">
                  <h3 data-sal="slide-left" data-sal-duration="1000">Question 1/2</h3>
                  <h2 data-sal="slide-left" data-sal-duration="1000">What is <span>Emerge Music Hub's</span> mission?</h2>
                  <ul data-sal="slide-right" data-sal-duration="1000">
                    <li>
                      <IoMdCheckmarkCircleOutline />
                      <p>To help young musicians and emerging artists navigate the <span>business</span> of music.</p>
                    </li>
                    <li>
                    <IoMdCheckmarkCircleOutline />
                      <p>To educate, inspire and motivate the next generation of Canadian music professionals.</p>
                    </li>
                    <li>
                    <IoMdCheckmarkCircleOutline />
                      <p>To provide tools and information about how the Canadian Music Industry operates, on every level.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="home-question-two" id="question-two">
              <div className="wrapper">
                <div className="question-two-container">
                  <h3 data-sal="slide-left" data-sal-duration="1000">Question 2/2</h3>
                  <h2 data-sal="slide-left" data-sal-duration="1000">What can I learn from <span>Emerge Music Hub?</span></h2>
                  <ul data-sal="slide-right" data-sal-duration="1000">
                    <li>
                      <IoMdCheckmarkCircleOutline />
                      <p>The real-life sacrifices it takes to make music my career.</p>
                    </li>
                    <li>
                    <IoMdCheckmarkCircleOutline />
                      <p>The importance of building a musical community.</p>
                    </li>
                    <li>
                    <IoMdCheckmarkCircleOutline />
                      <p>How to put myself and my music out there!</p>
                    </li>
                  </ul>
                  <div>
                    <p className="get-started" data-sal="slide-left" data-sal-duration="2000">Get started with
                    <Link to="/musicians">
                      <button>Tips from the Pros <FaRegLightbulb/></button>
                    </Link>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </Layout>
  )
}

export default IndexPage;
