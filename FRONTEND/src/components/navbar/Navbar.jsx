
// ----------------Full Responsive---------------------------
import React, { useState } from 'react';
import { FaSearch, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    const toggleUserDropdown = () => {
        setShowUserDropdown(!showUserDropdown);
    };

    return (
        <nav className="bg-gray-900 text-white">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <Link to="/" className="text-3xl font-bold">
                    AsmShopNest
                </Link>

                {/* Search Icon for mobile */}
                <div className="md:hidden ml-48">
                    <button className="text-white focus:outline-none">
                        <FaSearch size={24} />
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-8 text-xl">
                    {/* Search Bar */}
                    <div className="form-control pt-2">
                    <input type="text" placeholder="Search..." className="input input-bordered w-40 ml-5 bg-gray-200 px-4 py-2 rounded-full focus:outline-none hover:border-black hover:cursor-text text-slate-900"/>
                    </div>
                    <Link to="/" className="hover:text-gray-400 pt-4">Home</Link>
                    <Link to="/products" className="hover:text-gray-400 pt-4">Products</Link>
                    <Link to="/cart" className="hover:text-gray-400 pt-4">Cart</Link>

                    {/* Cart Icon */}
                    <div className="pt-6">
                    <Link to="/cart" className="relative">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="absolute -top-2 -right-2 bg-red-500 rounded-full h-4 w-4 text-xs flex items-center justify-center">8</span>
                    </Link>
                    </div>

                    {/* User Profile */}
                    <div className="relative mt-2">
                        <button className="flex items-center" onClick={toggleUserDropdown}>
                            <img
                                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                alt="User"
                                className="w-14 h-14 rounded-full"
                            />
                        </button>
                        {showUserDropdown && (
                            <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg z-10">
                                <ul className="py-1">
                                    <li>
                                        <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-200" onClick={toggleUserDropdown}>
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-200" onClick={toggleUserDropdown}>
                                            Settings
                                        </Link>
                                    </li>
                                    <li>
                                        <button className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left" onClick={toggleUserDropdown}>
                                            Logout <FaSignOutAlt className="inline ml-2" />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={toggleMobileMenu} className="md:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Mobile Menu */}
                {showMobileMenu && (
                    <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 text-black dark:text-white shadow-lg">
                        <ul className="flex flex-col space-y-2 px-4 py-2">
                            <li>
                                <Link to="/" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700" onClick={toggleMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700" onClick={toggleMobileMenu}/>
                                    Products
                                </li>
                            <li>
                                <Link to="/cart" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700" onClick={toggleMobileMenu}/>
                                    Cart
                                </li>
                            <li>
                                <button onClick={toggleUserDropdown} className="flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 w-full text-left">
                                    <img
                                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                        alt="User"
                                        className="w-8 h-8 rounded-full mr-2"
                                    />
                                    Profile
                                </button>
                            </li>
                            <li>
                                    <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-200" onClick={toggleUserDropdown}>
                                            Settings
                                        </Link>
                            </li>
                            <li>
                                        <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-200" onClick={toggleUserDropdown}>
                                            Logout <FaSignOutAlt className="inline ml-2" />
                                        </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
