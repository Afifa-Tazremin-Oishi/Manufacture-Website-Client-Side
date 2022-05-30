import React from 'react';
import './Summary.css';
import icon1 from '../../../images/icon (1).png';
import icon2 from '../../../images/icon (2).png';
import icon3 from '../../../images/icon (3).png';
import icon4 from '../../../images/icon (4).png';


const Summary = () => {

    return (
        <section className='bg-primary summaries-section text-white'>
            <div className='py-10'>
                <h1 className='text-center text-4xl font-bold'>MILLIONS BUSSINESS TRUST US</h1>
                <h3 className='text-center text-2xl my-3'>TRY TO UNDERSTAND USER EXPECTATION</h3>

                <div className='summaries-container'>
                    <div>
                        <img className='summary-img' src={icon1} alt="" />
                        <h1 className='text-5xl font-bold text-center'>100+</h1>
                        <h1 className='text-2xl font-bold text-center text-secondary'>Countries</h1>
                    </div>
                    <div>
                        <img className='summary-img' src={icon2} alt="" />
                        <h1 className='text-5xl text-center font-bold'>1M+</h1>
                        <h1 className='text-2xl text-center font-bold text-secondary'>Happay Clients</h1>
                    </div>
                    <div>
                        <img className='summary-img' src={icon3} alt="" />
                        <h1 className='text-5xl text-center font-bold'>5K+</h1>
                        <h1 className='text-2xl text-center font-bold text-secondary'>Reviews</h1>
                    </div>
                    <div>
                        <img className='summary-img' src={icon4} alt="" />
                        <h1 className='text-5xl text-center font-bold'>$120M</h1>
                        <h1 className='text-2xl text-center font-bold text-secondary'>Annual Revenue</h1>
                    </div>
                </div>
            </div>

            <div className='quote-container flex justify-center py-20'>
                <p className='text-primary text-4xl font-bold'>Be Happy to deal with us.</p>
            </div>
        </section>
    );
};

export default Summary;