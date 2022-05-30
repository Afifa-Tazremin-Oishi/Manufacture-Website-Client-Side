import React from 'react';

const Review = ({ review }) => {

    const { img, note, name, rating } = review;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img width={150} src={img} alt="services" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="text-xl font-bold text-center">{name}</h2>
                <h4 className='text-xl text-center mb-2'>Rating: <span className='text-secondary font-bold'>{rating} Stars</span></h4>
                <p className='text-justify mb-4'>{note}</p>
            </div>
        </div>
    );
};

export default Review;