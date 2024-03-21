import React from 'react';
import Logo1 from '../../assets/Logo1.png';
import Logo2 from '../../assets/Logo2.png';
import { Link } from "react-router-dom";

const CLIPModelDetails = () => {
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
        <h2 className="text-3xl font-bold mb-4">CLIP AI Model</h2>
        <p className="text-lg mb-4">CLIP (Contrastive Language-Image Pre-training) is a state-of-the-art vision-language model developed by OpenAI. It is trained to understand the relationship between images and their associated textual descriptions, enabling it to perform various vision and language tasks without task-specific training.</p>
        <p className="text-lg mb-4">CLIP is trained using a contrastive learning framework, where it learns to associate images and text embeddings that represent semantically similar concepts. This allows CLIP to generalize to unseen tasks and domains, making it a versatile model for a wide range of applications.</p>
        <p className="text-lg mb-4">CLIP has demonstrated impressive performance on various benchmarks, including image classification, object detection, image generation, and natural language understanding tasks. It can understand nuanced concepts and relationships between images and text, making it useful for tasks such as zero-shot learning and multimodal reasoning.</p>
        <p className="text-lg mb-4">The CLIP model is available for use through OpenAI's API, allowing developers and researchers to leverage its capabilities for vision and language tasks. It continues to drive advancements in multimodal AI and has the potential to revolutionize how machines understand and interact with visual and textual information.</p>
        <p className="text-lg mb-4">Provider: OpenAI</p>
      </div>

      {/* Example Code */}
      <div className="p-8 w-2/3"> {/* Set width to two-thirds and center align */}
        <h2 className="text-2xl font-bold mb-4">Example Code</h2>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
            {`# Example code for using CLIP model
# Note: Implementation details may vary based on library used

import torch
import clip
from PIL import Image

# Load CLIP model
device = "cuda" if torch.cuda.is_available() else "cpu"
model, preprocess = clip.load("ViT-B/32", device=device)

# Load and preprocess image
image = Image.open("path/to/image.jpg")
image_input = preprocess(image).unsqueeze(0).to(device)

# Encode image
with torch.no_grad():
    image_features = model.encode_image(image_input)

# Define text prompts
text_prompts = ["a cat", "a dog", "a banana"]

# Encode text prompts
text_features = clip.tokenize(text_prompts).to(device)

# Calculate similarities between image and text
with torch.no_grad():
    image_features /= image_features.norm(dim=-1, keepdim=True)
    text_features /= text_features.norm(dim=-1, keepdim=True)
    similarities = (100.0 * image_features @ text_features.T).softmax(dim=-1)

# Print similarity scores
for i, prompt in enumerate(text_prompts):
    print("Image is similar to '{}' with {:.2f}% confidence".format(prompt, similarities[0, i].item()))
`}
          </code>
        </pre>
      </div>
        {/* Use Cases */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
        <ul className="list-disc list-inside">
          <li className="text-lg mb-2">Zero-shot Learning</li>
          <li className="text-lg mb-2">Multimodal Reasoning</li>
          <li className="text-lg mb-2">Image-Text Retrieval</li>
          <li className="text-lg mb-2">Semantic Image Search</li>
        </ul>
      </div>
      {/* Action Buttons */}
      <div className="p-8 flex justify-between">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700" onClick={() => window.history.back()}>Back</button>
        <a href="https://openai.com/clip" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none">Learn More</button>
        </a>
      </div>
    </div>
  );
};

export default CLIPModelDetails;
