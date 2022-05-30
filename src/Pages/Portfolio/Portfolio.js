import React from 'react';
import Footer from '../Shared/Footer/Footer';

import './Portfolio.css';


const Portfolio = () => {
    return (
        <div className='profile-section'>
            <div className='profile-container'>


                <div className='profile-content'>
                    <div className='know-me bg-primary'>
                
                        <h3 className='text-2xl text-center'>Afifa Tazremin Oishi</h3>
                        <h4 className=' font-bold text-center mb-5 mt-1'>Front End Web Developer</h4>
                        <label htmlFor="email">EMAIL</label>
                        <h5 className='mb-3'>afifatazreminoishi@gmail.com</h5>
                        <h3>EDUCATION</h3>
                        <p>2019 – 2022
                            <br />
                            American Internation University Bangladesh <br />
                            Dhaka, Bangladesh
                        </p>
                    </div>

                    <div className='expertise-container'>
                        <h4 className='text-3xl'>Comfortable With</h4>

                        <p className='my-1'>HTML5, CSS3, Bootstrap5, Tailwind, DaisyUI, Javascript, ReactJS, MongoDB, REST API, NodeJS, and ExpressJS
                        </p>
                        <h4 className='text-3xl mt-4'>Famalier With</h4>
                        <p className='my-1'>Material UI,Python, Axios, Heroku and WordPress

                        </p>
                        

                        <h3 className='text-3xl mt-4 mb-1'>BEST LIVE WEBSITE LINK</h3>

                        <p><a target={`_blank`} href=" https://stalwart-cendol-9001d9.netlify.app/">Photography</a></p>
                        <p><a target={`_blank`} href=" https://the-artsy-lens-ed44e.web.app/">The Artsy Lens</a></p>
                        <p><a target={`_blank`} href="https://fruits-management-system-72a13.web.app">Grab Grocers</a></p>
                    </div>
                </div>



            </div>
            <Footer></Footer>
        </div >


    );
};

export default Portfolio;