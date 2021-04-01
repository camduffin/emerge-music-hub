import React from 'react';
import Header from '../components/Header';

const Layout = (props) => {
    return (
        <div className="layout-container">
            <Header />
            <div className="main-content">
                {props.children}
            </div>
        </div>
    )
}

export default Layout;