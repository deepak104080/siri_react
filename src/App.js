import React from 'react';
import './App.css';

function App() {

  const num1 = 50;
  const num2 = 100;
  const sum = num1 + num2;

  return (
      <div className="App">
        <h1>Newton School</h1>
        <h4>No of students in Siri - </h4>
        <h4>{sum}</h4>
        <h4>{num1 + num2}</h4>
      </div>
  );
}

export default App;
