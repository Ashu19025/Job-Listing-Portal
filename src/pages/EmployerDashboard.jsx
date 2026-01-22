import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Users, Eye, BarChart2 } from 'lucide-react';

const EmployerDashboard = () => {
    const [jobs, setJobs] = useState([
        { id: 1, title: "Product Designer", type: "Full Time", applicants: 12, views: 450, status: "Active", posted: "2d ago" },
        { id: 2, title: "Senior Frontend Developer", type: "Full Time", applicants: 8, views: 320, status: "Active", posted: "1d ago" },
        { id: 3, title: "Marketing Intern", type: "Internship", applicants: 24, views: 560, status: "Closed", posted: "1w ago" },
    ]);

    const handleDelete = (id) => {
        if(window.confirm('Are you sure you want to delete this job posting?')) {
            setJobs(jobs.filter(job => job.id !== id));
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Employer Dashboard</h1>
                    <p className="text-gray-500">Manage your job postings and applications</p>
                </div>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                    <Plus className="h-5 w-5" /> Post New Job
                </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                        <Users className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Applicants</p>
                        <h3 className="text-2xl font-bold text-gray-900">44</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                        <Eye className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Job Views</p>
                        <h3 className="text-2xl font-bold text-gray-900">1,330</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                        <BarChart2 className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Active Jobs</p>
                        <h3 className="text-2xl font-bold text-gray-900">{jobs.filter(j => j.status === 'Active').length}</h3>
                    </div>
                </div>
            </div>

            {/* Jobs Table */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                    <h3 className="font-semibold text-gray-900">Recent Job Postings</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-600">
                        <thead className="bg-gray-50 text-xs uppercase font-medium text-gray-500">
                            <tr>
                                <th className="px-6 py-3">Job Title</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3">Applicants</th>
                                <th className="px-6 py-3">Views</th>
                                <th className="px-6 py-3">Posted</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {jobs.map((job) => (
                                <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-gray-900">
                                        {job.title}
                                        <div className="text-xs text-gray-500 font-normal">{job.type}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                            job.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                                        }`}>
                                            {job.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 flex items-center gap-2">
                                        <Users className="h-4 w-4 text-gray-400" /> {job.applicants}
                                    </td>
                                    <td className="px-6 py-4">
                                        {job.views}
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">
                                        {job.posted}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-3">
                                            <button className="text-blue-600 hover:text-blue-900" title="Edit">
                                                <Edit2 className="h-4 w-4" />
                                            </button>
                                            <button 
                                                className="text-red-600 hover:text-red-900" 
                                                title="Delete"
                                                onClick={() => handleDelete(job.id)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {jobs.length === 0 && (
                    <div className="p-8 text-center text-gray-500">
                        No jobs posted yet.
                    </div>
                )}
            </div>
        </div>
    );
};

export default EmployerDashboard;
