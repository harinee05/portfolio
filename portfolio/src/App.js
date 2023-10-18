import logo from './logo.svg';
import './App.css';
import Navbar from './NavBar';
function App() {
  return (
    <div className="App">
      <Navbar /> 
      <body className='App-body'>
        <img src={logo} className="App-logo" alt="logo" />
        
      </body>
    </div>
  );
}



export default App;
