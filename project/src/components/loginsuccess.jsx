import { Link } from "react-router-dom"



export const LoginSucess=()=>{


return <div>

<h1 style={{fontSize:'50px'}}>Welcome</h1>
<p>With your new Expedia account,the world within you reach</p>

<Link to={'/'}> <p style={{color:'blue'}}>Continue</p> </Link>

</div>


}