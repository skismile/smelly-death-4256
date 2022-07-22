import { createContext, useState } from "react";

export let Appcontext=createContext()

let init={

    login:false,
    token:"",
    firstname:"",
    email:""


}


export const AppcontextProvider=({children})=>{
const [Auth,setAuth]=useState(init)

return <div>


<Appcontext.Provider  value={{Auth,setAuth}}>

{children}

</Appcontext.Provider>



</div>



}