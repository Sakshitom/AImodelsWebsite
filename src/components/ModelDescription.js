import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ModelDescriptionPage = () => {
  const { modelName } = useParams();
  const [model, setModel] = useState(null);

  useEffect(() => {
    fetch(`https://ai-models.onrender.com/users`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setModel(data[0]); // Assuming there's only one model with the given name
        } else {
          console.log('Model not found');
        }
      })
      .catch(error => console.error('Error fetching model:', error));
  }, [modelName]);

  if (!model) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{model.name}</h2>
      <p>{model.description}</p>
      <p>Provider: {model.provider}</p>
      <p>Popularity: {model.popularity}</p>
      <p>Category: {model.category}</p>
      <p>Reason: {model.reason}</p>
    </div>
  );
};

export default ModelDescriptionPage;
