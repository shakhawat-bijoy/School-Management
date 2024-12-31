import React from 'react';
import regis from '../assets/regis.png';
import cover from '../assets/cover.png';
import Image from './layer/Image';
import Container from './layer/Container';

const Registration = () => {
  return (
    <div className='bg-[rgb(200,210,255)]'>
    <Container>
    <div className="flex items-center justify-between h-screen ">
      {/* Left Section: Image */}
      <div className="h-full mt-96">
        <Image
          src={cover} // Replace with your image URL or import
          alt="Left Section Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-1/2 bg-white p-10 shadow-md rounded-md overflow-y-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Register Here</h2>
        <form>
            {/* Grid for First Name, Last Name */}
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
                <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-700"
                >
                First Name
                </label>
                <input
                type="text"
                id="first_name"
                placeholder="John"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
            </div>
            <div>
                <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-700"
                >
                Last Name
                </label>
                <input
                type="text"
                id="last_name"
                placeholder="Doe"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
            </div>
            </div>

            {/* Grid for Company and Phone */}
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
                <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-700"
                >
                Company
                </label>
                <input
                type="text"
                id="company"
                placeholder="Your Company"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
            </div>
            <div>
                <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-700"
                >
                Phone Number
                </label>
                <input
                type="tel"
                id="phone"
                placeholder="123-456-7890"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
                />
            </div>
            </div>

            {/* Email */}
            <div className="mb-6">
            <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
            >
                Email Address
            </label>
            <input
                type="email"
                id="email"
                placeholder="example@domain.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            </div>

            {/* Passwords */}
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
                <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
                >
                Password
                </label>
                <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
            </div>
            <div>
                <label
                htmlFor="confirm_password"
                className="block mb-2 text-sm font-medium text-gray-700"
                >
                Confirm Password
                </label>
                <input
                type="password"
                id="confirm_password"
                placeholder="••••••••"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
            </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center mb-6">
            <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                required
            />
            <label
                htmlFor="terms"
                className="ml-2 text-sm font-medium text-gray-600"
            >
                I agree to the{' '}
                <a href="#" className="text-blue-600 hover:underline">
                terms and conditions
                </a>
                .
            </label>
            </div>

            {/* Submit Button */}
            <div className="text-center">
            <button
                type="submit"
                className="w-full px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Submit
            </button>
            </div>
        </form>
        </div>
    </div>
    </Container>
    </div>
  );
};

export default Registration;
