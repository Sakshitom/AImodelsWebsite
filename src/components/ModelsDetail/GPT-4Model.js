import React from 'react';
import Logo1 from '../../assets/Logo1.png';
import Logo2 from '../../assets/Logo2.png';
import { Link } from "react-router-dom";

const GPT4ModelDetails = () => {
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
          <a href="#" className="text-white mr-4 hover:text-gray-300">Contact</a>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">Sign In</button>
        </div>
      </nav>

      {/* Model Information */}
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">GPT-4 AI Model</h2>
        <p className="text-lg mb-4">GPT-4, short for "Generative Pre-trained Transformer 4," is a state-of-the-art natural language processing (NLP) model developed by OpenAI. Building upon the success of its predecessors, GPT-4 is designed to generate human-like text based on given prompts, demonstrating advanced language understanding and generation capabilities.</p>
        <p className="text-lg mb-4">GPT-4 utilizes a transformer architecture, a type of deep learning model known for its effectiveness in processing sequential data. It is trained on a large corpus of text data sourced from the internet, allowing it to learn complex patterns and structures in human language.</p>
        <p className="text-lg mb-4">GPT-4 has demonstrated remarkable performance in various NLP tasks, including language translation, text summarization, question answering, and conversational agents. Its ability to generate coherent and contextually relevant text makes it a valuable tool for a wide range of applications, including content generation, customer service automation, and language understanding tasks.</p>
        <p className="text-lg mb-4">The GPT-4 model is available for use through OpenAI's API, providing developers and researchers with access to its powerful language capabilities. It continues to push the boundaries of natural language understanding and generation, driving advancements in AI-driven text processing.</p>
        <p className="text-lg mb-4">Provider: OpenAI</p>
      </div>

      {/* Example Code */}
      <div className="p-8 w-2/3"> {/* Set width to half and center align */}
        <h2 className="text-2xl font-bold mb-4">Example Code</h2>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
            {`# Example code for using GPT-4 model
# Note: Implementation details may vary based on library used

import openai

# Set OpenAI API key
openai.api_key = "YOUR_API_KEY"

# Prompt for generation
prompt = "Translate the following English text into French: 'Hello, how are you?'"

# Generate text using GPT-4
response = openai.Completion.create(
  engine="text-davinci-004",
  prompt=prompt,
  max_tokens=50,
  temperature=0.7
)

# Display generated text
print(response.choices[0].text.strip())
`}
          </code>
        </pre>
      </div>

      {/* Action Buttons */}
      <div className="p-8 flex justify-between">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700" onClick={() => window.history.back()}>Back</button>
        <a href="https://openai.com/gpt-4" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none">Learn More</button>
        </a>
      </div>
    </div>
  );
};

export default GPT4ModelDetails;
