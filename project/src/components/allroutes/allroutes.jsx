
import { Mainpage } from '../mainpage'
import { Navbar } from '../navbar/navbar'
import {Routes,Route} from 'react-router-dom'
import { About } from '../bottom/about'
import { SinginForm } from '../singinForm'

export  const Allroutes=()=>{


return <div>

<Routes>
<Route path={"/"} element={<Mainpage/>}></Route>
<Route path={'/aboutus'}   element={<About/>}></Route>
<Route path={'/singinform'} element={<SinginForm/>}></Route>


</Routes>


</div>


}