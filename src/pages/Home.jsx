import React, { useState } from 'react';
import { Search, MapPin, DollarSign, Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const jobs = [
    {
        id: 1,
        title: "Product Designer",
        company: "Google",
        location: "Mountain View, CA",
        type: "Full Time",
        salary: "$120k - $150k",
        posted: "2 days ago",
        logo: "https://logo.clearbit.com/google.com",
        tags: ["UI/UX", "Figma", "Design System"]
    },
    {
        id: 2,
        title: "Senior Frontend Developer",
        company: "Netflix",
        location: "Remote",
        type: "Full Time",
        salary: "$140k - $180k",
        posted: "1 day ago",
        logo: "https://logo.clearbit.com/netflix.com",
        tags: ["React", "TypeScript", "Tailwind"]
    },
    {
        id: 3,
        title: "Marketing Specialist",
        company: "Spotify",
        location: "New York, NY",
        type: "Part Time",
        salary: "$50k - $70k",
        posted: "4 hours ago",
        logo: "https://logo.clearbit.com/spotify.com",
        tags: ["Marketing", "SEO", "Content"]
    },
    {
        id: 4,
        title: "Backend Engineer",
        company: "Amazon",
        location: "Seattle, WA",
        type: "Contract",
        salary: "$130k - $160k",
        posted: "3 days ago",
        logo: "https://logo.clearbit.com/amazon.com",
        tags: ["Java", "AWS", "Microservices"]
    }
];

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [locationTerm, setLocationTerm] = useState("");

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
                        Find your <span className="text-blue-600">dream job</span> today
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
                        Browse thousands of job openings to view & apply to the best jobs today!
                    </p>

                    {/* Search Bar */}
                    <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center">
                        <div className="flex-1 relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input 
                                type="text" 
                                placeholder="Job title or keyword" 
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all text-gray-800"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="h-8 w-px bg-gray-200 hidden md:block"></div>
                        <div className="flex-1 relative w-full">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input 
                                type="text" 
                                placeholder="City or location" 
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all text-gray-800"
                                value={locationTerm}
                                onChange={(e) => setLocationTerm(e.target.value)}
                            />
                        </div>
                        <button className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-blue-200">
                            Search
                        </button>
                    </div>
                    
                    <div className="mt-8 flex justify-center gap-4 text-sm text-gray-500">
                        <span className="font-medium">Popular:</span>
                        <ul className="flex gap-4">
                            <li className="hover:text-blue-600 cursor-pointer underline decoration-dotted">UI Designer</li>
                            <li className="hover:text-blue-600 cursor-pointer underline decoration-dotted">Software Engineer</li>
                            <li className="hover:text-blue-600 cursor-pointer underline decoration-dotted">Data Scientist</li>
                        </ul>
                    </div>
                </div>
                
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-50 opacity-50 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-50 opacity-50 blur-3xl"></div>
            </section>

            {/* Featured Jobs Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">Featured Jobs</h2>
                            <p className="mt-2 text-gray-600">Hand-picked jobs just for you</p>
                        </div>
                        <Link to="/jobs" className="hidden sm:flex items-center text-blue-600 font-semibold hover:text-blue-700 gap-1">
                            Browse all jobs <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {jobs.map((job) => (
                            <div key={job.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                                <div className="flex justify-between items-start">
                                    <div className="flex gap-4">
                                        <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                                            <img src={job.logo} alt={job.company} className="h-8 w-8 object-contain" onError={(e) => { e.target.style.display='none'; e.target.parentElement.innerHTML = '<span class="font-bold text-gray-400">?</span>' }} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                                            <p className="text-gray-500">{job.company}</p>
                                        </div>
                                    </div>
                                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                                        {job.type}
                                    </span>
                                </div>
                                
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {job.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded border border-gray-100">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-sm text-gray-500">
                                    <div className="flex gap-4">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4" /> {job.location}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <DollarSign className="h-4 w-4" /> {job.salary}
                                        </div>
                                    </div>
                                    <span>{job.posted}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center sm:hidden">
                        <Link to="/jobs" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                            Browse all jobs
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
