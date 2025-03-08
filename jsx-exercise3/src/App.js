import React from 'react'
import EngineeringTopics from './EngineeringTopics';

const currentYear = new Date().getFullYear();
const isLoggedIn = true; 

function App() {
  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>{currentYear}</p>
      {isLoggedIn ? <p>Welcome Back!</p> : <p>Please log in</p>}
      <EngineeringTopics />
    </div>
  );
}

export default App;
