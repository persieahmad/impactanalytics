import React from 'react';
import { getCandidates, TGetCandidates } from '../api';
import CardView from '../ui/CardView';

export default function Candidates() {
  const [data, setData] = React.useState<TGetCandidates[]>([]);
  const [query, setQuery] = React.useState('');
  const [localData, setLocalData] = React.useState<TGetCandidates[]>([]);
  React.useEffect(() => {
    getCandidates()
      .then((res) => setData(res))
      .catch((err) => alert('Error occured while fetching api: ' + err));
  }, []);
  return (
    <>
      <CardView {...{ data, query, setQuery, setData, localData, setLocalData }} />
    </>
  );
}
