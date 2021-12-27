import React from 'react';

const Hero = () => {
    return ( 
        <section className="text-gray-700 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded shadow-lg" alt="hero" src="https://source.unsplash.com/collection/496377/720x600"/>
            </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">We know you love icecreams <br className="hidden lg:inline-block"/>and so do we.
          </h1>
          <p className="mb-8 leading-relaxed">To cater to your sudden icecream cravings we are there 24/7 deliverring delicious deserts within just a few clicks.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Order Now</button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Join Us</button>
          </div>
        </div>
        </div>
    </section>
    );
}
 
export default Hero;