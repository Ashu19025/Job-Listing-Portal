import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, DollarSign, Briefcase, Clock, Calendar, Globe, Share2, Bookmark } from 'lucide-react';

const JobDetails = () => {
    const { id } = useParams();

    // Mock data - in a real app this would fetch based on ID
    const job = {
        title: "Product Designer",
        company: "Google", 
        location: "Mountain View, CA",
        type: "Full Time",
        salary: "$120k - $150k",
        posted: "2 days ago",
        description: "We are looking for a talented Product Designer to join our team. You will be responsible for creating intuitive and beautiful user experiences for our global products...",
        requirements: [
            "3+ years of experience in Product Design",
            "Proficiency in Figma, Sketch, or Adobe XD",
            "Strong understanding of user-centered design principles",
            "Experience working in an agile environment"
        ],
        benefits: [
            "Competitive salary and equity",
            "Health, dental, and vision insurance",
            "Unlimited PTO",
            "Free lunch and snacks"
        ]
    };

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                        <div className="flex gap-6">
                            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center font-bold text-2xl text-gray-400">
                                G
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h1>
                                <div className="text-gray-600 font-medium mb-4">{job.company}</div>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {job.location}</div>
                                    <div className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" /> {job.type}</div>
                                    <div className="flex items-center gap-1.5"><DollarSign className="h-4 w-4" /> {job.salary}</div>
                                    <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {job.posted}</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 w-full md:w-auto">
                            <button className="flex-1 md:flex-none p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                <Share2 className="h-5 w-5 text-gray-600" />
                            </button>
                            <button className="flex-1 md:flex-none p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                <Bookmark className="h-5 w-5 text-gray-600" />
                            </button>
                            <button className="flex-1 md:flex-none px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <h2 className="text-lg font-bold text-gray-900 mb-4">Job Description</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {job.description}
                            </p>
                            
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Requirements</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                                {job.requirements.map((req, index) => <li key={index}>{req}</li>)}
                            </ul>

                            <h3 className="text-lg font-bold text-gray-900 mb-4">Benefits</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                {job.benefits.map((benefit, index) => <li key={index}>{benefit}</li>)}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Date Posted</h3>
                            <div className="flex items-center gap-2 text-gray-600 mb-6">
                                <Calendar className="h-5 w-5 text-gray-400" />
                                <span>January 22, 2026</span>
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-4">Job Location</h3>
                            <div className="w-full h-48 bg-gray-100 rounded-lg mb-6 flex items-center justify-center text-gray-400 text-sm">
                                Map View Placeholder
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                             <h3 className="text-lg font-bold text-gray-900 mb-4">Company Info</h3>
                             <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-gray-400">G</div>
                                <div>
                                    <div className="font-semibold text-gray-900">Google</div>
                                    <a href="#" className="text-blue-600 text-sm hover:underline">View Profile</a>
                                </div>
                             </div>
                             <div className="space-y-3 text-sm text-gray-600">
                                 <div className="flex justify-between">
                                     <span>Founded</span>
                                     <span className="font-medium text-gray-900">1998</span>
                                 </div>
                                 <div className="flex justify-between">
                                     <span>Employees</span>
                                     <span className="font-medium text-gray-900">100k+</span>
                                 </div>
                                 <div className="flex justify-between">
                                     <span>Location</span>
                                     <span className="font-medium text-gray-900">Mountain View</span>
                                 </div>
                                 <div className="pt-2">
                                     <a href="#" className="flex items-center gap-1 text-blue-600 hover:underline">
                                         <Globe className="h-4 w-4" /> https://google.com
                                     </a>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
