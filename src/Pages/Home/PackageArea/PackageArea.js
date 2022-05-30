import React from 'react';
import PackageDetail from '../PackageDetail/PackageDetail';
import './PackageArea.css';


const PackageArea = () => {
    return (
        <section className="container shadow-sm py-5">
            <div className="title-text pt-3">
                <h1 className='text-center text-4xl text-secondary font-bold'>Packages</h1>
                <h3 className='text-center text-2xl my-3'>Our Offered Packages</h3>
            </div>
            <div className='package-container my-5'>
                <div className="shadow package card h-100 px-3 mx-3 border-0 pt-5">
                    <PackageDetail
                        key='1'
                        price={300}
                        name='Basic'
                        statement='Lower rate Bundle Package.'
                        features={
                            ['Get Three Products category',
                                'Get Good Products for your home',
                                'Occasion support',
                                'Well managed']
                        }
                    ></PackageDetail>
                </div>
                <div className="h-100 p-4 mb-3 mx-3 pt-5 border-0 shadow-lg bg-primary">
                    <PackageDetail
                        key='2'
                        price={800}
                        name='Standard'
                        statement='Get Specail Packages.'
                        features={
                            ['Get Three Products category',
                                'Get Good Products for your occassional arrangement',
                                'Occasion support',
                                'Well managed',
                                'Win lottery'
                            ]
                        }
                    ></PackageDetail>
                </div>
                <div className="shadow package card h-100 px-3 mx-3 border-0 pt-5">
                    <PackageDetail
                        key='3'
                        price={1200}
                        name='Premium'
                        statement='Storing your products for exporting purpose.'
                        features={
                            ['Get Three Products category',
                                'Get Good Products for your occassional arrangement',
                                'Occasion support',
                                'Well managed',
                                'Get one Free']
                        }
                    ></PackageDetail>
                </div>
            </div>
        </section>
    );
};

export default PackageArea;