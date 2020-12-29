import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Candidates from './screens/Candidates';

export default function App() {
  return (
    <Router>
      <Candidates />
    </Router>
  );
}
