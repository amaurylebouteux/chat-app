import React from 'react';
import './App.css';
import Contact from './components/Contact';

const Susan = {
  image: "https://randomuser.me/api/portraits/women/34.jpg",
  name: "Susan Neal",
  online: true
}

const Lonnie = {
  image: "https://randomuser.me/api/portraits/men/52.jpg",
  name: "Lonnie Mitchell",  
  online: false
}

const Vivan = {
  image: "https://randomuser.me/api/portraits/women/82.jpg",
  name: "Vivan Hunter",  
  online: true
}

function App() {
  return (
    <div className="App">
      <Contact {...Susan}/>
      <Contact {...Lonnie}/>
      <Contact {...Vivan}/>
    </div>
  );
}

export default App;
