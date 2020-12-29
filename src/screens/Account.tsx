import React from 'react';

export const Account = ({ match }: any) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);
