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
                            <iframe width="200" height="300" src="https://www.youtube.com/embed/_o26HtOgnFY"
                            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </li>
                        <li className="video video2">
                            <h4>Tame Impala - InnerSpeaker Memories</h4>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/BWv4TgvSPjM"
                            loading="lazy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </li>
                        <li className="video video3">
                            <h4>Tame Impala - InnerSpeaker Memories</h4>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/3rs_3fe51GY"
                                loading="lazy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </li>
                    </ul>
                </section>
            </Layout>
        </div>
    )
}

export default Finance;