import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [showLinks, setShowLinks] = useState(false);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible((prevScrollPos > currentScrollPos || currentScrollPos < 10) && currentScrollPos < 100);
        setPrevScrollPos(currentScrollPos);
    };

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    return (
        <nav className={`bg-gray-900 z-50 text-white ${visible ? 'sticky top-0' : 'sticky -top-20'}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center">
                        <Link to="/" className="text-lg font-semibold mr-4">E-Commerce</Link>
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <div className="md:hidden">
                        <button className="focus:outline-none" onClick={toggleLinks}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className={`md:flex items-center space-x-4 ${showLinks ? 'block' : 'hidden'}`}>
                        <Link to="/" className="hover:text-gray-400">Home</Link>
                        <Link to="/products" className="hover:text-gray-400">Products</Link>
                        <Link to="/cart" className="hover:text-gray-400">Cart</Link>
                    </div>

                    {/* Search Input and Button */}
                    <div className="md:flex items-center space-x-4">
                        <div data-theme="dark" className="form-control flex">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        </div>
                        <button className="btn btn-ghost">Search</button>
                    </div>

                    {/* Cart and User Profile */}
                    <div className="md:flex items-center space-x-4">
                        <div className="flex-none">
                            <div data-theme="dark" className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item">8</span>
                                    </div>
                                </div>
                                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                    <div className="card-body">
                                        <span className="font-bold text-lg">8 Items</span>
                                        <span className="text-info">Subtotal: $999</span>
                                        <div className="card-actions">
                                            <button className="btn btn-primary btn-block"><Link to="/cart" className="hover:text-gray-400">View cart</Link></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-theme="dark" className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="User" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a>
                                        <Link to="/profile" className="hover:text-gray-400">Profile</Link>
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><Link to="/settings" className="hover:text-gray-400">Setting</Link></li>
                                <li>
                                    <a>
                                        Logout
                                        <FaSignOutAlt className="inline-block ml-2" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </nav >
    );
}

export default Navbar;
