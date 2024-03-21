// CycleGANModelDetails component
import React from 'react';
import Logo1 from '../../assets/Logo1.png';
import Logo2 from '../../assets/Logo2.png';
import { Link } from 'react-router-dom';
const CycleGANModelDetails = () => {
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
          <h2 className="text-3xl font-bold mb-4">CycleGAN AI Model</h2>
          <p className="text-lg mb-4">CycleGAN is a type of Generative Adversarial Network (GAN) used for image-to-image translation. It is capable of learning mappings between two different visual domains without requiring paired input-output data during training.</p>
          <p className="text-lg mb-4">CycleGAN consists of two generator networks and two discriminator networks. It learns to translate images from one domain to another while preserving important visual features, such as style, color, and texture. CycleGAN achieves this by introducing cycle-consistency loss, which enforces the translated images to be mapped back to the original domain, forming a cycle.</p>
          <p className="text-lg mb-4">CycleGAN has been applied in various domains, including style transfer, object transfiguration, image colorization, and artistic rendering. Its ability to learn unsupervised mappings between domains makes it a powerful tool for image manipulation and creative content generation.</p>
          <p className="text-lg mb-4">The CycleGAN model is implemented in popular deep learning frameworks such as TensorFlow and PyTorch and is available as open-source projects, allowing researchers and developers to use and experiment with the model for different applications.</p>
          <p className="text-lg mb-4">Provider: UC Berkeley</p>
        </div>
  
        {/* Example Code */}
        <div className="p-8 w-2/3"> {/* Set width to half and center align */}
          <h2 className="text-2xl font-bold mb-4">Example Code</h2>
          <pre className="bg-gray-800 p-4 rounded-md text-white">
            <code>
              {`# Example code for using CycleGAN model
  # Note: Implementation details may vary based on library used
  
  import tensorflow as tf
  from tensorflow_examples.models.pix2pix import pix2pix
  
  # Load CycleGAN model
  cycle_gan_model = pix2pix.unet_generator()
  
  # Load and preprocess input image
  input_image = tf.io.read_file("path/to/image.jpg")
  input_image = tf.image.decode_jpeg(input_image)
  input_image = tf.image.resize(input_image, [256, 256])
  input_image = tf.cast(input_image, tf.float32) / 127.5 - 1
  
  # Generate translated image
  generated_image = cycle_gan_model(input_image[tf.newaxis, ...], training=True)
  
  # Post-process and display generated image
  `}
            </code>
          </pre>
        </div>
  
        {/* Use Cases */}
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
          <ul className="list-disc list-inside">
            <li className="text-lg mb-2">Style Transfer</li>
            <li className="text-lg mb-2">Object Transfiguration</li>
            <li className="text-lg mb-2">Image Colorization</li>
            <li className="text-lg mb-2">Artistic Rendering</li>
          </ul>
        </div>
  
        {/* Action Buttons */}
        <div className="p-8 flex justify-between">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700" onClick={() => window.history.back()}>Back</button>
          <a href="https://github.com/junyanz/CycleGAN" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none">GitHub Repo</button>
          </a>
        </div>
      </div>
    );
  };
  
  export default CycleGANModelDetails;
  