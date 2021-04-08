import * as React from "react";
import '../../styles/index.scss';
import emergeLogo from '../images/emerge-logo.png';
import { FaArrowCircleRight } from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import Layout from '../components/Layout';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { StaticImage } from 'gatsby-plugin-image';


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
                    <button onClick={() => scrollTo('#who-we-are')}>
                      <FaArrowCircleRight/>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="home-question-one" id="who-we-are">
              <div className="wrapper">
                <div className="question-one-container">
                  <h3>Question 1/2</h3>
                  <h2>What is <span>Emerge Music Hub's</span> mission?</h2>
                  <ul>
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
            <section className="home-question-two">
              <div className="wrapper">
              <div className="question-two-container">
                  <h3>Question 2/2</h3>
                  <h2>What can I learn from <span>Emerge Music Hub?</span></h2>
                  <ul>
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
                </div>
              </div>
            </section>
          </Layout>
  )
}

export default IndexPage;
