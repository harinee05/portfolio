import './App.css';
import Navbar from './NavBar';
import About from './About';


function App() {

  return (
    <div className="App">
      <Navbar /> 
      <div className='App-body'>
        <About/>
      </div>
    </div>
  );
}

export default App;
