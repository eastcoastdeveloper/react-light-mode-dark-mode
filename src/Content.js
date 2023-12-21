import React from 'react';

function Content({ mode }) {
  console.log(mode);
  const darkMode = {
    backgroundColor: 'rgba(0,0,0,.9)',
    color: 'white',
  };

  const lightMode = {
    backgroundColor: 'rgba(0,0,0,.1)',
    color: 'black',
  };

  return (
    <main style={mode ? lightMode : darkMode}>
      <p>{mode ? 'Light' : 'Dark'} Mode</p>
    </main>
  );
}

export default Content;
