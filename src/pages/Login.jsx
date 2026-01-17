import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Building2, Lock, FileBadge, Hash, LogIn } from 'lucide-react';

const Login = () => {
  const [userType, setUserType] = useState('student'); // 'student' or 'institute'

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      
      {/* Header Section */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Welcome Back
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Sign in to access your mess dashboard.
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

          {/* --- STUDENT LOGIN FORM --- */}
          {userType === 'student' && (
            <form className="space-y-6">
              
              {/* Institute Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Institute Name</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building2 className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" placeholder="e.g. City Engineering College" className="pl-10 block w-full border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-sm py-2 border" />
                </div>
              </div>

              {/* Student Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Student Name</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" placeholder="John Doe" className="pl-10 block w-full border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-sm py-2 border" />
                </div>
              </div>

              {/* Hostel Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Hostel No.</label>
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

              <button type="submit" className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors">
                <LogIn size={18} className="mr-2" />
                Login as Student
              </button>
            </form>
          )}

          {/* --- INSTITUTE LOGIN FORM --- */}
          {userType === 'institute' && (
            <form className="space-y-6">
              
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

              <button type="submit" className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors">
                 <LogIn size={18} className="mr-2" />
                Login as Institute
              </button>
            </form>
          )}

          {/* Footer - Navigate to Signup */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Not registered yet?
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <Link
                to="/signup"
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
              >
                Create an account
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;