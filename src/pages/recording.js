import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { IoIosArrowDropup } from 'react-icons/io';
import { Parallax } from 'react-parallax';
import mainBG from '../images/emerge-bg.png';
import blueBG from '../images/blue-bg1.png';
import subHeadBG from '../images/subheader-blue1.png';
const Recording = () => {
    return (
    <div className="recording">
        <Layout>
            <Parallax
            bgImage={mainBG}
            strength={500}
            blur={{ min: -15, max: 15 }}
            >
            <IoIosArrowDropup className="scroll-top" onClick={() => scrollTo('#header')}/>
            <div className="wrapper">
                <section className="first-recording-container">
                        <ul className="recording-artist-container">
                            <li onClick={() => scrollTo('#jill-zim')}>
                                <StaticImage 
                                src="../images/artists/jill-zim.webp" 
                                alt="Picture of Jill Zimmermann" 
                                placeholder="blurred"
                                loading="lazy"
                                width={250}
                                height={250}
                                />
                                <h5 className="jill-zim-text">Jill Zimmermann</h5>
                            </li>
                            <li onClick={() => scrollTo('#erin-costelo')}>
                            <StaticImage 
                            src="../images/artists/erin-costelo.jpg" 
                            alt="Picture of Erin Costelo" 
                            placeholder="blurred"
                            loading="lazy"
                            width={250}
                            height={250}
                            />
                                <h5>Erin Costelo</h5>
                            </li>
                            
                            <li onClick={() => scrollTo('#josh-korody-two')}>
                                <StaticImage 
                                src="../images/artists/josh-korody.jpg" 
                                alt="Picture of Josh Korody" 
                                placeholder="blurred"
                                loading="lazy"
                                width={250}
                                height={250}
                                />
                                <h5>Josh Korody</h5>
                            </li>
                            <li onClick={() => scrollTo('#chris-stringer')}>
                                <StaticImage 
                                src="../images/artists/chris-stringer.jpg" 
                                alt="Picture of Chris Stringer" 
                                placeholder="blurred"
                                loading="lazy"
                                width={250}
                                height={250}
                                />
                                <h5>Chris Stringer</h5>
                            </li>
                            <li onClick={() => scrollTo('#aaron-goldstein')}>
                                <StaticImage 
                                src="../images/artists/aaron-goldstein.jpeg" 
                                alt="Picture of Aaron Goldstein" 
                                placeholder="blurred"
                                loading="lazy"
                                width={250}
                                height={250}
                                />
                                <h5>Aaron Goldstein</h5>
                            </li>
                            <h2>Your <span>First</span> Recording</h2>
                            <li onClick={() => scrollTo('#terra')}>
                                <StaticImage 
                                src="../images/artists/terra-lightfoot.jpg" 
                                alt="Picture of Terra Lightfoot" 
                                placeholder="blurred"
                                loading="lazy"
                                width={250}
                                height={250}
                                />
                                <h5>Terra Lightfoot</h5>
                            </li>
                            <li onClick={() => scrollTo('#andy')}>
                                <StaticImage 
                                src="../images/artists/andy-shauf.png" 
                                alt="Photo of Andy Shauf" 
                                placeholder="blurred"
                                loading="lazy"
                                width={250}
                                height={250}
                                />
                                <h5>Andy Shauf</h5>
                            </li>
                            <li onClick={() => scrollTo('#alysha')}>
                                <StaticImage 
                                src="../images/artists/alysha.jpg" 
                                alt="Picture of Alysha Brilla" 
                                placeholder="blurred"
                                loading="lazy"
                                width={250}
                                height={250}
                                />
                                <h5>Alysha Brilla</h5>
                            </li>  
                        </ul>
                </section>
                </div>
                </Parallax>
                <section className="recording-text">
                    <div className="wrapper">
                        <div className="wrapper recording-text-container">
                            <h2>Recording</h2>
                            <p data-sal="fade" data-sal-duration="1500">Making your first record is one of the most exciting moments of your life. Everything you have ever done, all of the writing, rehearsing, collaborating, putting yourself out there and working day and night to finesse your musical vision has led to this moment. Put it this way- you’ll never again have had that much time to prepare for a record (your whole life up until now!). I remember when my first band made our first record. We had already signed a zillion page (approximately) record deal that we didn’t even realize (or care) would ensure we wouldn’t make a cent off the actual record itself. That didn’t matter. Walking into the control room of that big expensive studio for the first time, I knew I had never been so happy, so consumed by, so in love with whatever was about to happen. For many musicians making records is a spectacular, unparalleled experience. We want you to know that you can hire a producer and rent a studio, but there’s a lot of other important stuff you will want to think about and do before you enter that studio to ensure you make the most of that experience and make the best record you can. We spoke to some of our favourite Canadian producers and engineers about their own careers and experiences and what the most important things are that young artists can do to be prepared for their first recording.</p>
                            <p>-Anna</p>
                        </div>
                    </div>
                </section>
                <section className="recording-video-container">
                <Parallax
                    bgImage={mainBG}
                    strength={500}
                    blur={{ min: -15, max: 15 }}
                    >
                    <div className="wrapper">
                        <div className="jill-zim-video">
                            <h4 id="jill-zim">Jill Zimmermann <span>- Engineer, Jukasa Studios</span></h4>
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
                        </div>
                    </div> 
                    </Parallax>  
                    <div className="quote-container-one">
                        <div className="wrapper">
                            <p>“Plan more time in the studio. You will need more time.”</p>
                            <p>-Jill Zimmermann</p>
                        </div>
                    </div>
                    <Parallax
                        bgImage={mainBG}
                        strength={500}
                        blur={{ min: -15, max: 15 }}
                        >
                    <div className="erin-costelo-video">
                        <div className="wrapper">
                            <h4 id="erin-costelo">Erin Costelo <span>- Engineer, Producer, Artist</span></h4>
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
                        </div>
                    </div>
                    </Parallax>
                    <div className="josh-korody-video">
                        <div className="wrapper">
                            <h4 id="josh-korody-two">Josh Korody <span>- Producer, Engineer, Artist, owner Candle Recording</span></h4>
                            <iframe
                                data-sal="fade" data-sal-duration="1500"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/_o26HtOgnFY"
                                srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:#0A2F58;opacity:0.9;text-shadow:0 0 .2em black}</style><a href=https://www.youtube.com/embed/_o26HtOgnFY?autoplay=1><img src=https://img.youtube.com/vi/_o26HtOgnFY/hqdefault.jpg alt=Josh Korody - Producer, Engineer, Artist, owner Candle Recording><span>▶</span></a>"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Tame Impala - InnerSpeaker Memories"
                            ></iframe>
                        </div>
                    </div>
                    <div className="chris-stringer-video">
                        <div className="wrapper">
                            <h4 id="chris-stringer">Chris Stringer <span>- Producer, Engineer, owner Union Sound Company</span></h4>
                            <iframe
                                data-sal="fade" data-sal-duration="1500"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/_o26HtOgnFY"
                                srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:#0A2F58;opacity:0.9;text-shadow:0 0 .2em black}</style><a href=https://www.youtube.com/embed/_o26HtOgnFY?autoplay=1><img src=https://img.youtube.com/vi/_o26HtOgnFY/hqdefault.jpg alt=Chris Stringer - Producer, Engineer, owner Union Sound Company><span>▶</span></a>"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Tame Impala - InnerSpeaker Memories"
                            ></iframe>
                        </div>
                    </div>
                    <div className="quote-container-two">
                        <div className="wrapper">
                            <p>“Managing sonic expectations and working with what’s coming out at any given moment… Those are the biggest hurdles for young bands.”</p>
                            <p>-Chris Stringer</p>
                        </div>
                    </div>
                    <div className="aaron-goldstein-video">
                        <div className="wrapper">
                            <h4 id="aaron-goldstein">Aaron Goldstein <span>- Producer, Engineer, Artist, owner Baldwin Street Sound</span></h4>
                            <iframe
                                data-sal="fade" data-sal-duration="1500"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/_o26HtOgnFY"
                                srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:#0A2F58;opacity:0.9;text-shadow:0 0 .2em black}</style><a href=https://www.youtube.com/embed/_o26HtOgnFY?autoplay=1><img src=https://img.youtube.com/vi/_o26HtOgnFY/hqdefault.jpg alt=Aaron Goldstein - Producer, Engineer, Artist, owner Baldwin Street Sound><span>▶</span></a>"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Tame Impala - InnerSpeaker Memories"
                            ></iframe>
                        </div>    
                    </div>
                    <div className="terra-video">
                        <div className="wrapper">
                            <h4 id="terra">Terra Lightfoot <span>- Artist</span></h4>
                            <iframe
                                data-sal="fade" data-sal-duration="1500"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/_o26HtOgnFY"
                                srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:#0A2F58;opacity:0.9;text-shadow:0 0 .2em black}</style><a href=https://www.youtube.com/embed/_o26HtOgnFY?autoplay=1><img src=https://img.youtube.com/vi/_o26HtOgnFY/hqdefault.jpg alt=Terra Lightfoot - Artist><span>▶</span></a>"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Tame Impala - InnerSpeaker Memories"
                            ></iframe>
                        </div>
                    </div>
                    <div className="andy-video">
                        <div className="wrapper">
                            <h4 id="andy">Andy Shauf <span>- Artist</span></h4>
                            <iframe
                                data-sal="fade" data-sal-duration="1500"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/_o26HtOgnFY"
                                srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:#0A2F58;opacity:0.9;text-shadow:0 0 .2em black}</style><a href=https://www.youtube.com/embed/_o26HtOgnFY?autoplay=1><img src=https://img.youtube.com/vi/_o26HtOgnFY/hqdefault.jpg alt=Andy Shauf - Artist><span>▶</span></a>"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Tame Impala - InnerSpeaker Memories"
                            ></iframe>
                        </div>
                    </div>
                    <div className="alysha-video">
                        <div className="wrapper">
                            <h4 id="alysha">Alysha Brilla <span>- Artist, Producer</span></h4>
                            <iframe
                                data-sal="fade" data-sal-duration="1500"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/_o26HtOgnFY"
                                srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:#0A2F58;opacity:0.9;text-shadow:0 0 .2em black}</style><a href=https://www.youtube.com/embed/_o26HtOgnFY?autoplay=1><img src=https://img.youtube.com/vi/_o26HtOgnFY/hqdefault.jpg alt=Alysha Brilla - Artist, Producer><span>▶</span></a>"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Tame Impala - InnerSpeaker Memories"
                            ></iframe>
                        </div>
                    </div>
                </section>
        </Layout>
    </div>    
    )
}

export default Recording;