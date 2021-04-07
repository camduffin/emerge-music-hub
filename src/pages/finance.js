import React from 'react';
import '../../styles/index.scss';
import Layout from '../components/Layout';

const Finance = () => {
    return (
        <div className="finance">
            <Layout>
                <section className="wrapper">
                    <ul className="finance-video-list">
                        <li className="video video1">
                            <h4>Tame Impala - InnerSpeaker Memories</h4>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/_o26HtOgnFY"
                                srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/_o26HtOgnFY?autoplay=1><img src=https://img.youtube.com/vi/_o26HtOgnFY/hqdefault.jpg alt=Tame Impala - InnerSpeaker Memories><span>▶</span></a>"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen="true"
                                title="Tame Impala - InnerSpeaker Memories"
                        ></iframe>
                        </li>
                        <li className="video video2">
                            <h4>Radiohead - SUE Festival 2018 Chile</h4>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/3rs_3fe51GY"
                                srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/3rs_3fe51GY?autoplay=1><img src=https://img.youtube.com/vi/3rs_3fe51GY/hqdefault.jpg alt=Radiohead - SUE Festival 2018 Chile><span>▶</span></a>"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen="true"
                                title="Radiohead - SUE Festival 2018 Chile"
                        ></iframe>
                        </li>
                        <li className="video video3">
                            <h4>Hey Rosetta! - Fogo Sessions</h4>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/bQBL1yIftlc"
                                srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/bQBL1yIftlc?autoplay=1><img src=https://img.youtube.com/vi/bQBL1yIftlc/hqdefault.jpg alt=Hey Rosetta! - Fogo Sessions><span>▶</span></a>"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen="true"
                                title="Hey Rosetta! - Fogo Sessions"
                        ></iframe>
                        </li>
                    </ul>
                </section>
            </Layout>
        </div>
    )
}

export default Finance;