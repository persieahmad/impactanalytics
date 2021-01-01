import React from 'react';
import CardMUI from './CardMUI';
import TextField from '@material-ui/core/TextField';

export default function CardView({ activeData, setActiveData, localData, setLocalData }: any) {
  const [query, setQuery] = React.useState('');
  function onSearch() {
    const temp = [
      ...localData.filter(
        ({ name }: any) =>
          name?.toLowerCase().includes(query.toLowerCase()) || name?.startsWith(query),
      ),
    ];
    temp.length > 0 && setActiveData(temp);
  }

  React.useEffect(() => {
    query.trim().length > 0 && onSearch();
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
        <div>
          {activeData?.map((x: any, index: any) => {
            return (
              <div key={index}>
                <CardMUI {...{ data: x }} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
