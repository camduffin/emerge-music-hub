import React from 'react';
import '../../styles/index.scss';
import Layout from '../components/Layout';

const Finance = () => {
    return (
        <Layout>
            <section>
                <p>Learn about grants n' stuff</p>
                <ul className="finance-video-list">
                    <li className="video1">
                        <iframe data-sal="fade-in" width="560" height="315" src="https://www.youtube.com/embed/_o26HtOgnFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </li>
                </ul>
            </section>
        </Layout>
    )
}

export default Finance;