import React from 'react';
import '../../styles/index.scss';
import Layout from '../components/Layout';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Parallax } from 'react-parallax';
import { StaticImage } from 'gatsby-plugin-image'; 
import yellowBG from '../images/yellow-bg3.png';
import yellowBGtwo from '../images/yellow-bg.png';
import { IoIosArrowDropdown } from 'react-icons/io';


const Finance = () => {

    const sunnyImage = '../images/artists/sunny-widerman-two.jpg';

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
                            <StaticImage 
                            src={sunnyImage} 
                            alt="Picture of Sunny Widerman"
                            loading="lazy"
                            placeholder="blurred"
                            width={300}
                            height={300}
                            />
                            <h1>Finances & Grants</h1>
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
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/7A4sT8fF2zE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                    <div className="wrapper grant-text-container">
                        <h2>Finances & Grants</h2>
                        <p>Being a musician these days is essentially like running a small business. You’re required to do many jobs within one, and you might not have the knowledge or expertise for all those different roles. When it comes to personal finances many people are unsure where to begin when it comes to managing the finances for their artistic endeavours. There’s also the important matter of securing funding to make your projects happen. In this module you will hear simple advice on preparing your taxes and can read through our Top 10 Grant Writing Tips.</p>
                        <p>-Margaret O'Toole</p>
                    </div>
                </section>
                </Parallax>
                <Parallax 
                bgImage={yellowBG}
                strength={500}
                blur={{ min: -15, max: 15 }}
                >
                <section className="grant-tips-section-two">
                    <div className="wrapper grant-text-container-two">
                        <h2>Margaret’s Top 10 Grant Writing Tips </h2>
                        <ol>
                            <li data-sal="fade" data-sal-duration="1500">
                                1. Do your research
                                <p>There are more grants out there than you might think. Spend some time researching the ones that your project is eligible for and choosing which is most worth the effort of applying. Make sure you read the eligibility rules very thoroughly as well as any other and general information about the grant provided by the organization’s website.</p>
                            </li>
                            <li data-sal="fade" data-sal-duration="1500">
                                2. Tailor your application for every specific grant
                                <p>You cannot expect to prepare a write up and portfolio that will be easily submitted for everything. You have to make sure you are highlighting what the granting organization is looking for when preparing your materials for the application. Much like best practices for resumes, be sure to tweak your application to show them the relevant information they’re looking for.</p>
                            </li>
                            <li data-sal="fade" data-sal-duration="1500">
                                3. Make your budget as specific as possible
                                <p>Within the limitations of the budget template that the application asks for, try to get as specific as possible about your budget. Break down categories into specific line items and show calculations in brackets for costs that are multiplied by the number of people or days that the pertain to. Where possible do some prep work researching the costs based on the suppliers you plan to use and name those sources. </p>
                            </li>
                            <li data-sal="fade" data-sal-duration="1500">
                                4. Attend webinars and information sessions when available 
                                <p>Some organizations (such as FACTOR) host free online sessions specific to their grant programs for potential applicants. These usually include an overview of the application process and contents, as well as a Q&A session. For anyone unfamiliar with the organization it’s a great way to become more acquainted with the grant program.</p>
                            </li>
                            <li data-sal="fade" data-sal-duration="1500">
                                5. Reach out with any questions before applying
                                <p>Many organizations are more than happy to answer some questions before the application deadlines and provide the contact info of an employee who is ready to help you. This is especially helpful if there is no information session such as the kind mentioned above. They can give you valuable insight into the parts of the application that are considered more important. But be sure to thoroughly read through all available information first so that you don’t end up asking a redundant question!</p>
                            </li>
                            <li data-sal="fade" data-sal-duration="1500">
                                6. Download the question template beforehand when possible
                                <p>Online application portals can be tricky to navigate and sometimes temperamental. Often there is a download version of the applications form which you can use to write your answers offline before starting the actual submission. Other times there is an option to save your work as you go in the online portal. Be sure to carefully read the time allowances and online system rules so that you don’t lose any of your work or accidentally submit an incomplete application.</p>
                            </li>
                            <li data-sal="fade" data-sal-duration="1500">
                                7. Use a thesaurus
                                <p>Find yourself using the same word five times in one paragraph? Try an online thesaurus to help improve the descriptive language so that your vision comes across as clear as possible to the person reading your application.</p>
                            </li>
                            <li data-sal="fade" data-sal-duration="1500">
                                8. Formatting matters
                                <p>Be sure to make your formatting follow any guidelines provided. When it’s more open ended, try to make it look as professional as possible. Online resources such as Canva can provide great templates and stylized formatting that will make your documents look way better. Be sure to submit files in the format or file type requested.</p>
                            </li>
                            <li data-sal="fade" data-sal-duration="1500">
                                9. Pictures tell a thousand words
                                <p>Depending on the grant, providing a mood board of images that are applicable to your project can be a great additional feature to your application. They can convey your artistic vision, reference your inspirations and give your application an aesthetic boost.</p>
                            </li>
                            <li data-sal="fade" data-sal-duration="1500">
                                10. Consider working with a grant writer
                                <p>Sometimes depending on the scope of the application and the limitations of what you feel you can do yourself it might be best to outsource the work to a grant writer. They have the expertise and experience you might lack and will complete the application using your input. Be sure to negotiate a pricing model in advance of hiring their services so that both parties are on the same page. Be communicative through the entire process to make sure your vision comes across the way you want. Ask around for recommendations of who to work with from friends and acquaintances.</p>
                            </li>
                        </ol>
                    </div>
                </section>
                </Parallax>
            </Layout>
        </div>
    )
}

export default Finance;