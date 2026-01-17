import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you have routing set up
import { User, Building2, Mail, Lock, Phone, Hash, FileBadge, CheckSquare } from 'lucide-react';

const Signup = () => {
  const [userType, setUserType] = useState('student'); // 'student' or 'institute'

  // Mock data for the Institute Dropdown
  const institutes = [
    { id: 1, name: "City Engineering College" },
    { id: 2, name: "State Medical University" },
    { id: 3, name: "National Arts Institute" },
    { id: 4, name: "Global Business School" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      
      {/* Header Section */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Join CampusMess to manage your meals efficiently.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl shadow-green-900/10 sm:rounded-xl sm:px-10 border border-gray-100">
          
          {/* Toggle Switch */}
          <div className="flex bg-gray-100 p-1 rounded-lg mb-8">
            <button
              onClick={() => setUserType('student')}
              className={`flex-1 flex items-center justify-center py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                userType === 'student'
                  ? 'bg-white text-green-700 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <User size={18} className="mr-2" />
              Student
            </button>
            <button
              onClick={() => setUserType('institute')}
              className={`flex-1 flex items-center justify-center py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                userType === 'institute'
                  ? 'bg-white text-green-700 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Building2 size={18} className="mr-2" />
              Institute
            </button>
          </div>

          {/* --- STUDENT FORM --- */}
          {userType === 'student' && (
            <form className="space-y-6">
              
              {/* Student Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" placeholder="John Doe" className="pl-10 block w-full border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-sm py-2 border" />
                </div>
              </div>

              {/* Institute Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Select Institute</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building2 className="h-5 w-5 text-gray-400" />
                  </div>
                  <select className="pl-10 block w-full border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-sm py-2 border bg-white">
                    <option value="" disabled selected>Choose your college</option>
                    {institutes.map((inst) => (
                      <option key={inst.id} value={inst.id}>{inst.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Hostel Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Hostel Number/Block</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Hash className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" placeholder="Block A - 101" className="pl-10 block w-full border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-sm py-2 border" />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="password" placeholder="••••••••" className="pl-10 block w-full border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-sm py-2 border" />
                </div>
              </div>

              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors">
                Sign up as Student
              </button>
            </form>
          )}

          {/* --- INSTITUTE FORM --- */}
          {userType === 'institute' && (
            <form className="space-y-5">
              
              {/* Institute Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Institute Name</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building2 className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" placeholder="Institute of Technology" className="pl-10 block w-full border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-sm py-2 border" />
                </div>
              </div>

              {/* Two Column Row */}
              <div className="grid grid-cols-2 gap-4">
                {/* Institute ID */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Institute ID</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FileBadge className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="text" placeholder="INS-1234" className="pl-10 block w-full border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-sm py-2 border" />
                  </div>
                </div>
                {/* Contact */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Contact</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="text" placeholder="9876543210" className="pl-10 block w-full border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-sm py-2 border" />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Official Email</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="email" placeholder="admin@institute.edu" className="pl-10 block w-full border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-sm py-2 border" />
                </div>
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input type="password" placeholder="••••••••" className="pl-10 block w-full border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-sm py-2 border" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Confirm</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <CheckSquare className="h-5 w-5 text-gray-400" />
                      </div>
                      <input type="password" placeholder="••••••••" className="pl-10 block w-full border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-sm py-2 border" />
                    </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center">
                <input id="terms" name="terms" type="checkbox" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  I agree to the <a href="#" className="text-green-600 hover:text-green-500">Terms and Conditions</a>
                </label>
              </div>

              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors">
                Register Institute
              </button>
            </form>
          )}

          {/* Footer - Navigate to Login */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Already have an account?
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <Link
                to="/login"
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
              >
                Log in instead
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signup;