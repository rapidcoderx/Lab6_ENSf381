import React from 'react';

function Home({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

function About({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

function Contact({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Home title="Home Page" description="Welcome to our website." />
      <About title="About Us" description="We are passionate about delivering quality experiences." />
      <Contact title="Contact Us" description="Feel free to reach out to us via email or phone." />
    </div>
  );
}

export default App;
