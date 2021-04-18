import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Recording = () => {
    return (
    <div className="recording">
        <Layout>
            <div className="wrapper">
                <section className="first-recording-container">
                        <ul className="recording-artist-container">
                            <li>
                                <StaticImage onClick={() => scrollTo('#jill-zim')} src="../images/artists/jill-zim.jpg" alt="Picture of Jill Zimmermann" placeholder="blurred"/>
                                <h5>Jill Zimmermann</h5>
                            </li>
                            <li>
                            <StaticImage src="../images/artists/erin-costelo.jpg" alt="Picture of Erin Costelo" placeholder="blurred"/>
                                <h5>Erin Costelo</h5>
                            </li>
                            <li>
                                <StaticImage src="../images/artists/josh-korody.jpg" alt="Picture of Josh Korody" placeholder="blurred"/>
                                <h5>Josh Korody</h5>
                            </li>
                            <li>
                                <StaticImage src="../images/artists/chris-stringer.jpg" alt="Picture of Chris Stringer" placeholder="blurred"/>
                                <h5>Chris Stringer</h5>
                            </li>
                            <li>
                                <StaticImage src="../images/artists/aaron-goldstein.jpeg" alt="Picture of Aaron Goldstein" placeholder="blurred"/>
                                <h5>Aaron Goldstein</h5>
                            </li>
                            <li>
                                <StaticImage src="../images/artists/terra-lightfoot.jpg" alt="Picture of Terra Lightfoot" placeholder="blurred"/>
                                <h5>Terra Lightfoot</h5>
                            </li>
                            <li>
                                <StaticImage src="../images/artists/andy-shauf.png" alt="Photo of Andy Shauf" placeholder="blurred"/>
                                <h5>Andy Shauf</h5>
                            </li>
                            <li>
                                <StaticImage src="../images/artists/alysha.jpg" alt="Picture of Alysha Brilla" placeholder="blurred"/>
                                <h5>Alysha Brilla</h5>
                            </li>
                        </ul>
                    <h2>Your First<span>Recording</span></h2>
                </section>
                <section className="recording-text">
                    <div className="wrapper recording-text-container">
                        <p data-sal="fade" data-sal-duration="1500">Making your first record is one of the most exciting moments of your life. Everything you have ever done, all of the writing, rehearsing, collaborating, putting yourself out there and working day and night to finesse your musical vision has led to this moment. Put it this way- you’ll never again have had that much time to prepare for a record (your whole life up until now!). I remember when my first band made our first record. We had already signed a zillion page (approximately) record deal that we didn’t even realize (or care) would ensure we wouldn’t make a cent off the actual record itself. That didn’t matter. Walking into the control room of that big expensive studio for the first time, I knew I had never been so happy, so consumed by, so in love with whatever was about to happen. For many musicians making records is a spectacular, unparalleled experience. We want you to know that you can hire a producer and rent a studio, but there’s a lot of other important stuff you will want to think about and do before you enter that studio to ensure you make the most of that experience and make the best record you can. We spoke to some of our favourite Canadian producers and engineers about their own careers and experiences and what the most important things are that young artists can do to be prepared for their first recording.</p>
                        <p>-Anna</p>
                    </div>
                </section>
                <section className="wrapper">
                    <div className="jill-zim-video">
                        <h4 id="jill-zim">Jill Zimmermann - Engineer, Jukasa Studios</h4>
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
                </section>
                
            </div>
        </Layout>
    </div>    
    )
}

export default Recording;