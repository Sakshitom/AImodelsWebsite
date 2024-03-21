import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import Logo1 from '../assets/Logo1.png';
import Logo2 from '../assets/Logo2.png';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; // Importing Link and animateScroll from react-scroll

const FeaturedModel = ({ name, reason }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4">
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-gray-300">{reason}</p>
    </div>
  );
};

const LandingPage = () => {
  const [featuredModels, setFeaturedModels] = useState([]);

  useEffect(() => {
    // Fetch models from API endpoint or local JSON file
    fetch('http://localhost:3004/users')
      .then(response => response.json())
      .then(data => {
        // Filter out featured models
        const featured = data.filter(model => model.featured);
        setFeaturedModels(featured);
      })
      .catch(error => console.error('Error fetching models:', error));
  }, []);

  const scrollToContact = () => {
    scroll.scrollToBottom(); // Scrolls to the bottom of the page where the contact section is located
  };

  return (
    <div className="h-screen flex flex-col justify-between bg-black">
      {/* Header */}
      <nav className="bg-black p-4 flex items-center justify-between mt-3">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo1} alt="Logo1" className="h-14" />
          <img src={Logo2} alt="Logo2" className="h-14" />
        </div>
        {/* Additional Elements */}
        <div className="flex items-center">
          {/* Change "About" to "Home" with Link to LandingPage */}
          <Link to="/" className="text-white mr-4 hover:text-gray-300">Home</Link>
          {/* Use ScrollLink for smooth scrolling */}
          <ScrollLink to="contact" smooth={true} duration={500} className="text-white mr-4 hover:text-gray-300" onClick={scrollToContact}>Contact</ScrollLink>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">Sign In</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-black text-white text-center py-20 px-4">
        <h2 className="text-4xl font-bold mb-8">Unlock the Potential of AI Model !!</h2>
        <p className="text-lg mb-6">Welcome to the gateway of cutting-edge AI models! Dive into our curated selection and discover the limitless possibilities of artificial intelligence.</p>
        <p className="text-lg mb-6">From unraveling the complexities of natural language processing to unveiling the secrets hidden within images and audio, our collection empowers you to create groundbreaking solutions for tomorrow's challenges.</p>
        <p className="text-lg">Embark on your journey now and redefine what's possible with the fusion of human creativity and machine intelligence.</p>
      </div>

      {/* Browse Models Button */}
      <div className="flex justify-center p-10 mb-9">
        <Link to="/models" className="bg-blue-500 text-white py-3 px-6 rounded-full text-xl font-semibold shadow-lg hover:bg-blue-600 transition duration-300">Browse Models</Link>
      </div>

      {/* Featured Models Section */}
      <div className="bg-gray-300 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-black font-bold mb-10 mt-3 text-center">Featured Models</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredModels.map(model => (
              <FeaturedModel key={model.id} name={model.name} reason={model.reason} />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-gray-700 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-white font-bold mb-10 text-center">Contact Us</h2>
          <div className="max-w-lg mx-auto">
            <p className="text-white mb-6">For inquiries or assistance, please feel free to reach out to us via email or phone:</p>
            <div className="flex items-center mb-6">
              <svg className="h-6 w-6 text-white mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <p className="text-white">Email: contact@example.com</p>
            </div>
            <div className="flex items-center">
              <svg className="h-6 w-6 text-white mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <p className="text-white">Phone Number: +1 (123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4">
        <p>&copy; 2024 AI Models Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
