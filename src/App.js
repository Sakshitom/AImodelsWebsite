import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Modelcard from './components/Modelcard';
import BertModel from './components/ModelsDetail/BertModel';
import YoloModel from './components/ModelsDetail/YoloModel';
import Gpt3ModelDetails from './components/ModelsDetail/GPT3Model';
import ResNetModel from './components/ModelsDetail/ResNetModel';
import WaveNetModel from './components/ModelsDetail/WaveNetModel';
import FastTextModel from './components/ModelsDetail/FastTextModel';
import OpenPoseModel from './components/ModelsDetail/OpenPoseModel';
import CycleGANModel from './components/ModelsDetail/CycleGANModel';
import GPT4Model from './components/ModelsDetail/GPT-4Model';
import EfficientDetModel from './components/ModelsDetail/EfficientDetModel';
import CLIPModel from './components/ModelsDetail/CLIPMode';
import TTS2Model from './components/ModelsDetail/TTSModel';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path='/models' element={<Modelcard/>} />
        <Route path='/models/bert' element={<BertModel/>} />
        <Route path='/models/yolo' element={<YoloModel/>} />
        <Route path='/models/gpt-3' element={<Gpt3ModelDetails/>} />
        <Route path='/models/resnet' element={<ResNetModel/>} />
        <Route path='/models/wavenet' element={<WaveNetModel/>} />
        <Route path='/models/fasttext' element={<FastTextModel/>} />
        <Route path='/models/openpose' element={<OpenPoseModel/>} />
        <Route path='/models/cyclegan' element={<CycleGANModel/>} />
        <Route path='/models/gpt-4' element={<GPT4Model/>} />
        <Route path='/models/efficientdet' element={<EfficientDetModel/>} />
        <Route path='/models/clip' element={<CLIPModel/>} />
        <Route path='/models/tts-2' element={<TTS2Model/>} />
    </Routes>
  );
};

export default App;