import React from 'react';
import Logo1 from '../../assets/Logo1.png';
import Logo2 from '../../assets/Logo2.png';
import { Link } from 'react-router-dom';

const EfficientDetModelDetails = () => {
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
        <h2 className="text-3xl font-bold mb-4">EfficientDet AI Model</h2>
        <p className="text-lg mb-4">EfficientDet is a state-of-the-art object detection model developed by Google Research. It is known for its efficiency in terms of both accuracy and computational resources, making it suitable for various real-time and resource-constrained applications.</p>
        <p className="text-lg mb-4">EfficientDet builds upon the architecture of the EfficientNet model and introduces novel compound scaling techniques to optimize both the backbone network and the object detection head. This allows EfficientDet to achieve higher accuracy with fewer parameters compared to previous object detection models.</p>
        <p className="text-lg mb-4">EfficientDet supports multi-scale feature fusion and compound scaling, enabling it to detect objects of different sizes and scales in images efficiently. It is capable of detecting a wide range of objects with high accuracy, making it suitable for applications such as autonomous driving, surveillance, and image analysis.</p>
        <p className="text-lg mb-4">The EfficientDet model is available as open-source code and pre-trained checkpoints, allowing researchers and developers to use and fine-tune the model for various object detection tasks.</p>
        <p className="text-lg mb-4">Provider: Google Research</p>
      </div>

      {/* Example Code */}
      <div className="p-8 "> {/* Set width to half and center align */}
        <h2 className="text-2xl font-bold mb-4">Example Code</h2>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
            {`# Example code for using EfficientDet model
# Note: Implementation details may vary based on library used

import tensorflow as tf
from tensorflow.keras.applications import EfficientDetModel, EfficientDetConfig
from tensorflow.keras.applications.efficientdet import preprocess_input, decode_predictions

# Load EfficientDet model
config = EfficientDetConfig()
model = EfficientDetModel(config=config)

# Load and preprocess input image
image = tf.keras.preprocessing.image.load_img("path/to/image.jpg", target_size=(config.input_height, config.input_width))
input_image = tf.keras.preprocessing.image.img_to_array(image)
input_image = preprocess_input(input_image)

# Perform object detection
predictions = model.predict(input_image[tf.newaxis, ...])

# Decode predictions
decoded_predictions = decode_predictions(predictions)
print(decoded_predictions)
`}
          </code>
        </pre>
      </div>

      {/* Use Cases */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
        <ul className="list-disc list-inside">
          <li className="text-lg mb-2">Autonomous Driving</li>
          <li className="text-lg mb-2">Surveillance</li>
          <li className="text-lg mb-2">Image Analysis</li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="p-8 flex justify-between">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700" onClick={() => window.history.back()}>Back</button>
        <a href="https://github.com/google/automl/tree/master/efficientdet" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none">GitHub Repo</button>
        </a>
      </div>
    </div>
  );
};

export default EfficientDetModelDetails;
