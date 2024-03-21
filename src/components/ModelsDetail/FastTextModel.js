import React from 'react';
import Logo1 from '../../assets/Logo1.png';
import Logo2 from '../../assets/Logo2.png';
import { Link } from "react-router-dom";

const FastTextModelDetails = () => {
  return (
    <div>
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

      {/* Model Information */}
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">FastText AI Model</h2>
        <p className="text-lg mb-4">FastText is a library for efficient learning of word representations and sentence classification developed by Facebook's AI Research (FAIR) lab. It is capable of learning word embeddings and text classifications efficiently, making it suitable for large-scale text data processing tasks.</p>
        <p className="text-lg mb-4">FastText utilizes a simple neural network architecture with a continuous bag of words (CBOW) model for learning word representations. It also incorporates subword information through character n-grams, enabling it to handle out-of-vocabulary words and morphological variations effectively.</p>
        <p className="text-lg mb-4">FastText is commonly used for text classification, sentiment analysis, language identification, and other natural language processing (NLP) tasks. Its efficiency and effectiveness make it a popular choice for processing textual data in various applications.</p>
        <p className="text-lg mb-4">The FastText library is provided by Facebook's AI Research (FAIR) lab as an open-source project, allowing developers to use and contribute to its development.</p>
      </div>

      {/* Example Code */}
      <div className="p-8 w-2/3"> {/* Set width to half and center align */}
        <h2 className="text-2xl font-bold mb-4">Example Code</h2>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
            {`# Example code for using FastText model
# Note: Implementation details may vary based on library used

from fasttext import train_supervised

# Train a FastText supervised model
model = train_supervised(input='train.txt', epoch=25, lr=1.0, wordNgrams=2, verbose=2)

# Test the trained model
result = model.test('test.txt')

# Print test results
print('Precision:', result[1])
print('Recall:', result[2])
print('F1 Score:', result[3])
`}
          </code>
        </pre>
      </div>

      {/* Use Cases */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
        <ul className="list-disc list-inside">
          <li className="text-lg mb-2">Text Classification</li>
          <li className="text-lg mb-2">Sentiment Analysis</li>
          <li className="text-lg mb-2">Language Identification</li>
          <li className="text-lg mb-2">Topic Modeling</li>
          <li className="text-lg mb-2">Text Similarity</li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="p-8 flex justify-between">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700" onClick={() => window.history.back()}>Back</button>
        <a href="https://fasttext.cc/" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none">Try It Out</button>
        </a>
      </div>
    </div>
  );
};

export default FastTextModelDetails;
