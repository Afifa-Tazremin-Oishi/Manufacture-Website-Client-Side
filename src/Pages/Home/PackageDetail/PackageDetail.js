import React from 'react';
import './PackageDetail.css';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PackageDetail = (props) => {

    const { price, name, statement, features } = props;

    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-4xl font-bold">${price}</h2>
                    <h3 className='text-secondary text-xl font-bold'>{name}</h3>
                    <p>{statement}</p>
                    {
                        features.map((feature) => <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>{feature}</p>)
                    }
                    <div className="text-center mt-4">
                        <button className="update-btn mb-2">
                            <a className="button-link-2"
                                href="https://web.programming-hero.com/">
                                Book Now
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PackageDetail;