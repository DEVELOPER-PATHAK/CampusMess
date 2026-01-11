import React from 'react';
import { ChevronDown, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

// --- Components ---

// 1. Navbar Component (Header)
const Navbar = () => {
  return (
    // absolute position to sit on top of the hero image
    <header className="absolute top-0 left-0 w-full z-20 border-b border-white/10 bg-black/20 backdrop-blur-sm font-sans">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          CampusMess<span className="text-green-500">.</span>
        </div>

        {/* Navigation Items - Order specified in prompt */}
        <nav className="flex items-center space-x-8 text-white font-medium">
          <a href="#contact-footer" className="hover:text-green-400 transition">Contact Us</a>
          <a href="#" className="hover:text-green-400 transition">Subscribe</a>

          <div className="flex items-center space-x-4 ml-4">
            <button className="px-4 py-2 text-sm hover:text-green-400 transition">
              Login
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition shadow-lg shadow-green-900/20">
              Signup
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

// 2. Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white font-sans">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
         // Using a high-quality Unsplash image of a dining hall/healthy food
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80&w=2070&auto=format&fit=crop')" }}
      >
        {/* Dark overlay so text pops */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto mt-16">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Modernizing Your <br /> <span className="text-green-500">Campus Dining</span> Experience
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-200 drop-shadow-md">
          Streamline booking, manage menus, and reduce waste with our smart mess management system.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white text-lg font-bold px-10 py-4 rounded-full transition transform hover:scale-105 shadow-xl shadow-green-900/30">
          Get Started
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2  z-10 animate-bounce text-white/80">
        <a href="#functionalities" className="flex flex-col items-center">
          <span className="text-sm mb-3.5 uppercase tracking-widest">Scroll Down</span>
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

// 3. Functionalities Section (Placeholder for scroll target)
const Functionalities = () => {
  return (
    <section id="functionalities" className="py-24 bg-gray-50 font-sans">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Core Functionalities</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Feature Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="h-12 w-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6 text-2xl">📅</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Reduces Food Wastage</h3>
            <p className="text-gray-600">Students can cancel meals in seconds via the dashboard.</p>
          </div>
          {/* Feature Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
           <div className="h-12 w-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6 text-2xl">🥗</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Efficient Food and Labour Management</h3>
            <p className="text-gray-600">Admins can manage menu and their dynamic pricing.</p>
          </div>
          {/* Feature Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
           <div className="h-12 w-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6 text-2xl">💳</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Track Payments</h3>
            <p className="text-gray-600">Transparent billing history and easy wallet recharges.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// 4. About Us Section (Placeholder)
// const AboutUs = () => {
//   return (
//     <section className="py-24 bg-white font-sans border-t border-gray-100">
//       <div className="container mx-auto px-6 max-w-4xl text-center">
//         <h2 className="text-4xl font-bold text-gray-800 mb-8">About Us</h2>
//         <p className="text-lg text-gray-600 leading-relaxed mb-8">
//           We are dedicated to improving the quality of life for students and the efficiency of administration staff. Our mess management system was born out of a need to digitize outdated paper-based processes, ensure fair food distribution, and cut down on unnecessary food waste on campus.
//         </p>
//         <img src="https://media.istockphoto.com/id/1446478805/photo/a-chef-is-finishing-the-preparation-of-the-plate.jpg?s=612x612&w=0&k=20&c=OoFoYYJ0_eun72wlt-lDzlYjY-CaLwphDgUyIApDu_I=" alt="Kitchen staff" className="rounded-2xl shadow-lg mx-auto object-cover h-64 w-full md:w-2/3" />
//       </div>
//     </section>
//   );
// };

const AboutUs = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Our Mess Management System
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            We are dedicated to improving the quality of life for students and the efficiency of administration staff.
            Our mess management system was born out of a need to digitize outdated paper-based processes, ensure fair food
            distribution, and cut down on unnecessary food waste on campus.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            By combining technology with smart planning, we help institutions save time, reduce costs, and create a
            better dining experience for everyone.
          </p>

          <button className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://media.istockphoto.com/id/1446478805/photo/a-chef-is-finishing-the-preparation-of-the-plate.jpg?s=612x612&w=0&k=20&c=OoFoYYJ0_eun72wlt-lDzlYjY-CaLwphDgUyIApDu_I="
            alt="Mess management"
            className="w-full max-w-md rounded-2xl shadow-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
};

// export default AboutUs;


// 5. Footer Component
const Footer = () => {
  return (
    <footer id="contact-footer" className="bg-gray-900 text-gray-300 py-16 font-sans">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Column 1: Brand */}
        <div>
           <div className="text-2xl font-bold text-white mb-4">
            CampusMess<span className="text-green-500">.</span>
          </div>
          <p className="mb-6">Simplifying campus dining one meal at a time.</p>
        </div>

         {/* Column 2: Contact Us Details */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <Mail size={20} className="text-green-500" />
              <span>support@campusmess.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={20} className="text-green-500" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-3">
              <MapPin size={20} className="text-green-500" />
              <span>University Campus, Block C</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Socials */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 hover:text-white transition"><Facebook size={20} /></a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 hover:text-white transition"><Twitter size={20} /></a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 hover:text-white transition"><Instagram size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
        <p>© 2026 CampusMess Systems. All rights reserved.</p>
        {/* "Made by XYZ" requirement */}
        <p className="mt-2 text-gray-500">Made with ❤️ by <span className="text-gray-300 font-medium">XYZ Developers</span></p>
      </div>
    </footer>
  );
};


// --- Main App Component ---
function App() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navbar />
      <HeroSection />
      <Functionalities />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;