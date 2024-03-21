import React from 'react';
import Logo1 from '../../assets/Logo1.png';
import Logo2 from '../../assets/Logo2.png';
import { Link } from 'react-router-dom';

const BertModelDetails = () => {
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
        
        <h2 className="text-3xl font-bold mb-4">BERT AI Model</h2>
        
        <p className="text-lg mb-4">BERT (Bidirectional Encoder Representations from Transformers) is a transformer-based machine learning model for natural language processing (NLP). It was introduced by researchers at Google AI Language in 2018.</p>
        
        <p className="text-lg mb-4">Unlike previous models that process language input sequentially (left-to-right or right-to-left), BERT is designed to understand context in both directions simultaneously. This bidirectional approach enables BERT to capture deeper language semantics and relationships, leading to significant improvements in various NLP tasks.</p>
        <p className="text-lg mb-4">BERT achieves state-of-the-art performance in tasks like sentiment analysis, question answering, named entity recognition, text classification, and more. Its pre-trained representations can be fine-tuned with task-specific data to adapt to specific applications.</p>
        <p className="text-lg mb-4">The success of BERT has led to its widespread adoption in industry and academia, making it one of the most influential and widely used NLP models to date.</p>
      </div>


      {/* Example Code */}
      <div className="p-8 w-2/3">
        <h2 className="text-2xl font-bold mb-4">Example Code</h2>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
            {`from transformers import BertTokenizer, BertForMaskedLM

tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertForMaskedLM.from_pretrained('bert-base-uncased')

text = "Who [MASK] the first president of the United States?"
tokenized_text = tokenizer.tokenize(text)
masked_index = tokenized_text.index('[MASK]')
indexed_tokens = tokenizer.convert_tokens_to_ids(tokenized_text)
segments_ids = [0] * len(tokenized_text)

tokens_tensor = torch.tensor([indexed_tokens])
segments_tensors = torch.tensor([segments_ids])

model.eval()
with torch.no_grad():
    outputs = model(tokens_tensor, segments_tensors)
    predictions = outputs[0][0, masked_index].topk(5)

print('Predicted words:')
for i, index_t in enumerate(predictions.indices):
    predicted_token = tokenizer.convert_ids_to_tokens([index_t.item()])[0]
    print(predicted_token)
`}
          </code>
        </pre>
      </div>

      {/* Use Cases */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
        <ul className="list-disc list-inside">
          <li className="text-lg mb-2">Sentiment Analysis</li>
          <li className="text-lg mb-2">Question Answering</li>
          <li className="text-lg mb-2">Text Classification</li>
          <li className="text-lg mb-2">Named Entity Recognition</li>
          <li className="text-lg mb-2">Text Summarization</li>
          <li className="text-lg mb-2">Language Understanding</li>
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

export default BertModelDetails;
