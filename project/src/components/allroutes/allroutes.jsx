
import { Mainpage } from '../mainpage'
import { Navbar } from '../navbar/navbar'
import {Routes,Route} from 'react-router-dom'
import { About } from '../bottom/about'
import { SinginForm } from '../singinForm'
import { SingupForm } from '../singupForm'
import {LoginSucess} from '../loginsuccess'
import { Hotels } from '../Products/hotels'
export  const Allroutes=()=>{


return <div>

<Routes>
<Route path={"/"} element={<Mainpage/>}></Route>
<Route path={'/aboutus'}   element={<About/>}></Route>
<Route path={'/singinform'} element={<SinginForm/>}></Route>
<Route path={'/singupform'} element={<SingupForm/>}></Route>
<Route path={'/loginsuccess'} element={<LoginSucess/>}></Route>
<Route path={'/Hotels'} element={<Hotels/>}></Route>


</Routes>


</div>


}