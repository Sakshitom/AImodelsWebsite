import React, { useState, useEffect } from 'react';
import Logo1 from '../assets/Logo1.png';
import Logo2 from '../assets/Logo2.png';
import { Link } from 'react-router-dom';

// Navbar component
const Navbar = () => {
  return (
    <nav className="bg-black p-4 flex items-center justify-between ">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo1} alt="Logo1" className="h-14" />
          <img src={Logo2} alt="Logo2" className="h-14" />
        </div>

        {/* Additional Elements */}
        <div className="flex items-center">
          {/* Change "About" to "Home" with Link to LandingPage */}
          <Link to="/" className="text-white mr-4 hover:text-gray-300">Home</Link>
          {/* <a href="#" className="text-white mr-4 hover:text-gray-300">Contact</a> */}
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">Sign In</button>
        </div>
      </nav>
  );
};

// AIModelCard component
const AIModelCard = ({ name, description, provider, popularity }) => {
  return (
    <div className="w-1/3 p-4">
      <div className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          <p className="text-gray-400">Provider: {provider}</p>
          <p className="text-gray-400">Popularity: {popularity}</p>
        </div>
        <div className="mt-auto">
          <a href={`/models/${name}`} className="block bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md focus:outline-none text-center">
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};



// AIModelCards component
const AIModelCards = ({ models, selectedCategory, selectedPopularity, searchTerm }) => {
  // Filter models based on selected category, popularity, and search term
  const filteredModels = models.filter(model => {
    const categoryMatch = !selectedCategory || model.category === selectedCategory;
    const popularityMatch = !selectedPopularity || model.popularity === selectedPopularity;
    const searchTermMatch = !searchTerm || model.name.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && popularityMatch && searchTermMatch;
  });

  return (
    <div className="flex flex-wrap">
      {filteredModels.map(model => (
        <AIModelCard
          key={model.id}
          name={model.name}
          description={model.description}
          provider={model.provider}
          popularity={model.popularity}
        />
      ))}
    </div>
  );
};

// ModelCardsContainer component
const ModelCardsContainer = () => {
  const [models, setModels] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPopularity, setSelectedPopularity] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch models from API endpoint
    fetch('http://localhost:3004/users')
      .then(response => response.json())
      .then(data => setModels(data))
      .catch(error => console.error('Error fetching models:', error));
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePopularityChange = (e) => {
    setSelectedPopularity(e.target.value);
  };

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      
      {/* Filter Options */}
      <nav>
        <div className="flex items-center p-4">
          <select className="bg-gray-800 text-white border border-gray-700 rounded-full p-4 mr-2 focus:outline-none" onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            <option value="Natural Language Processing (NLP)">Natural Language Processing (NLP)</option>
            <option value="Computer Vision (CV)">Computer Vision (CV)</option>
            <option value="Speech Synthesis">Speech Synthesis</option>
          </select>
          <select className="bg-gray-800 text-white border border-gray-700 rounded-full p-4 mr-2 focus:outline-none" onChange={handlePopularityChange}>
            <option value="">All Popularity</option>
            <option value="High">Most Popular</option>
            <option value="Recent">Recent</option>
          </select>
          <input
            type="text"
            placeholder="Search by name..."
            onChange={handleSearchInputChange}
            className="bg-gray-800 text-white border border-gray-700 rounded-full p-4 mr-2 w-96 focus:outline-none"
          />
        </div>
      </nav>

      {/* Model Cards */}
      <AIModelCards models={models} selectedCategory={selectedCategory} selectedPopularity={selectedPopularity} searchTerm={searchTerm} />
    </div>
  );
};

export default ModelCardsContainer;
