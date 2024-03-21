import React from 'react';
import Logo1 from '../../assets/Logo1.png';
import Logo2 from '../../assets/Logo2.png';
import { Link } from 'react-router-dom';

const ResNetModelDetails = () => {
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
        <h2 className="text-3xl font-bold mb-4">ResNet AI Model</h2>
        <p className="text-lg mb-4">ResNet (Residual Networks) is a type of convolutional neural network (CNN) architecture that addresses the problem of vanishing gradients during training. It was introduced by researchers at Microsoft Research.</p>
        <p className="text-lg mb-4">ResNet consists of residual blocks that allow for the training of very deep neural networks. These residual connections enable gradients to flow more easily through the network, mitigating the vanishing gradient problem.</p>
        <p className="text-lg mb-4">ResNet architectures have significantly deeper layers compared to previous CNN architectures, making them more effective in image recognition tasks such as object detection, image classification, and image segmentation.</p>
        <p className="text-lg mb-4">Due to their effectiveness and performance, ResNet models have become a staple in the field of computer vision and are widely used in various applications, including image recognition, medical imaging, autonomous vehicles, and more.</p>
      </div>

      {/* Example Code */}
<div className="p-8 w-2/3"> {/* Set width to half and center align */}
  <h2 className="text-2xl font-bold mb-4">Example Code</h2>
  <pre className="bg-gray-800 p-4 rounded-md text-white">
    <code>
      {`import torch
import torchvision.models as models

resnet = models.resnet50(pretrained=True)
resnet.eval()

# Input image preprocessing goes here

output = resnet(input_image_tensor)
predicted_class = torch.argmax(output)
print("Predicted class:", predicted_class)
`}
    </code>
  </pre>
</div>


      {/* Use Cases */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
        <ul className="list-disc list-inside">
          <li className="text-lg mb-2">Image Classification</li>
          <li className="text-lg mb-2">Object Detection</li>
          <li className="text-lg mb-2">Image Segmentation</li>
          <li className="text-lg mb-2">Feature Extraction</li>
          <li className="text-lg mb-2">Fine-tuning for Custom Tasks</li>
        </ul>
      </div>

      {/* Action Buttons */}
<div className="p-8 flex justify-between">
  <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700" onClick={() => window.history.back()}>Back</button>
  <a href="https://tensorspace.org/html/playground/resnet50.html" target="_blank" rel="noopener noreferrer">
    <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none">Try It Out</button>
  </a>
</div>

    </div>
  );
};

export default ResNetModelDetails;
