import React from 'react'
import './App.css';

function App() {

  require('dotenv').config()  

  return (
    <div>
      <p>I am ${process.env.YOUR_NAME}, wilder in ${process.env.YOUR_CITY}, and I love ${process.env.YOUR_LANGUAGE}</p>
    </div>
  );
}

export default App;
