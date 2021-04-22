import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { IoIosArrowDropup } from 'react-icons/io';
import { IoIosArrowDropdown } from 'react-icons/io';
import { Parallax } from 'react-parallax';
import darkBlue from '../images/darkblue-bg2.png';
import red from '../images/red-bg1.png';

const Musicians = () => {
    return(
        <div className="musicians">
            <Layout>
                <Parallax
                bgImage={red}
                strength={500}
                >
                <IoIosArrowDropup className="scroll-top" onClick={() => scrollTo('#header')}/>
                <section className="first-recording-container">
                    <div className="wrapper">
                        <ul className="recording-artist-container">
                            <li onClick={() => scrollTo('#wade-macneil')}>
                                <StaticImage 
                                src="../images/artists/wade-macneil.jpg" 
                                alt="Picture of Wade Macneil" 
                                placeholder="blurred" 
                                loading="lazy"
                                width={275}
                                height={275}
                                />
                                <h5>Wade Macneil</h5>
                            </li>
                            <li onClick={() => scrollTo('#terra-lightfoot')}>
                            <StaticImage 
                            src="../images/artists/terra-lightfoot.jpg" 
                            alt="Picture of Terra Lightfoot" 
                            placeholder="blurred" 
                            loading="lazy"
                            width={275}
                            height={275}
                            />
                                <h5>Terra Lightfoot</h5>
                            </li>
                            <li onClick={() => scrollTo('#andy-shauf')}>
                                <StaticImage 
                                src="../images/artists/andy-shauf.png" 
                                alt="Picture of Andy Shauf" 
                                placeholder="blurred" 
                                loading="lazy"
                                width={275}
                                height={275}
                                />
                                <h5>Andy Shauft</h5>
                            </li>
                            <li onClick={() => scrollTo('#kyla-charter')}>
                                <StaticImage 
                                src="../images/artists/kyla-charter.jpg" 
                                alt="Picture of Kyla Charter" 
                                placeholder="blurred" 
                                loading="lazy"
                                width={275}
                                height={275}
                                />
                                <h5>Kyla Charter</h5>
                            </li>
                            <li onClick={() => scrollTo('#serena')}>
                                <StaticImage 
                                src="../images/artists/serena-ryder.jpg" 
                                alt="Picture of Serena Ryder" 
                                placeholder="blurred" 
                                loading="lazy"
                                width={275}
                                height={275}
                                />
                                <h5>Serena Ryder</h5>
                            </li>
                            <li onClick={() => scrollTo('#moscow')}>
                                <StaticImage 
                                src="../images/artists/moscow.jpg" 
                                alt="Picture of Moscow Apartment" 
                                placeholder="blurred" 
                                loading="lazy"
                                width={275}
                                height={275}
                                />
                                <h5>Moscow Apartment</h5>
                            </li>
                            <li onClick={() => scrollTo('#cadence')}>
                                <StaticImage 
                                src="../images/artists/cadence.webp" 
                                alt="Picture of Cadence Weapon" 
                                placeholder="blurred" 
                                loading="lazy"
                                width={275}
                                height={275}
                                
                                />
                                <h5>Cadence Weapon</h5>
                            </li>
                            <li onClick={() => scrollTo('#bahamas')}>
                                <StaticImage src="../images/artists/bahamas.jpg" 
                                alt="Picture of Bahamas (Afie Jurvanen)" 
                                placeholder="blurred" 
                                loading="lazy"
                                width={275}
                                height={275}
                                />
                                <h5>Afie Jurvanen</h5>
                            </li>
                            <h2>Extra tips from the pros</h2>
                        </ul>
                    </div>
                </section>
                </Parallax>
                <section className="tips-text">
                    <div className="wrapper tips-text-container">
                        <h2>Tips from the pros</h2>
                        <p data-sal="fade" data-sal-duration="1500">The best way to learn about anything is to get advice from the people that have already figured it all out- the professionals. In interviewing all of the incredible, accomplished and generous Canadian artists who volunteered their time to this initiative we learned a lot we didn’t know, but mostly that even they don’t actually have it all figured out. One of our biggest takeaways has been that a musician never stops learning. We remain students our whole lives. In this module we will learn about the successes, failures, challenges, struggles, achievements and the life in general of some of Canada’s brightest stars. These people have worked so hard and made many sacrifices to be where they are. They know about how to develop the best type of career, one with longevity, and they want to give you some of that wisdom. The Canadian music industry thrives on everyone supporting each other and working together and one of the best ways for the industry to thrive and keep music alive is to keep you, the next generation of young artists, musicians and industry professionals informed and support your goals!</p>
                        <p>-Anna</p>
                    </div>
                </section>
                <section className="musician-videos">
                    <ul className="musician-video-list">
                    <Parallax
                        bgImage={red}
                        strength={500}
                        >
                            <div className="wrapper">
                                <h4 className="wade-macneil" id="wade-macneil">Wade Macneil <span>- Artist</span></h4>
                                <li className="wade-macneil-video">
                                    <iframe
                                        data-sal="fade" data-sal-duration="1500"
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/_o26HtOgnFY"
                                        srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:#0A2F58;opacity:0.9;text-shadow:0 0 .2em black}</style><a href=https://www.youtube.com/embed/_o26HtOgnFY?autoplay=1><img src=https://img.youtube.com/vi/_o26HtOgnFY/hqdefault.jpg alt=Tame Impala - InnerSpeaker Memories><span>▶</span></a>"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Tame Impala - InnerSpeaker Memories"
                                    ></iframe>
                                </li>
                            </div>
                        </Parallax>
                            <div className="quote-container-one">
                                <div className="wrapper">
                                    <p>“You don’t realize it at the time, but when things seem the worst and you’re struggling the most, those are the times you look back at the fondest.”</p>
                                    <p>-Wade MacNeil, Artist (Alexisonfire)</p>
                                </div>
                            </div>
                            <Parallax
                                bgImage={red}
                                strength={500}
                                >
                            <div className="wrapper">
                                <h4 className="terra-lightfoot" id="terra-lightfoot">Terra Lightfoot <span>- Artist</span></h4>
                                <li className="terra-lightfoot-video">
                                    {/* <iframe
                                        data-sal="fade" data-sal-duration="1500"
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/3rs_3fe51GY"
                                        srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:#0A2F58;opacity:0.9;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/3rs_3fe51GY?autoplay=1><img src=https://img.youtube.com/vi/3rs_3fe51GY/hqdefault.jpg alt=Radiohead - SUE Festival 2018 Chile><span>▶</span></a>"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Radiohead - SUE Festival 2018 Chile"
                                    ></iframe> */}
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/LeXsySu3Y3k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </li>
                            </div>
                            <div className="wrapper">
                                <h4 className="andy-shauf" id="andy-shauf">Andy Shauf <span>- Artist</span></h4>
                                <li className="andy-shauf-video">
                                    {/* <iframe
                                        data-sal="fade" data-sal-duration="1500"
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/3rs_3fe51GY"
                                        srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:#0A2F58;opacity:0.9;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/3rs_3fe51GY?autoplay=1><img src=https://img.youtube.com/vi/3rs_3fe51GY/hqdefault.jpg alt=Radiohead - SUE Festival 2018 Chile><span>▶</span></a>"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Radiohead - SUE Festival 2018 Chile"
                                    ></iframe> */}
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/AOfBsenI98Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </li>
                            </div>
                        </Parallax>
                            <div className="quote-container-two">
                                <div className="wrapper">
                                    <p>“You kind of have to put yourself out there before you’re smart enough to know it's not a great idea.”</p>
                                    <p>-Andy Shauf</p>
                                </div>
                            </div>
                        <Parallax
                            bgImage={darkBlue}
                            strength={500}
                            >
                            <div className="wrapper">
                                <h4 id="kyla-charter">Kyla Charter <span>- Artist, Activist</span></h4>
                                <li className="kyla-charter-video">
                                    {/* <iframe
                                        data-sal="fade" data-sal-duration="1500"
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/3rs_3fe51GY"
                                        srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:#0A2F58;opacity:0.9;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/3rs_3fe51GY?autoplay=1><img src=https://img.youtube.com/vi/3rs_3fe51GY/hqdefault.jpg alt=Radiohead - SUE Festival 2018 Chile><span>▶</span></a>"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Radiohead - SUE Festival 2018 Chile"
                                    ></iframe> */}
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/huxfn-dELU0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </li>
                            </div>
                            <div className="wrapper">
                                <h4 id="serena">Serena Ryder <span>- Artist</span></h4>
                                <li className="serena-video">
                                    {/* <iframe
                                        data-sal="fade" data-sal-duration="1500"
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/3rs_3fe51GY"
                                        srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:#0A2F58;opacity:0.9;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/3rs_3fe51GY?autoplay=1><img src=https://img.youtube.com/vi/3rs_3fe51GY/hqdefault.jpg alt=Radiohead - SUE Festival 2018 Chile><span>▶</span></a>"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Radiohead - SUE Festival 2018 Chile"
                                    ></iframe> */}
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/6SQOtndE-tw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </li>
                            </div>
                        </Parallax>
                        <Parallax
                            bgImage={darkBlue}
                            strength={500}
                            >
                            <div className="wrapper">
                                <h4 id="moscow">Moscow Apartment <span>- Artist</span></h4>
                                <li className="moscow-video">
                                    {/* <iframe
                                        data-sal="fade" data-sal-duration="1500"
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/3rs_3fe51GY"
                                        srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:#0A2F58;opacity:0.9;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/3rs_3fe51GY?autoplay=1><img src=https://img.youtube.com/vi/3rs_3fe51GY/hqdefault.jpg alt=Radiohead - SUE Festival 2018 Chile><span>▶</span></a>"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Radiohead - SUE Festival 2018 Chile"
                                    ></iframe> */}
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/kZuAIWAY9D4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </li>
                            </div>
                            <div className="wrapper">
                                <h4 id="cadence">Cadence Weapon <span>- Artist</span></h4>
                                <li className="cadence-video">
                                    {/* <iframe
                                        data-sal="fade" data-sal-duration="1500"
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/3rs_3fe51GY"
                                        srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:#0A2F58;opacity:0.9;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/3rs_3fe51GY?autoplay=1><img src=https://img.youtube.com/vi/3rs_3fe51GY/hqdefault.jpg alt=Radiohead - SUE Festival 2018 Chile><span>▶</span></a>"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Radiohead - SUE Festival 2018 Chile"
                                    ></iframe> */}
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/PUWHNFiFh1s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </li>
                            </div>
                        
                            <div className="wrapper">
                                <h4 id="bahamas">Afie Jurvanen (Bahamas) <span>- Artist</span></h4>
                                <li className="bahamas-video">
                                    {/* <iframe
                                        data-sal="fade" data-sal-duration="1500"
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/3rs_3fe51GY"
                                        srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:#0A2F58;opacity:0.9;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/3rs_3fe51GY?autoplay=1><img src=https://img.youtube.com/vi/3rs_3fe51GY/hqdefault.jpg alt=Radiohead - SUE Festival 2018 Chile><span>▶</span></a>"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Radiohead - SUE Festival 2018 Chile"
                                    ></iframe> */}
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZDnBwJhulLI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </li>
                            </div>
                            </Parallax>
                        </ul>
                </section>
        </Layout> 
        </div>
    )
}

export default Musicians;