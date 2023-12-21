import React from 'react';

function Header({ mode, setState }) {
  return (
    <header>
      <div className="wrapper">
        <button type="button" onClick={() => setState((bool) => !bool)}>
          {mode ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </header>
  );
}

export default Header;
