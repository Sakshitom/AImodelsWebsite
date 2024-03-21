import React from 'react';
import Logo1 from '../../assets/Logo1.png';
import Logo2 from '../../assets/Logo2.png';
import { Link } from "react-router-dom";

const YoloModelDetails = () => {
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
        <h2 className="text-3xl font-bold mb-4">YOLO AI Model</h2>
        <p className="text-lg mb-4">YOLO (You Only Look Once) is a real-time object detection system. It's known for its speed and accuracy in detecting objects in images or video streams. YOLO has various versions, each with improvements in speed and accuracy.</p>
        <p className="text-lg mb-4">YOLO operates by dividing the input image into a grid and predicting bounding boxes and class probabilities for each grid cell. This approach allows YOLO to process images faster than traditional object detection systems without sacrificing accuracy.</p>
        <p className="text-lg mb-4">YOLO is widely used in applications like autonomous vehicles, surveillance systems, image recognition, and more.</p>
      </div>

      {/* Example Code */}
      <div className="p-8 w-2/3">
        <h2 className="text-2xl font-bold mb-4">Example Code</h2>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
            {`import cv2
import numpy as np
net = cv2.dnn.readNet("yolov3.weights", "yolov3.cfg")
classes = []
with open("coco.names", "r") as f:
  classes = [line.strip() for line in f.readlines()]
layer_names = net.getLayerNames()
output_layers = [layer_names[i[0] - 1] for i in net.getUnconnectedOutLayers()]
colors = np.random.uniform(0, 255, size=(len(classes), 3))`}
          </code>
        </pre>
      </div>

      {/* Use Cases */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
        <ul className="list-disc list-inside">
          <li className="text-lg mb-2">Object Detection</li>
          <li className="text-lg mb-2">Image Recognition</li>
          <li className="text-lg mb-2">Video Surveillance</li>
          <li className="text-lg mb-2">Autonomous Vehicles</li>
          <li className="text-lg mb-2">Robotics</li>
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

export default YoloModelDetails;
