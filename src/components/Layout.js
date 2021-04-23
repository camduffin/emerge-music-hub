import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = (props) => {
    return (
        <div className="layout-container">
            <Header />
            <main className="main-content">
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;