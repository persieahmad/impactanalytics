import React from 'react';
import CardMUI from './CardMUI';
import TextField from '@material-ui/core/TextField';

export default function CardView({ data, query, setQuery, setData, localData, setLocalData }: any) {
  function onSearch() {
    const temp = [
      ...data.filter(
        ({ name }: any) =>
          name?.toLowerCase().includes(query.toLowerCase()) || name?.startsWith(query),
      ),
    ];
    temp.length > 0 && setData(temp);
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
          {data.map((x: any, index: any) => {
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
