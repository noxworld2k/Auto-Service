import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ul>
            <li ><a href="#">Home Page</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Reservation</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <a href="#">Login or Reguster</a>
        </div>
      </header>
    </div>
  );
}

export default App;
