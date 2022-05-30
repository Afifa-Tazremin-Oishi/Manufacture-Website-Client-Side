import React from 'react';

const Contact = () => {

    return (
        <section className="bg-accent">
            <div className='bg-zinc-500 px-10 py-14 '>
                <div className='text-center pb-14 text-white'>
                    <p className='text-3xl font-bold text-secondary uppercase bg-clip-text bg-gradient-to-br from-accent to-secondary'>
                        Contact Us
                    </p>
                    <h1 className='text-4xl font-bold mt-3'>Stay connected with us</h1>
                </div>
                <div className='grid grid-cols-1 justify-items-center gap-5'>
                    <input
                        type='text'
                        placeholder='Email Address'
                        className='input w-full max-w-md'
                    />
                    <input
                        type='text'
                        placeholder='Subject'
                        className='input w-full max-w-md'
                    />
                    <textarea
                        className='textarea w-full max-w-md'
                        placeholder='Your message'
                        rows={6}
                    ></textarea>
                    <button className="btn btn-secondary font-bold">Submit</button>
                </div>
            </div>
        </section>
    );
};

export default Contact;