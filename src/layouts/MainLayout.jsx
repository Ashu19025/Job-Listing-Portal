import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Briefcase, User, Menu, X, Search } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    
    // Quick helper for active link styling
    const isActive = (path) => activePathStyle(location.pathname === path);
    const activePathStyle = (isActive) => isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600";

    return (
        <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                            <div className="bg-blue-600 p-1.5 rounded-lg">
                                <Briefcase className="h-6 w-6 text-white" />
                            </div>
                            <span className="font-bold text-xl text-gray-800">JobPortal</span>
                        </Link>
                        <div className="hidden md:ml-6 md:flex md:space-x-8">
                            <Link to="/" className={isActive('/')}>Home</Link>
                            <Link to="/jobs" className={isActive('/jobs')}>Find Jobs</Link>
                            <Link to="/employers" className={isActive('/employers')}>For Employers</Link>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <Link to="/login" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Log in</Link>
                            <Link to="/register" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">Sign up</Link>
                        </div>
                    </div>
                    
                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="pt-2 pb-3 space-y-1 px-4">
                        <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</Link>
                        <Link to="/jobs" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Find Jobs</Link>
                        <Link to="/employers" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">For Employers</Link>
                    </div>
                    <div className="pt-4 pb-4 border-t border-gray-200 px-4 flex flex-col gap-3">
                        <Link to="/login" className="block w-full text-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                            Log in
                        </Link>
                        <Link to="/register" className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                            Sign up
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

const Footer = () => (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="bg-blue-600 p-1.5 rounded-lg">
                            <Briefcase className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-bold text-xl">JobPortal</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Connecting job seekers with potential employers efficiently.
                    </p>
                </div>
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-200">For Candidates</h3>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li><Link to="/jobs" className="hover:text-white">Browse Jobs</Link></li>
                        <li><Link to="/dashboard" className="hover:text-white">Candidate Dashboard</Link></li>
                        <li><Link to="/alerts" className="hover:text-white">Job Alerts</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-200">For Employers</h3>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li><Link to="/post-job" className="hover:text-white">Post a Job</Link></li>
                        <li><Link to="/dashboard-employer" className="hover:text-white">Employer Dashboard</Link></li>
                        <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-200">Support</h3>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                        <li><a href="mailto:support@amdox.in" className="hover:text-white">support@amdox.in</a></li>
                        <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                &copy; 2026 JobPortal. All rights reserved.
            </div>
        </div>
    </footer>
);

export const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
