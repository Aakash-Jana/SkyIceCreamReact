import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return ( 
        <header className="text-gray-700 body-font">
            <div className="text-style container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link to="/" className="flex link title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl">SkyIceCream</span>
            </Link>
            <nav className="md:ml-auto md:mr-auto text-style flex flex-wrap items-center text-base justify-center">
                <Link to="/" className="mr-5 link hover:text-gray-900">Home</Link>
                <Link to="/contacts" className="mr-5 link hover:text-gray-900">Contact Us</Link>
                <Link to="/menu" className="mr-5 link hover:text-gray-900">Order Online</Link>
                {/* <a href="/home" className="mr-5 hover:text-gray-900">Get Directions</a> */}
                <Link to="/signUp" className="mr-5 link hover:text-gray-900">Login/Sign Up</Link>
            </nav>
            <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Order Now
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </button>
            </div>
        </header>
    );
}
 
export default NavBar;