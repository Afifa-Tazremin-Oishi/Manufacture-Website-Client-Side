import React from 'react';
import useTools from '../../../hooks/useTools';
import Tool from './Tool';


const Tools = () => {

    // use tools hook
    const { tools } = useTools();

    // tools reverse to get latest collection of tools
    const latestTools = [...tools].reverse();


    return (
        <div className='my-28'>
            <div className='text-center'>
                <h1 className='text-secondary text-3xl font-bold uppercase'>Our Products</h1>
                <h1 className='text-4xl font-bold mb-5'>The New Arrivals</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    latestTools.slice(0, 6).map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;