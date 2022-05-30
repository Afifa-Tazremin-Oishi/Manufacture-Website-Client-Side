import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {

    const { _id, img, description, name, price, available, minimum } = tool;


    // use navigate hook
    const navigate = useNavigate();


    const purchaseStockHandler = id => {
        navigate(`/purchase/${id}`);
    }


    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} width={200} alt="services" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="text-xl font-bold text-center">{name}</h2>
                <h4 className='text-xl text-center mb-2'>$<span className='text-secondary font-bold'>{price}</span> (per unit)</h4>
                {
                    available === 0
                        ?
                        <h5 className='text-left mb-0 text-xl text-red-600 font-bold'>Out of Stock</h5>
                        :
                        <p className='text-left leading-none'><span className='font-bold'>Available Quantity:</span> {available} Pieces</p>
                }
                <p className='text-left mt-0'><span className='font-bold'>minimum order quantity:</span> {minimum} Pieces</p>
                <p className='text-justify mb-4'>{description}</p>
                <button onClick={() => purchaseStockHandler(_id)} className="btn btn-secondary uppercase text-white font-bold">Purchase</button>
            </div>
        </div>
    );
};

export default Tool;