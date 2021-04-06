import React from 'react';
import Layout from '../components/Layout';
import artistImage1 from '../images/artists/artist1.jpg';
import artistImage2 from '../images/artists/artist2.jpg';
import artistImage3 from '../images/artists/artist3.jpg';

const Recording = () => {
    return (
    <div className="recording">
        <Layout>
            <section className="wrapper">
                <section className="first-recording-container">
                        <ul className="recording-artist-container">
                            <li>
                                <img src={artistImage1} alt=""/>
                            </li>
                            <li>
                                <img src={artistImage2} alt=""/>
                            </li>
                            <li>
                                <img src={artistImage3} alt=""/>
                            </li>
                            <li>
                                <img src={artistImage3} alt=""/>
                            </li>
                            <li>
                                <img src={artistImage3} alt=""/>
                            </li>
                            <li>
                                <img src={artistImage3} alt=""/>
                            </li>
                        </ul>
                    <h2>Your First<span>Recording</span></h2>
                </section>
            </section>
        </Layout>
    </div>    
    )
}

export default Recording;