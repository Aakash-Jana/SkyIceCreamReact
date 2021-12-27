import React from 'react';

// fetch nearest store with help of django and google maps api
const Directions = (props) => {
    // The url of the iframe has a query parameter of city which will be set to that of the user based on login data 
    // sent by django server and receive to us via the prop from the parent of this component
    return ( 
        <section className="text-gray-700 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
            <iframe id="map" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Kolkata+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Give Us Your Feedback</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Your valuable feedback will help us improve our service.</p>
            <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-pink-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email"/>
            <textarea className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-pink-500 text-base px-4 py-2 mb-4 resize-none" placeholder="Message"></textarea>
            <button type="submit" value="SUBMIT" className="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">submit</button>
            <p className="text-xs text-gray-500 mt-3">We may display your feedback on our site.</p>
            </div>
        </div>
        </section>
    );
}
 
export default Directions;