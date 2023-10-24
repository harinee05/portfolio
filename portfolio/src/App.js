import './App.css';
import Navbar from './NavBar';
import { useState } from "react";

function App() {
  const [showAbout, setShowAbout] = useState(false);

  const handleAboutClick = () => {
    // Toggle the value of showAbout
    setShowAbout(!showAbout);
  };

  return (
    <div className="App">
      <Navbar /> 
      <div className='App-body'>
        
        <button onClick={handleAboutClick}>
          {showAbout ? "Hide About" : "Show About"}
        </button>
        {showAbout && (
          <div className="about-section">
            <h2>About Me</h2>
            <p>This is information about me.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
