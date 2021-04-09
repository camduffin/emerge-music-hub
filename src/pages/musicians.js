import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Musicians = () => {
    return(
        <div className="musicians">
            <Layout>
                <section className="first-recording-container">
                    <div className="wrapper">
                        <ul className="recording-artist-container">
                            <li>
                                <StaticImage onClick={() => scrollTo('#video-josh')} src="../images/artists/josh-korody.jpg" alt="Picture of Josh Korody" placeholder="blurred" loading="lazy"/>
                                <h5>Josh Korody</h5>
                            </li>
                            <li>
                            <StaticImage src="../images/artists/artist2.jpg" alt="Tim Dashney" placeholder="blurred" loading="lazy"/>
                                <h5>Tim Dashney</h5>
                            </li>
                            <li>
                                <StaticImage src="../images/artists/artist3.jpg" alt="Tim Dashney" placeholder="blurred" loading="lazy"/>
                                <h5>Donald Drumpft</h5>
                            </li>
                            <li>
                                <StaticImage src="../images/artists/artist2.jpg" alt="Tim Dashney" placeholder="blurred" loading="lazy"/>
                                <h5>Carley Rae Jepson</h5>
                            </li>
                            <li>
                                <StaticImage src="../images/artists/artist2.jpg" alt="Tim Dashney" placeholder="blurred" loading="lazy"/>
                            </li>
                            <li>
                                <StaticImage src="../images/artists/artist2.jpg" alt="Tim Dashney" placeholder="blurred" loading="lazy"/>
                            </li>
                        </ul>
                        <h2>Extra tips from the pros</h2>
                    </div>
                </section>
                <section className="musician-videos">
                    <div className="wrapper">
                        <ul className="musician-video-list">
                            <li>
                                <h4>Tame Impala - InnerSpeaker Memories</h4>
                                <iframe
                                    id="video-josh"
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
                            <li>
                                <h4>Radiohead - SUE Festival 2018 Chile</h4>
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/3rs_3fe51GY"
                                    srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:#0A2F58;opacity:0.9;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/3rs_3fe51GY?autoplay=1><img src=https://img.youtube.com/vi/3rs_3fe51GY/hqdefault.jpg alt=Radiohead - SUE Festival 2018 Chile><span>▶</span></a>"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Radiohead - SUE Festival 2018 Chile"
                                ></iframe>
                            </li>
                        </ul>
                    </div>
                </section>
        </Layout> 
        </div>
    )
}

export default Musicians;