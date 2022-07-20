import logo from './logo.svg';
import './App.css';
import { Mainpage } from './components/mainpage';
import {Allroutes} from './components/allroutes/allroutes'
import { Navbar } from './components/navbar/navbar';
import { Bottom } from './components/bottom';

function App() {
  return (
    <div className="App">
      <Navbar/>

<Allroutes/>
   <Bottom/>
    </div>
  );
}

export default App;
