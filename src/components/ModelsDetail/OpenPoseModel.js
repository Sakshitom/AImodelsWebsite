import React from 'react';
import Logo1 from '../../assets/Logo1.png';
import Logo2 from '../../assets/Logo2.png';
import { Link } from 'react-router-dom';

const OpenPoseModelDetails = () => {
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
        <h2 className="text-3xl font-bold mb-4">OpenPose AI Model</h2>
        <p className="text-lg mb-4">OpenPose is a real-time multi-person keypoint detection library for body, face, and hands developed by researchers at the Carnegie Mellon University and the University of Toronto. It is capable of detecting and tracking key points such as joints and body parts in images and videos.</p>
        <p className="text-lg mb-4">OpenPose utilizes deep learning techniques, particularly convolutional neural networks (CNNs), to estimate the keypoints of human bodies, faces, and hands accurately. It can detect multiple persons in complex poses and environments, making it suitable for various applications in computer vision and human-computer interaction.</p>
        <p className="text-lg mb-4">OpenPose has been used in diverse applications, including action recognition, gesture recognition, virtual reality, augmented reality, sports analysis, and healthcare. Its open-source nature and versatility make it a popular choice for researchers, developers, and enthusiasts in the field of computer vision.</p>
        <p className="text-lg mb-4">The OpenPose library is freely available as an open-source project, allowing users to access the source code, contribute to its development, and integrate it into their applications.</p>
        <p className="text-lg mb-4">Provider: CMU Perceptual Computing Lab</p>
      </div>

      {/* Example Code */}
      <div className="p-8 w-2/3"> {/* Set width to half and center align */}
        <h2 className="text-2xl font-bold mb-4">Example Code</h2>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
            {`# Example code for using OpenPose model
# Note: Implementation details may vary based on library used

import cv2
from openpose import pyopenpose as op

# Load OpenPose model
params = {
    "model_folder": "path/to/openpose/models/"
}
openpose = op.WrapperPython()
openpose.configure(params)
openpose.start()

# Process image or video
image = cv2.imread("path/to/image.jpg")
datum = op.Datum()
datum.cvInputData = image
openpose.emplaceAndPop([datum])

# Get keypoints
keypoints = datum.poseKeypoints
print(keypoints)
`}
          </code>
        </pre>
      </div>

      {/* Use Cases */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
        <ul className="list-disc list-inside">
          <li className="text-lg mb-2">Action Recognition</li>
          <li className="text-lg mb-2">Gesture Recognition</li>
          <li className="text-lg mb-2">Virtual Reality</li>
          <li className="text-lg mb-2">Augmented Reality</li>
          <li className="text-lg mb-2">Sports Analysis</li>
          <li className="text-lg mb-2">Healthcare</li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="p-8 flex justify-between">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700" onClick={() => window.history.back()}>Back</button>
        <a href="https://www.tensorflow.org/lite/examples/pose_estimation/overview" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none">Try It Out</button>
        </a>
      </div>
    </div>
  );
};

export default OpenPoseModelDetails;
