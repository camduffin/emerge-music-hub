import * as React from "react";
import '../../styles/index.scss';
import NavMain from '../components/NavHome';

const IndexPage = () => {
  return (
      <div className="home-header">
        <div className="landing-image" data-sal="fade" data-sal-duration="1000"></div>
        <div className="landing-header-container">
          <h1 data-sal="slide-up" data-sal-duration="1000">Emerge<span>Music</span><span>Hub</span></h1>
          <NavMain />
        </div>
      </div>
  )
}

export default IndexPage
