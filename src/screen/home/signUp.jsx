import React, { Component } from 'react';
import './signup.css'

class SignUp extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="wall" id="wall2">
            <section className="text-gray-700 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 desc md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 className="title-font font-medium text-3xl text-gray-900">Login or Sign Up to become a member of the SkyIceCreams community.</h1>
                <p className="leading-relaxed mt-4">Start orderring mouth-waterring icecreams , waffles , candies and many more with your account. Create an account if you dont have one.</p>
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login Now</h2>
                <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-pink-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email"/>
                <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-pink-500 text-base px-4 py-2 mb-4" placeholder="Password" type="password"/>
                <button className="text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Login</button>
                <p id="createacc" className="text-xs text-gray-500 mt-3">Create an account if you don't have one. <a href="create-account">Create Account</a></p>
                </div>
            </div>
            </section>
            </div>
        );
    }
}
 
export default SignUp;