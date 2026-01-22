import React from 'react';
import { Briefcase, MapPin, Calendar, Clock, CheckCircle } from 'lucide-react';

const CandidateDashboard = () => {
    const appliedJobs = [
        { id: 1, title: "Product Designer", company: "Google", location: "Mountain View", appliedDate: "Jan 20, 2026", status: "Interviewing" },
        { id: 2, title: "Frontend Developer", company: "Netflix", location: "Remote", appliedDate: "Jan 18, 2026", status: "Applied" },
        { id: 3, title: "UX Researcher", company: "Spotify", location: "New York", appliedDate: "Jan 15, 2026", status: "Rejected" },
    ];

    const getStatusColor = (status) => {
        switch(status) {
            case 'Interviewing': return 'bg-yellow-100 text-yellow-800';
            case 'Applied': return 'bg-blue-100 text-blue-800';
            case 'Rejected': return 'bg-red-100 text-red-800';
            case 'Offer': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">My Dashboard</h1>
            <p className="text-gray-500 mb-8">Welcome back, John! Here is an overview of your job applications.</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content: Applied Jobs */}
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-gray-500" /> Recent Applications
                    </h2>
                    
                    <div className="space-y-4">
                        {appliedJobs.map(job => (
                            <div key={job.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <h3 className="font-bold text-gray-900">{job.title}</h3>
                                    <p className="text-sm text-gray-600 mb-2">{job.company} • {job.location}</p>
                                    <div className="flex items-center gap-3 text-xs text-gray-500">
                                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> Applied: {job.appliedDate}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(job.status)}`}>
                                        {job.status}
                                    </span>
                                    <button className="text-sm text-blue-600 font-medium hover:underline">View Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar: Profile Summary */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-16 w-16 bg-gray-200 rounded-full overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile" className="h-full w-full object-cover" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">John Doe</h3>
                                <p className="text-sm text-gray-500">Product Designer</p>
                            </div>
                        </div>
                        
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-600">Profile Completion</span>
                                    <span className="text-blue-600 font-medium">85%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                            
                            <button className="w-full py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                Edit Profile
                            </button>
                            <button className="w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                                Upload Resume
                            </button>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <h3 className="font-bold text-blue-900 mb-2">Upgrade to Pro</h3>
                        <p className="text-sm text-blue-700 mb-4">Get noticed by top employers and see who views your profile.</p>
                        <button className="text-sm font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1">
                            Learn more <CheckCircle className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CandidateDashboard;
