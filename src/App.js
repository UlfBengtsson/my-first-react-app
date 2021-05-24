import logo from './logo.svg';
import './App.css';
import MyTable from './componets/MyTable'
import Experiment from './componets/Experiment'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="main-content">
        <h1>Hello world!</h1>


        <MyTable />

        <Experiment />

      </div>

      <footer>
        <span>&copy;Lexicon</span>
      </footer>
    </div>
  );
}

export default App;
