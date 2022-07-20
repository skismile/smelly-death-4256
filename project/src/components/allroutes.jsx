import {Routes,Route} from 'react-router-dom'
import { Mainpage } from './mainpage'
import { Navbar } from './navbar'

export  const Allroutes=()=>{


return <div>
<Routes>

<Route path={'/'} element={<Mainpage/>}></Route >
<Route path={'/nav'} element={<Navbar/>}></Route >


</Routes>


</div>


}