import logo from './logo.svg';
import './App.css';
import Location from './Location';
import Table from './Table';
import Landing from './Landing';

function App(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       
        <Landing/>
		    <Table/>
       
      </header>
    </div>
  );
}

export default App;
