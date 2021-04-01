import React from 'react';
import '../../styles/index.scss';

const Finance = () => {
    return (
        <section data-sal="fade" data-sal-duration="1000">
            <p>Learn about grants n' stuff</p>
            <div className="finance-video video1">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/_o26HtOgnFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section>
    )
}

export default Finance;