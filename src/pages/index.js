import * as React from "react";
import '../../styles/index.scss';
import Layout from '../components/Layout';
import NavMain from '../components/NavMain';

const IndexPage = () => {
  return (
    <Layout>
      <div className="home-header">
        <div className="landing-image"></div>
        <div className="landing-header-container">
          <h1>Emerge<span>Music</span><span>Hub</span></h1>
          <NavMain />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
