import React from 'react';
import '../../styles/index.scss';
import Layout from '../components/Layout';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Parallax } from 'react-parallax';
import { StaticImage } from 'gatsby-plugin-image'; 
import yellowBG from '../images/yellow-bg3.png';
import yellowBGtwo from '../images/yellow-bg4.png';
import lightBlueBG from '../images/light-blue-bg.jpg';
import { IoIosArrowDropdown } from 'react-icons/io';
import subHeader from '../images/subheader-blue1.png';

const Finance = () => {

    const sunnyImage = '../images/artists/sunny-widerman.jpg';

    return (
        <div className="finance">
            <Layout>
                <Parallax 
                className="finance-yellow"
                bgImage={yellowBG}
                strength={500}
                blur={{ min: -15, max: 15 }}
                >
                    <section className="finance-image">
                        <div className="finance-image-container">
                            <StaticImage src={sunnyImage} alt="Picture of Sunny Widerman"/>
                            <h1>Finances</h1>
                            <h2>Friendly advice from the pros.</h2>
                        </div>
                        <button onClick={() => scrollTo('#sunny')}>
                            <IoIosArrowDropdown />
                        </button>
                    </section>
                </Parallax>
                <section className="sunny-section">
                    <div className="wrapper">
                    <ul className="finance-video-list">
                        <li className="video video1" id="sunny" data-sal="fade" data-sal-duration="1500">
                            <h2>Sunny Widerman</h2>
                            <h3>Tax Preparer and Advisor, CEO Personal Tax Advisors</h3>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/_o26HtOgnFY"
                                srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:#0A2F58;opacity:0.9;text-shadow:0 0 .2em black}</style><a href=https://www.youtube.com/embed/_o26HtOgnFY?autoplay=1><img src=https://img.youtube.com/vi/_o26HtOgnFY/hqdefault.jpg alt=Tame Impala - InnerSpeaker Memories><span>▶</span></a>"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Tame Impala - InnerSpeaker Memories"
                        ></iframe>
                        </li>
                    </ul>
                    </div>
                </section>
                <Parallax 
                bgImage={yellowBGtwo}
                strength={500}
                blur={{ min: -15, max: 15 }}
                >
                <section className="grant-tips-section">
                    <div className="wrapper grant-text-container" data-sal="fade" data-sal-duration="1500">
                        <h2>Grant Writing Tips</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat obcaecati enim voluptatem officiis blanditiis fugit earum ea omnis recusandae minus eligendi delectus sint soluta, itaque aut amet possimus repellendus! Aspernatur doloribus dolorem deleniti eaque! Quidem aut impedit vero, facilis earum a tempora velit incidunt accusantium obcaecati perspiciatis itaque veniam odit quaerat est, expedita, ullam fugiat porro sed sint eos vel. Ipsam iure quidem dolorem sequi illum a laborum. Non sequi dolor aliquam soluta quos. Quibusdam quidem nostrum voluptatibus numquam illum dolores, eius labore autem sapiente, animi molestiae nihil mollitia. Fuga soluta saepe, sed alias maxime, commodi omnis eligendi sit similique dicta minima nam ab officiis nulla consequatur, ratione reiciendis mollitia hic. Id officiis porro, qui quaerat autem sapiente totam quidem nisi, nulla libero quasi cum consequatur ex soluta animi quisquam fugiat nesciunt dolorem veritatis accusamus laborum placeat aspernatur maiores! A ratione veniam maxime officiis beatae consequatur inventore amet. Blanditiis eaque officia, quia provident itaque tempore molestiae quisquam neque alias minus. Repellendus facere quo animi quasi earum autem minus dolor soluta illo! Quam ab optio impedit corrupti ipsam odit aspernatur quos quo autem est praesentium nam consequatur at modi tenetur fugiat hic cum in natus, facere perspiciatis! Accusamus, doloribus! Ad sapiente possimus est asperiores consequuntur dolorum exercitationem obcaecati minima voluptatum earum. Minus ducimus, quos corporis eius quo natus in pariatur nostrum ut amet voluptatum perferendis aperiam consectetur. Minima odit exercitationem sapiente nemo, ut provident quis, natus tempore architecto dicta ad iure atque? Iste earum voluptate asperiores nisi, harum eaque saepe! Incidunt ipsa dolorum fugit iure, provident id sunt amet, repellendus praesentium aspernatur odit hic. Id alias reprehenderit corporis vero quae voluptatibus dignissimos quaerat deserunt aspernatur deleniti doloribus molestiae rerum vitae, ut nihil quos labore nemo sed, asperiores quasi iusto. Itaque earum sequi voluptatibus aliquid quis ipsam saepe fugiat assumenda blanditiis ullam.</p>
                        <p>-Margaret O'Toole</p>
                    </div>
                </section>
                </Parallax>
            </Layout>
        </div>
    )
}

export default Finance;