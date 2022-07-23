import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
// import { css } from "@emotion/core"
import { Box, Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button
} from "@chakra-ui/react"



import {ChevronDownIcon } from '@chakra-ui/icons'

import Language, { SinginNav } from './smallcompo'
import { useContext } from 'react'
import { Appcontext } from '../../context/appcontext'
import { LogedUser } from './logeduser'

export const Navbar=()=>{
let navigate=useNavigate()
let {Auth}=useContext(Appcontext)
    let innerDiv={
        // border:"1px solid black",
        width:"30%",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:'20px'

    }

// console.log(bord)
return <div>

<div style={ {
borderBottom:'1px solid gray',
display:'flex',
height:"100px",
justifyContent:'space-between',

}}>
<div style={innerDiv}>

<div > <Link to="/"><img src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2" alt="" /></Link> </div>
<Box>
<Menu>
  <MenuButton 
  _hover={{color:'blue'}}
 

    bgColor={'white'} as={Button} rightIcon={<ChevronDownIcon />}>
    More travel
  </MenuButton>
  <MenuList>
    <MenuItem>
    <span className="material-symbols-outlined">
apartment
</span>
    <Link to='/Hotels'>Stays</Link>
    </MenuItem>
    <MenuItem>
    <span className="material-symbols-outlined">
    flight
    </span> Flights
</MenuItem>
    <MenuItem><span className="material-symbols-outlined">
local_taxi
</span>Cars</MenuItem>
    <MenuItem><span className="material-symbols-outlined">
luggage
</span>Packages</MenuItem>
    <MenuItem><span className="material-symbols-outlined">
confirmation_number
</span>Holiday activities</MenuItem>
    <MenuItem>Deals</MenuItem>
    <MenuItem>Group & meeting</MenuItem>
    <MenuItem>Mobile</MenuItem>
  </MenuList>
</Menu>

</Box>
</div>
<div style={innerDiv} >
<Box display={'flex'} fontWeight={"var(--chakra-fontWeights-bold)"}  columnGap={'20px'}>
<Box display={'flex'}  
_hover={{color:'blue'}}
><Language/></Box>
<Box display={'flex'} alignItems={'center'} fontWeight={"var(--chakra-fontWeights-bold)"}  

_hover={{color:'blue'}}
 > Support </Box>
<Box display={'flex'} alignItems={'center'} fontWeight={"var(--chakra-fontWeights-bold)"} 

_hover={{color:'blue'}}
>Trips</Box>
<Box
 _hover={{color:'blue'} }
  fontWeight={"var(--chakra-fontWeights-bold)"} >{Auth.login?<LogedUser/>:<SinginNav />}</Box>

</Box>


</div>


</div>











</div>


}