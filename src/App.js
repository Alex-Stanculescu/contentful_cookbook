import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import bootstrap from 'bootstrap'


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar />
       <Content />
      </header>
    </div>
  );
}

export default App;
