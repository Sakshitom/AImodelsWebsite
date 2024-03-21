import React from 'react';
import Logo1 from '../../assets/Logo1.png';
import Logo2 from '../../assets/Logo2.png';
import { Link } from "react-router-dom";

const Gpt3ModelDetails = () => {
  return (
    <div>
      <nav className="bg-black p-4 flex items-center justify-between">
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
        <h2 className="text-3xl font-bold mb-4">GPT-3 AI Model</h2>
        <p className="text-lg mb-4">GPT-3 (Generative Pre-trained Transformer 3) is a state-of-the-art language processing model developed by OpenAI. It's the third iteration of the GPT series and is known for its remarkable ability to generate human-like text based on given prompts.</p>
        <p className="text-lg mb-4">GPT-3 has been trained on a vast amount of text data from the internet, enabling it to understand and generate contextually relevant responses across a wide range of topics and tasks.</p>
        <p className="text-lg mb-4">With its large number of parameters and advanced architecture, GPT-3 has demonstrated capabilities in natural language understanding, text completion, translation, summarization, and more.</p>
        <p className="text-lg mb-4">GPT-3 has gained significant attention and adoption in various fields, including education, creative writing, customer service, and software development.</p>
      </div>

      {/* Example Code */}
      <div className="p-8 w-2/3">
        <h2 className="text-2xl font-bold mb-4">Example Code</h2>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
            {`import openai

openai.api_key = 'your-api-key'

prompt = "Translate the following text to French: 'Hello, how are you?'"
response = openai.Completion.create(engine="davinci", prompt=prompt, max_tokens=50)
print("Translated text:", response.choices[0].text.strip())
`}
          </code>
        </pre>
      </div>

      {/* Use Cases */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
        <ul className="list-disc list-inside">
          <li className="text-lg mb-2">Text Generation</li>
          <li className="text-lg mb-2">Language Translation</li>
          <li className="text-lg mb-2">Chatbots</li>
          <li className="text-lg mb-2">Summarization</li>
          <li className="text-lg mb-2">Content Creation</li>
        </ul>
      </div>
     {/* Action Buttons */}
     <div className="p-8 flex justify-between">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700" onClick={() => window.history.back()}>Back</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none">Try It Out</button>
      </div>
    </div>
  );
};

export default Gpt3ModelDetails;
