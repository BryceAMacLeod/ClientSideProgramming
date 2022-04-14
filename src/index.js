import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import { Game } from './Game';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="sampleGame" element={<Game api="https://threeinarowpuzzle.herokuapp.com/sample" />} />
        <Route path="randomGame" element={<Game api="https://threeinarowpuzzle.herokuapp.com/random" />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

