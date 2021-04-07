import React from 'react';
import NavHome from '../components/NavHome';
import emergeLogo from '../images/emerge-logo.png';
import AniLink from 'gatsby-plugin-transition-link/AniLink';


const Home = () => {
    return (
        <>
        <header className="home-nav-header">
            <h1 className="hidden-home-h1 sr-only">Emerge Music Hub</h1>
            <AniLink fade to="/">
                <h2>
                    <img src={emergeLogo} alt="Emerge Music Hub logo"/>
                </h2>
            </AniLink>
        </header>
        <section className="choose-nav-page">
            <div className="wrapper">
                <div className="nav-home-container">
                    <NavHome />
                </div>
            </div>
        </section>
        </>
    )
}

export default Home;