import React from 'react';
import { Preview } from './Preview'
import './App.css';

if (localStorage) localStorage.clear()

function App() {
  return (
    <div className="App">
      <Preview/>
    </div>
  );
}

export default App;
