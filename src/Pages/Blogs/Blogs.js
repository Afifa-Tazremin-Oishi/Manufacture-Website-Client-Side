import React from 'react';

const Blogs = () => {
    return (
        <section className='py-14 bg-accent'>
            <div className='product-container'>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <article className="card-body">
                        <h1 className='text-primary font-bold text-3xl'>React performance optimization techniques</h1>
                        <p className='mt-5'>We use React JS library to make easy our web development process. Our coding pattern can improve the performance of our React application. The React performance optimization techniques are given below:
                            <ol className='list-inside list-decimal mt-2'>
                                <li>Keeping component state local where necessary</li>
                                <li>Reuse the React components to prevent unnecessary re-renders.</li>
                                <li>Code-splitting in React using dynamic import()</li>
                                <li>Windowing or list virtualization in React applications</li>
                                <li>Lazy loading images in React</li>
                            </ol>
                        </p>
                    </article>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <article className="card-body">
                        <h1 className='text-primary font-bold text-3xl'>Different ways to manage a state in a React application</h1>
                        <p className='mt-5'>There are different ways to manage state in a React application. The React hooks are used to manage state in React application. The hooks are -
                            <ul className='list-disc list-inside mt-2'>
                                <li><b>useState</b></li>
                                <li><b>useReducer</b></li>
                            </ul>
                        </p>
                        <p>useState is the first tool to manage state in components. It can take accept any valid data value, including primitive and object values.</p>
                        <p className='mt-3'>Another way to manage state we are using React query. React Query makes easier to manage the state. It also make easier the fetching data, caching data. React Query is another library for react application.</p>
                    </article>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <article className="card-body">
                        <h1 className='text-primary font-bold text-3xl'>How Prototypal Inheritance does work.</h1>
                        <p className='mt-5'>Every object has an internal and hidden property called Prototype that is present in all of its methods and properties.</p>
                        <p>Prototypal Inheritance is a javascript feature that allows to add methods and properties to objects.
                            It's a method that allows one object to inherit the properties and methods of another.</p>
                        <p>A prototype generally serves as a template for additional objects, whether or whether they expand the underlying object. </p>
                    </article>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <article className="card-body">
                        <h1 className='text-primary font-bold text-3xl'>Reasons to don't set the state directly in React</h1>
                        <p className='mt-5'>We use the React hooks to set the state. React hooks is organized by default. the state function update the state value and state value display the result.</p>
                        <p className='mt-3'>Because of the following reasons, it is never a good idea to change the state directly:
                            <ul className='list-disc list-inside mt-2'>
                                <li>If we alter it directly, executing setState() thereafter may just overwrite the changes.</li>
                                <li>This.state is not changed instantly when we directly update the state.</li>
                                <li>We'll lose control of the state in all of our components.</li>
                            </ul></p>
                    </article>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <article className="card-body">
                        <h1 className='text-primary font-bold text-3xl'>Search to find products by name from an array of object.</h1>
                        <p className='mt-5'>To Find the products by name from an array of object we will implement the filter method on array. Inside the method we will provide condition to find the expected products by product name. We will provide matching name condition to find the expected products by name.</p>
                        <p>For <b>Example</b> if I want to find laptops from an array of products Then How I will implement to search laptop that is given below - </p>
                        <p> {`const`} <b>{`products`}</b> {
                            `= [
                            {name: 'laptop', price: 500 },
                            {name: 'watch', price: 500 },
                            {name: 'fan', price: 500 },
                            {name: 'apple laptop', price: 500 },
                            {name: 'mac', price: 500 }
                            ]`
                        }
                            <br />
                            <br />

                            <b>{
                                `const laptop = products.filter(product => product.name.includes('laptop'));`
                            }</b>
                            <br />
                            <br />
                            Then I will find a array of products that contains laptops.
                            <br />
                            <br />
                            <b>{
                                `[{name: 'laptop', price: 500 }, {name: 'apple laptop', price: 500}]`
                            }</b>
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Blogs;