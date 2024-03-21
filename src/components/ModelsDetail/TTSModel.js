import React from 'react';
import Logo1 from '../../assets/Logo1.png';
import Logo2 from '../../assets/Logo2.png';
import { Link } from 'react-router-dom';

const TTS2ModelDetails = () => {
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
          {/* <a href="#" className="text-white mr-4 hover:text-gray-300">Contact</a> */}
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">Sign In</button>
        </div>
      </nav>

      {/* Model Information */}
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">TTS-2 AI Model</h2>
        <p className="text-lg mb-4">TTS-2 (Text-to-Speech 2) is an advanced neural network-based model for converting text into speech developed by OpenAI. It is designed to generate human-like speech with natural intonation, rhythm, and prosody, making it suitable for various applications requiring high-quality synthetic speech.</p>
        <p className="text-lg mb-4">TTS-2 builds upon the advancements in deep learning and speech synthesis techniques to produce more natural and expressive speech compared to traditional text-to-speech systems. It incorporates state-of-the-art models such as transformers and autoregressive networks to generate speech that closely resembles human speech patterns.</p>
        <p className="text-lg mb-4">TTS-2 supports multiple languages and accents, allowing users to generate speech in different languages and styles. It can also adapt its speech characteristics based on the input text, making it versatile for various use cases, including virtual assistants, audiobook narration, accessibility tools, and interactive voice response systems.</p>
        <p className="text-lg mb-4">The TTS-2 model is available for use through OpenAI's API, allowing developers and organizations to integrate high-quality text-to-speech capabilities into their applications and services. It continues to drive advancements in synthetic speech generation and has the potential to enhance user experiences across different platforms and devices.</p>
        <p className="text-lg mb-4">Provider: OpenAI</p>
      </div>

      {/* Example Code */}
      <div className="p-8 w-2/3"> {/* Set width to two-thirds and center align */}
        <h2 className="text-2xl font-bold mb-4">Example Code</h2>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
            {`# Example code for using TTS-2 model
# Note: Implementation details may vary based on library used

from transformers import TFAutoModelForCausalLM, AutoTokenizer
import tensorflow as tf

# Load TTS-2 model and tokenizer
model_name = "openai/tts-2"
model = TFAutoModelForCausalLM.from_pretrained(model_name)
tokenizer = AutoTokenizer.from_pretrained(model_name)

# Convert text to speech
text = "Hello, how are you?"
input_ids = tokenizer.encode(text, return_tensors="tf")
output_ids = model.generate(input_ids, max_length=100, num_return_sequences=1)

# Decode speech output
speech_output = tokenizer.decode(output_ids[0])
print(speech_output)
`}
          </code>
        </pre>
      </div>
         {/* Use Cases */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
        <ul className="list-disc list-inside">
          <li className="text-lg mb-2">Virtual Assistants</li>
          <li className="text-lg mb-2">Audiobook Narration</li>
          <li className="text-lg mb-2">Accessibility Tools</li>
          <li className="text-lg mb-2">Interactive Voice Response Systems</li>
        </ul>
      </div>
      {/* Action Buttons */}
      <div className="p-8 flex justify-between">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700" onClick={() => window.history.back()}>Back</button>
        <a href="https://blueldr.github.io/tts-playground/" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none">Try it out</button>
        </a>
      </div>
    </div>
  );
};

export default TTS2ModelDetails;
