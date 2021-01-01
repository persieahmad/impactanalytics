import React from 'react';
import CardMUI from '../ui/CardMUI';
import TextField from '@material-ui/core/TextField';

export default function Candidates({
  activeData,
  setActiveData,
  localData,
  setLocalData,
  query,
  setQuery,
}: any) {
  function onSearch() {
    console.log('onSearch');
    const temp = [
      ...localData.filter(
        ({ name }: any) =>
          name?.toLowerCase().includes(query?.toLowerCase()) || name?.startsWith(query),
      ),
    ];
    setActiveData(temp);
  }

  React.useEffect(() => {
    query.trim().length > 0 ? onSearch() : setActiveData(localData);
  }, [query]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          flexDirection: 'column',
          marginTop: '2%',
        }}>
        <TextField
          id="outlined-basic"
          label="Seach Name"
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {activeData?.map((x: any, index: any) => {
          return (
            <div key={index}>
              <CardMUI {...{ data: x }} />
            </div>
          );
        })}
      </div>
    </>
  );
}
