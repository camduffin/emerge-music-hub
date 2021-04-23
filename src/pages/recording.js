import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { IoIosArrowDropup } from 'react-icons/io';
import { Parallax } from 'react-parallax';
import mainBG from '../images/emerge-bg.png';
import darkBlue from '../images/dark-blue-bg.png';
import darkBluetwo from '../images/darkblue-bg2.png';

const Recording = () => {

    return (
    <div className="recording">
        <Layout>
            <Parallax
            bgImage={mainBG}
            strength={500}
            blur={{ min: -15, max: 15 }}
            >
            <IoIosArrowDropup className="scroll-top" onClick={() => scrollTo('#header')}/>
            <div className="wrapper">
                <section className="first-recording-container">
                        <ul className="recording-artist-container">
                            <li onClick={() => scrollTo('#jill-zim')}>
                                <StaticImage 
                                src="../images/artists/image-one.JPG" 
                                alt="Picture of Jill Zimmermann" 
                                placeholder="blurred"
                                loading="lazy"
                                width={255}
                                height={255}
                                />
                                <h5 className="jill-zim-text">Jill Zimmermann</h5>
                            </li>
                            <li onClick={() => scrollTo('#erin-costelo')}>
                            <StaticImage 
                            src="../images/artists/erin-costelo.jpg" 
                            alt="Picture of Erin Costelo" 
                            placeholder="blurred"
                            loading="lazy"
                            width={255}
                            height={255}
                            />
                                <h5>Erin Costelo</h5>
                            </li>
                            
                            <li onClick={() => scrollTo('#josh-korody-two')}>
                                <StaticImage 
                                src="../images/artists/josh-korody.jpg" 
                                alt="Picture of Josh Korody" 
                                placeholder="blurred"
                                loading="lazy"
                                width={255}
                                height={255}
                                />
                                <h5>Josh Korody</h5>
                            </li>
                            <li onClick={() => scrollTo('#chris-stringer')}>
                                <StaticImage 
                                src="../images/artists/chris-stringer.jpg" 
                                alt="Picture of Chris Stringer" 
                                placeholder="blurred"
                                loading="lazy"
                                width={255}
                                height={255}
                                />
                                <h5>Chris Stringer</h5>
                            </li>
                            <li onClick={() => scrollTo('#aaron-goldstein')}>
                                <StaticImage 
                                src="../images/artists/aaron-goldstein.jpeg" 
                                alt="Picture of Aaron Goldstein" 
                                placeholder="blurred"
                                loading="lazy"
                                width={255}
                                height={255}
                                />
                                <h5>Aaron Goldstein</h5>
                            </li>
                            <h2>Your <span>First</span> Recording</h2>
                            <li onClick={() => scrollTo('#terra')}>
                                <StaticImage 
                                src="../images/artists/terra-lightfoot.jpg" 
                                alt="Picture of Terra Lightfoot" 
                                placeholder="blurred"
                                loading="lazy"
                                width={255}
                                height={255}
                                />
                                <h5>Terra Lightfoot</h5>
                            </li>
                            <li onClick={() => scrollTo('#andy')}>
                                <StaticImage 
                                src="../images/artists/andy-shauf.png" 
                                alt="Photo of Andy Shauf" 
                                placeholder="blurred"
                                loading="lazy"
                                width={255}
                                height={255}
                                />
                                <h5>Andy Shauf</h5>
                            </li>
                            <li onClick={() => scrollTo('#alysha')}>
                                <StaticImage 
                                src="../images/artists/alysha.jpg" 
                                alt="Picture of Alysha Brilla" 
                                placeholder="blurred"
                                loading="lazy"
                                width={255}
                                height={255}
                                />
                                <h5>Alysha Brilla</h5>
                            </li>  
                        </ul>
                </section>
            </div>
        </Parallax>
            <section className="recording-text" id="recording-text">
                <div className="wrapper">
                    <div className="wrapper recording-text-container" data-sal="fade" data-sal-duration="1500">
                        <h2>Recording</h2>
                        <p>Making your first record is one of the most exciting moments of your life. Everything you have ever done, all of the writing, rehearsing, collaborating, putting yourself out there and working day and night to finesse your musical vision has led to this moment. Put it this way- you’ll never again have had that much time to prepare for a record (your whole life up until now!). I remember when my first band made our first record. We had already signed a zillion page (approximately) record deal that we didn’t even realize (or care) would ensure we wouldn’t make a cent off the actual record itself. That didn’t matter. Walking into the control room of that big expensive studio for the first time, I knew I had never been so happy, so consumed by, so in love with whatever was about to happen. For many musicians making records is a spectacular, unparalleled experience. We want you to know that you can hire a producer and rent a studio, but there’s a lot of other important stuff you will want to think about and do before you enter that studio to ensure you make the most of that experience and make the best record you can. We spoke to some of our favourite Canadian producers and engineers about their own careers and experiences and what the most important things are that young artists can do to be prepared for their first recording.</p>
                        <p>-Anna</p>
                    </div>
                </div>
            </section>
            <section className="recording-video-container">
        <Parallax
            bgImage={mainBG}
            strength={500}
            blur={{ min: -15, max: 15 }}
            >
                <div className="wrapper">
                    <div className="jill-zim-video" data-sal="fade" data-sal-duration="1000">
                        <h4 id="jill-zim">Jill Zimmermann <span>- Engineer, Jukasa Studios</span></h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/oualu6onQkY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div> 
            </Parallax>  
                <div className="quote-container-one" data-sal="fade" data-sal-duration="1000">
                    <div className="wrapper">
                        <p>“Plan more time in the studio. You will need more time.”</p>
                        <p>-Jill Zimmermann</p>
                    </div>
                </div>
            <Parallax
                bgImage={mainBG}
                strength={500}
                blur={{ min: -15, max: 15 }}
                >
                <div className="erin-costelo-video" data-sal="fade" data-sal-duration="1000">
                    <div className="wrapper">
                        <h4 id="erin-costelo">Erin Costelo <span>- Engineer, Producer, Artist</span></h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/AxJUUIt0RHI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </Parallax>
                <div className="josh-korody-video" data-sal="fade" data-sal-duration="1000">
                    <div className="wrapper">
                        <h4 id="josh-korody-two">Josh Korody <span>- Producer, Engineer, Artist, owner Candle Recording</span></h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/XOr_Qtn-UvM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="chris-stringer-video" data-sal="fade" data-sal-duration="1000">
                    <div className="wrapper">
                        <h4 id="chris-stringer">Chris Stringer <span>- Producer, Engineer, owner Union Sound Company</span></h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/sFOHfW5P7R0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="quote-container-two" data-sal="fade" data-sal-duration="1000">
                    <div className="wrapper">
                        <p>“Managing sonic expectations and working with what’s coming out at any given moment… Those are the biggest hurdles for young bands.”</p>
                        <p>-Chris Stringer</p>
                    </div>
                </div>
                <div className="aaron-goldstein-video" data-sal="fade" data-sal-duration="1000">
                    <div className="wrapper">
                        <h4 id="aaron-goldstein">Aaron Goldstein <span>- Producer, Engineer, Artist, owner Baldwin Street Sound</span></h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/_3IwzkLp3Mk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>    
                </div>
                <div className="terra-video" data-sal="fade" data-sal-duration="1000">
                    <div className="wrapper">
                        <h4 id="terra">Terra Lightfoot <span>- Artist</span></h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/LeXsySu3Y3k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="andy-video" data-sal="fade" data-sal-duration="1000">
                    <div className="wrapper">
                        <h4 id="andy">Andy Shauf <span>- Artist</span></h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/AOfBsenI98Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="alysha-video" data-sal="fade" data-sal-duration="1000">
                    <div className="wrapper">
                        <h4 id="alysha">Alysha Brilla <span>- Artist, Producer</span></h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/egZ_1nEv608" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </section>
            <section className="lm-recording" id="lm-recording">
                    <div className="lm-recording-text-head">
                        <div className="wrapper">
                            <h2>Home Recording Starter Kit</h2>
                            <p>Recommendations from Long & McQuade</p>
                        </div>
                    </div>
                    <ul className="lm-main-list">
                <Parallax
                    bgImage={darkBlue}
                    strength={500}
                    >
                        <li className="microphone">
                            <div className="wrapper">
                                <h3>Microphone</h3>
                                <p>One of the most important pieces of equipment if you want to record any instrument, voice, or sound into your music project.</p>
                                <ul>
                                    <li>
                                        <a href="https://www.long-mcquade.com/49224/Pro-Audio---Recording/Microphones/Apex-Electronics/Compact-Studio-Condenser-Mic-with-Case---Black.htm" target="_blank" rel="noreferrer noopener">Apex 435B ($109)</a>
                                        <p>This is a great budget condenser microphone. This will give a lush & detailed sound and is an all-purpose mic that can be used to record anything from vocals, to acoustic instruments, to recording electric guitar amp, etc. It has a fixed cardioid pattern meaning it only picks up sound from one side of the microphone.</p>
                                    </li>
                                    <li>
                                        <a href="https://www.long-mcquade.com/485/Pro-Audio---Recording/Microphones/Audio-Technica/AT2020-Condenser-Microphone.htm" target="_blank" rel="noreferrer noopener">Audio Technica AT2020 ($149)</a>
                                        <p>This is a slightly higher end version of the same type of microphone from a world-renowned brand. The AT2020 sounds fuller and has less self-noise.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="usb">
                            <div className="wrapper">
                                <h3>USB Interface</h3>
                                <p>This is an essential piece of equipment for recording. It will amplify the signal from your microphone, and convert that sound to a digital file that your computer can read and record. Without a USB Interface your microphone is pretty much useless!</p>
                                <div className="usb-container">
                                    <a href="https://www.long-mcquade.com/146292/Pro-Audio---Recording/Audio-Interfaces/Focusrite/Scarlett-Solo-3rd-Gen-USB-Audio-Interface.htm" target="_blank" rel="noreferrer noopener">Scarlett Solo MK3 ($169)</a>
                                    <p>The Scarlett Solo is an affordable product from a well respected brand (Focusrite). This will allow you to record up to one microphone and one guitar/instrument with 1/4" output. It also allows you to control the volume of your speakers, and/or headphones.</p>
                                </div> 
                            </div>
                        </li>
                </Parallax>
                    <div className="lm-background-one">
                        <li className="cables">
                            <div className="wrapper">
                                <h3>Cables</h3>
                                <p>Microphones don't typically include a mic cable, so you will need an XLR cable. Likewise most studio speakers do not include cables to connect them. If you decide to purchase studio speakers you will also need some TRS cables which are listed below.</p>
                                <ul>
                                    <li>
                                        <a href="https://www.long-mcquade.com/1610/Pro_Audio_Recording/Cables/Yorkville_Sound/Link_Audio_Economy_Mic_Cable_-_10_foot.htm" target="_blank" rel="noreferrer noopener">A110MC ($14.99)</a>
                                        <p>This is a 10ft XLR microphone cable which is a good length for most home recording applications.</p>
                                    </li>
                                    <li>
                                        <a href="https://www.long-mcquade.com/20282/Pro-Audio---Recording/Cables/Yorkville-Sound/1-4-TRS-to-1-4-TRS-Angled---8-foot.htm" target="_blank" rel="noreferrer noopener">LP108SSA TRS CABLE ($17.99)</a>
                                        <p>This is a cable that will allow you to connect your interface to your speakers, if you decide to purchase speakers. You will need two cables, one for each speaker.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="microphone-stand">
                            <div className="wrapper">
                                <h3>Microphone Stand</h3>
                                <p>Condenser microphones cannot be held in your hand when recording. They are so sensitive that they will pickup a lot of unpleasant handling noise. Hence it is a good idea to include a mic stand in your setup.</p>
                                <ul>
                                    <li>
                                        <a href="https://www.long-mcquade.com/8769/Pro-Audio---Recording/Stands/Yorkville-Sound/Tripod-Boom-Stand---Black.htm" target="_blank" rel="noreferrer noopener">MS206B ($39.99)</a>
                                        <p>This is a boom stand which means it has an arm that you can angle upwards/downwards, and it allows you to place a microphone over or under an instrument. If you're recording anything other than just vocals, this is your best option.</p>
                                    </li>
                                    <li>
                                        <a href="https://www.long-mcquade.com/1752/Pro-Audio---Recording/Stands/Yorkville-Sound/Round-Based-Mic-Stand---Black.htm" target="_blank" rel="noreferrer noopener">MS603B ($38.99)</a>
                                        <p>This is a straight microphone stand that moves only up and down, this is only really useful for recording vocals.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </div>
                <Parallax
                    bgImage={darkBluetwo}
                    strength={500}
                    >
                        <li className="headphones">
                            <div className="wrapper">
                                <h3>Headphones</h3>
                                <p>Headphones are essential so you can hear what the microphone is picking up as you are recording.</p>
                                <ul>
                                    <li>
                                        <a href="https://www.long-mcquade.com/8728/Pro-Audio---Recording/Headphones/Apex-Electronics/HP35-Closed-Ear-Folding-Headphones.htm" target="_blank" rel="noreferrer noopener">Apex HP35 ($49.99)</a>
                                        <p>This is the most budget friendly option, and they do the job just fine.</p>
                                    </li>
                                    <li>
                                        <a href="https://www.long-mcquade.com/23588/Pro-Audio---Recording/Headphones/Apex-Electronics/Folding-Deluxe-Studio-Monitor-Headphones.htm" target="_blank" rel="noreferrer noopener">Apex HP100 ($129)</a>
                                        <p>These have added comfort in the quality of the earpads which is nice if you're wearing them for an extended period of time, as well has increased overall sound quality.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="midi">
                            <div className="wrapper">
                                <h3>MIDI Keyboard</h3>
                                <p>A MIDI keyboard connects to your computer with a USB cable and allows you to control sounds from your computer with a hardware piano keyboard. This is essential for anyone who wants to make music using virtual instruments, or electronic instruments with computer software.</p>
                                <div className="midi-container">
                                    <a href="https://www.long-mcquade.com/188288/Keyboards/MIDI-Controllers/Akai/MPK-Mini-MKIII-25-Note-Keyboard-Drum-Pad-Controller.htm" target="_blank" rel="noreferrer noopener">AKAI MPK MINI MKIII ($129)</a>
                                    <p>This gives you two octaves on a piano keyboard, as well as some drum pads. You really can't do better at this price point for a MIDI keyboard.</p>
                                </div>
                            </div>
                        </li>
                </Parallax>
                    <div className="lm-background-two">
                        <li className="speakers">
                            <div className="wrapper">
                                <h3>Speakers</h3>
                                <p>Sometimes you want to be able to hear your music back on speakers and give your ears a break from wearing headphones.</p>
                                <ul>
                                    <li>
                                        <a href="https://www.long-mcquade.com/167016/Pro-Audio---Recording/Studio-Monitors/Mackie/CR3-X-3---Multimedia-Monitors--Pair.htm" target="_blank" rel="noreferrer noopener">MACKIE CR3X ($134.99)</a>
                                        <p>This are fantastic small speakers that will fit on any desk. They have a good amount of bass for their small size as well.</p>
                                    </li>
                                    <li>
                                        <a href="https://www.long-mcquade.com/?page=search&SearchTxt=ysm5" target="_blank" rel="noreferrer noopener">YORKVILLE YSM5 ($189 each, $378 for a pair)</a>
                                        <p>This are much larger than the CR3X and closer to what you might find in a professional studio. These have significantly louder output, and are able to output lower bass frequencies than the Mackie speakers, allowing you to better hear what is happening in the bass of your song.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </div>
                    </ul>
                    <div className="lm-logo">
                        <div className="wrapper lm-logo-container">
                            <StaticImage 
                            src="../images/lm-logo.png" 
                            alt="Long & McQuade logo" 
                            />
                            <StaticImage 
                            className="emerge-lm"
                            src="../images/emerge-logo.png" 
                            alt="Long & McQuade logo" 
                            />
                        </div>
                    </div>
            </section>
        </Layout>
    </div>    
    )
}

export default Recording;