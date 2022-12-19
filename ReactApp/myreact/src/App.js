import logo from './ahmad.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click on The Link Below to redirect to LinkedIn
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/ahmadxd56/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Say Hello
        </a>
      </header>
    </div>
  );
}

export default App;
