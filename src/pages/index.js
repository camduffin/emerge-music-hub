import * as React from "react";
import '../../styles/index.scss';
import { FaRegLightbulb } from 'react-icons/fa';
import { IoIosArrowDropdown } from 'react-icons/io';
import Layout from '../components/Layout';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { FiInstagram } from 'react-icons/fi';
import { FaRegPaperPlane } from 'react-icons/fa';
import { ImYoutube2 } from 'react-icons/im';
import { Parallax } from 'react-parallax';
import landing from '../images/emerge-bg.png';
import subHeader from '../images/subheader-blue1.png';

const IndexPage = () => {

  const emergeLogo = "../images/emerge-logo.png";
  const instagram = "https://www.instagram.com/emergemusichub/";
  const email = "mailto:emergemusichub2021@gmail.com";
  const youtube = "https://www.youtube.com/channel/UC96E1mvcQ82MQmu_auvceGQ";
  
  return (
        <Layout>
            <section className="home-header">
                <Parallax 
                bgImage={landing} 
                className="landing-image"
                strength={500}
                blur={{ min: -15, max: 15 }}
                >
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
                        <IoIosArrowDropdown />
                      </button>
                    </div>
                  </div>
                </Parallax>
              </section>
              <Parallax 
                bgImage={subHeader} 
                strength={500}
                blur={{ min: -15, max: 15 }}
                >
              <section className="intro-video" id="intro-video">
                <div className="wrapper intro-video-section">
                  <div className="intro-video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/eA7KPkXNZLo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                </div>
              </section>
              </Parallax>
              <section className="home-intro-section">
                <div className="wrapper home-intro-text" data-sal="slide-right" data-sal-duration="1500">
                  <h2>Welcome to Emerge Music Hub!</h2>
                  <p>We came up with this initiative after thinking about our own career beginnings. Most musicians can agree there’s a lot of stuff we wish someone would have told us when we were finishing music school, writing songs, forming bands, playing our first shows and dreaming of a future where we could spend all of our time immersed in the one thing we love the most: music. Music is not only a fun, exciting, rewarding and challenging way to express ourselves and find our place in the world, it can also be a real career. With the right tools, research and preparation, a few good tricks of the trade up our sleeves, and of course, the talent and hard work necessary to persevere, this can actually be the way you make a living. It is possible, and we are here to help you achieve your goals with practical, real-life tips and advice from some of Canada’s most successful musicians and industry professionals.</p>
                  <p>-Anna</p>
                </div>
              </section>
              <section className="home-question-one" id="question-one">
                <div className="wrapper">
                  <div className="question-one-container" data-sal="slide-left" data-sal-duration="1500">
                    <div>
                      <p>“Don’t be afraid to be seen, in process, in public. The journey of creating yourself is such a beautiful thing.”</p>
                      <h2>-<span>Kyla Charter</span>, Artist, Activist</h2>
                    </div>
                    <div>
                      <p>“The younger generation are going to blow our minds. There is something magical about them because if they can dream it, it can happen!”</p>
                      <h2>-<span>Serena Ryder</span>, Artist</h2>
                    </div>
                    <div>
                      <p>“Be prepared for a real roller coaster, but it can be really rewarding if your heart is in it.”</p>
                      <h2>-<span>Aaron Goldstein</span>, Producer, Engineer, Artist, owner Baldwin Street Sound</h2>
                    </div>
                  </div>
                </div>
              </section>
              <section className="group-member-background">
                <div className="wrapper group-member-section" data-sal="fade" data-sal-duration="1500">
                  <div className="group-members">
                    <h2>Get to know our team, and check out our socials!</h2>
                    <p>Anna Ruddick, Ben Reinhartz, Margaret O’Toole, Paula Morales, Andres Arroyo and Sophia Lajkosz. Contact us at <a href="mailto:emergemusichub2021@gmail.com">emergemusichub2021@gmail.com</a> </p>
                    <nav>
                      <ul className="home-bottom-nav">
                        <li>
                          <a 
                          href={instagram}
                          target="_blank"
                          rel="noreferrer noopener"
                          >
                              <FiInstagram/>
                          </a>
                        </li>
                        <li>
                          <a href={email}>
                              <FaRegPaperPlane/>
                          </a>
                        </li>
                        <li>
                          <a 
                            href={youtube}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="youtube"
                            >
                              <ImYoutube2 />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="get-started-container">
                    <p className="get-started" data-sal="slide-left" data-sal-duration="2000">Get started here with
                    <Link to="/finance/">
                      <button>Finances & Grants<FaRegLightbulb/></button>
                    </Link>
                    </p>
                  </div>
                </div>
              </section>
          </Layout>
  )
}

export default IndexPage;
