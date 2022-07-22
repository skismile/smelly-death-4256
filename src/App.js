import logo from './logo.svg';
import './App.css';
import { Mainpage } from './components/mainpage';
import {Allroutes} from './components/allroutes/allroutes'
import { Navbar } from './components/navbar/navbar';
import { Bottom } from './components/bottom';
import { useContext } from 'react';
import { Appcontext } from './context/appcontext';


function App() {
  // let val=useContext(Appcontext)
  // console.log('hello app',val)
  return (
    <div className="App">
      <Navbar/>

<Allroutes/>
   <Bottom/>
    </div>
  );
}

export default App;
