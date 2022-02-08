import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Market from './homepage/Market/Market';
import Resources from './homepage/Resources/ResourceCenter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Market />}></Route>
        <Route path='/resource' element={<Resources />}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
