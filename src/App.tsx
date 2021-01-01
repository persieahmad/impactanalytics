import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { getCandidates, TGetCandidates } from './api';
import Candidates from './screens/Candidates';

export default function App() {
  const [activeData, setActiveData] = React.useState<TGetCandidates[]>([]);
  const [localData, setLocalData] = React.useState<TGetCandidates[]>([]);
  const [query, setQuery] = React.useState('');
  React.useEffect(() => {
    getCandidates()
      .then((res) => {
        setActiveData(res);
        setLocalData(res);
      })
      .catch((err) => alert('Error occured while fetching api: ' + err));
  }, []);
  return (
    <Router>
      <Candidates {...{ activeData, setActiveData, localData, setLocalData, query, setQuery }} />
    </Router>
  );
}
