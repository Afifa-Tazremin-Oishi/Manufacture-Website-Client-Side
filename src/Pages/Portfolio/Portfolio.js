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
                        <h4 className='text-3xl mt-4'>Toolsr</h4>
                        <p className='my-1'>Git,Github,Netlify,Heroku</p>

                        <h3 className='text-3xl mt-4 mb-1'>BEST LIVE WEBSITE LINK</h3>

                        <p><a target={`_blank`} href="https://warehouse-management-sys-4df86.web.app/">Bangla Motor LTD</a></p>
                        <p><a target={`_blank`} href="https://action-legal-care.web.app/">Action Legal Care</a></p>
                        <p><a target={`_blank`} href="https://eloquent-marigold-ec1e81.netlify.app/">Laptop Review Website</a></p>
                    </div>
                </div>



            </div>
            <Footer></Footer>
        </div >


    );
};

export default Portfolio;