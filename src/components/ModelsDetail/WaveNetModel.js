import React from 'react';
import Logo1 from '../../assets/Logo1.png';
import Logo2 from '../../assets/Logo2.png';
import { Link } from "react-router-dom";

const WaveNetModelDetails = () => {
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
        <h2 className="text-3xl font-bold mb-4">WaveNet AI Model</h2>
        <p className="text-lg mb-4">WaveNet is a deep generative model for audio generation, developed by researchers at DeepMind. It operates directly on raw audio waveforms, allowing it to capture fine details of sound and produce high-fidelity audio samples.</p>
        <p className="text-lg mb-4">WaveNet is based on dilated convolutional neural networks, which enable it to model long-range dependencies in audio signals effectively. By stacking multiple layers of dilated convolutions, WaveNet can generate audio waveforms with natural-sounding speech and music.</p>
        <p className="text-lg mb-4">WaveNet has been used in various applications, including text-to-speech synthesis, music generation, and audio processing tasks such as noise reduction and audio denoising.</p>
      </div>

      {/* Example Code */}
      <div className="p-8 w-2/3"> {/* Set width to half and center align */}
        <h2 className="text-2xl font-bold mb-4">Example Code</h2>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
            {`# Example code for using WaveNet model
# Note: Implementation details may vary based on library used

import tensorflow as tf
from tensorflow_wavenet import WaveNet

# Load pre-trained WaveNet model
wavenet = WaveNet.load_model('pretrained_wavenet.h5')

# Generate audio sample
audio_sample = wavenet.generate_audio(seed_input, duration=5)

# Play audio sample
audio_sample.play()
`}
          </code>
        </pre>
      </div>

      {/* Use Cases */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
        <ul className="list-disc list-inside">
          <li className="text-lg mb-2">Text-to-Speech Synthesis</li>
          <li className="text-lg mb-2">Music Generation</li>
          <li className="text-lg mb-2">Audio Denoising</li>
          <li className="text-lg mb-2">Speech Enhancement</li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="p-8 flex justify-between">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700" onClick={() => window.history.back()}>Back</button>
        <a href="https://tensorspace.org/html/playground/wavenet.html" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none">Try It Out</button>
        </a>
      </div>
    </div>
  );
};

export default WaveNetModelDetails;
