import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, DollarSign, Filter, Briefcase, Clock } from 'lucide-react';

const mockJobs = [
    {
        id: 1,
        title: "Product Designer",
        company: "Google",
        location: "Mountain View, CA",
        type: "Full Time",
        salary: "120k-150k",
        posted: "2 days ago",
        description: "We are looking for a talented Product Designer..."
    },
    {
        id: 2,
        title: "Senior Frontend Developer",
        company: "Netflix",
        location: "Remote",
        type: "Full Time",
        salary: "140k-180k",
        posted: "1 day ago",
        description: "Join our core UI engineering team..."
    },
    {
        id: 3,
        title: "Marketing Specialist",
        company: "Spotify",
        location: "New York, NY",
        type: "Part Time",
        salary: "50k-70k",
        posted: "4 hours ago",
        description: "Help us grow our brand..."
    },
    {
        id: 4,
        title: "Backend Engineer",
        company: "Amazon",
        location: "Seattle, WA",
        type: "Contract",
        salary: "130k-160k",
        posted: "3 days ago",
        description: "Build scalable backend services..."
    },
    {
        id: 5,
        title: "Data Analyst",
        company: "Meta",
        location: "Menlo Park, CA",
        type: "Full Time",
        salary: "110k-140k",
        posted: "5 days ago",
        description: "Analyze large datasets to extract insights..."
    }
];

const Jobs = () => {
    const [selectedType, setSelectedType] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const jobTypes = ["Full Time", "Part Time", "Contract", "Freelance", "Internship"];

    const toggleType = (type) => {
        if (selectedType.includes(type)) {
            setSelectedType(selectedType.filter(t => t !== type));
        } else {
            setSelectedType([...selectedType, type]);
        }
    };

    const filteredJobs = mockJobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              job.company.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedType.length === 0 || selectedType.includes(job.type);
        return matchesSearch && matchesType;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Filters */}
                <div className="w-full md:w-64 flex-shrink-0 space-y-8">
                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                        <div className="flex items-center gap-2 mb-4">
                            <Filter className="h-5 w-5 text-gray-500" />
                            <h3 className="font-semibold text-gray-900">Filters</h3>
                        </div>
                        
                        <div className="mb-6">
                            <h4 className="font-medium text-sm text-gray-700 mb-3">Job Type</h4>
                            <div className="space-y-2">
                                {jobTypes.map(type => (
                                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedType.includes(type) ? 'bg-blue-600 border-blue-600' : 'border-gray-300 group-hover:border-blue-400'}`}>
                                            {selectedType.includes(type) && <div className="w-2 h-2 bg-white rounded-sm" />}
                                        </div>
                                        <input 
                                            type="checkbox" 
                                            className="hidden" 
                                            checked={selectedType.includes(type)} 
                                            onChange={() => toggleType(type)} 
                                        />
                                        <span className="text-sm text-gray-600 group-hover:text-gray-900">{type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-medium text-sm text-gray-700 mb-3">Salary Range</h4>
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-500">$0</span>
                                    <input type="range" className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                                    <span className="text-sm text-gray-500">$200k+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                    <div className="mb-6">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input 
                                type="text" 
                                placeholder="Search by job title, company, or keywords..." 
                                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <h2 className="font-bold text-xl text-gray-900">
                            {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Found
                        </h2>
                        <div className="text-sm text-gray-500">
                            Sort by: <span className="font-medium text-gray-900">Newest</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {filteredJobs.map(job => (
                            <div key={job.id} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                                <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-gray-400">
                                            {job.company[0]}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                                                {job.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-2">{job.company}</p>
                                            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500">
                                                <div className="flex items-center gap-1">
                                                    <Briefcase className="h-4 w-4" />
                                                    {job.type}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="h-4 w-4" />
                                                    {job.location}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <DollarSign className="h-4 w-4" />
                                                    ${job.salary}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="h-4 w-4" />
                                                    {job.posted}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={`/jobs/${job.id}`} className="whitespace-nowrap px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white font-medium rounded-lg transition-colors text-sm">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}

                        {filteredJobs.length === 0 && (
                            <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                                <p className="text-gray-500">No jobs found matching your criteria.</p>
                                <button 
                                    onClick={() => {setSearchTerm(""); setSelectedType([]);}}
                                    className="mt-2 text-blue-600 font-medium hover:underline"
                                >
                                    Clear filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
