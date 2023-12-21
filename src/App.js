import React, { useState } from 'react';
import './style.css';
import Header from './Header';
import Content from './Content';

export default function App() {
  const [bgMode, setBgMode] = useState(false);

  return (
    <>
      <Header mode={bgMode} setState={setBgMode} />
      <Content mode={bgMode} />
    </>
  );
}
