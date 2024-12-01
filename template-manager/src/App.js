import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TemplateList from './components/TemplateList ';
import TemplateEditor from './components/TemplateEditor';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TemplateList/>} />
        <Route path="/editor/:id?" element={<TemplateEditor/>} />
      </Routes>
    </Router>
  );
}

export default App;
