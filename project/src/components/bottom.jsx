import {Box} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
export const Bottom=()=>{

return <div>

<Box  height={'500px'} width={'85%'} m={'auto'}  mt={50}>

<Box display={"flex"} borderBottom={'1px solid gray'} height={'60%'}>

<Box width={"20%"}><img width={'70%'} src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg" alt="" /></Box>
<Box  textAlign={'left'}  width={"20%"} >
 <p style={{fontWeight:'bold',fontSize:'18px',marginLeft:"20px"}}>Company</p> 
<Link  to='/aboutus'><p style={{color:'blue',marginLeft:"20px"}}>About us</p>  </Link>
<Link to='#'><p style={{color:'blue',marginLeft:"20px"}}>Jobs</p></Link>
<Link to="#"><p style={{color:'blue',marginLeft:"20px"}}>List Your Property</p></Link>
<Link to="#"><p style={{color:'blue',marginLeft:"20px"}}>PartnerShip</p></Link>
</Box>
<Box width={"20%"}textAlign={'left'}>
    <p style={{fontWeight:'bold',fontSize:'18px',marginLeft:"20px"}}>Explore</p>
    <Link  to='#'><p style={{color:'blue',marginLeft:"20px"}}>India travel guide
</p>  </Link>
<Link to='#'><p style={{color:'blue',marginLeft:"20px"}}>Hotels in India
</p></Link>
<Link to="#"><p style={{color:'blue',marginLeft:"20px"}}>Holiday rentals in India
</p></Link>
<Link to="#"><p style={{color:'blue',marginLeft:"20px"}}>Holiday packages in India</p></Link>
<Link to="#"><p style={{color:'blue',marginLeft:"20px"}}>Domestic flights
</p></Link>
<Link to="#"><p style={{color:'blue',marginLeft:"20px"}}>Car hire in India
</p></Link>
<Link to="#"><p style={{color:'blue',marginLeft:"20px"}}>All accommodation types
</p></Link>
<Link to="#"><p style={{color:'blue',marginLeft:"20px"}}>Travel blog
</p></Link>
    
    </Box>

    <Box width={"20%"}textAlign={'left'}>
    <p style={{fontWeight:'bold',fontSize:'18px',marginLeft:"20px"}}>Policies
</p>
    <Link  to='#'><p style={{color:'blue',marginLeft:"20px"}}>Privacy Statement

</p>  </Link>
<Link to='#'><p style={{color:'blue',marginLeft:"20px"}}>Terms of use

</p></Link>
<Link to="#"><p style={{color:'blue',marginLeft:"20px"}}>Vrbo terms and conditions

</p></Link>

    
    </Box>

    <Box width={"20%"}textAlign={'left'}>
    <p style={{fontWeight:'bold',fontSize:'18px',marginLeft:"20px"}}>Help</p>
    <Link  to='#'><p style={{color:'blue',marginLeft:"20px"}}>Support
</p>  </Link>
<Link to='#'><p style={{color:'blue',marginLeft:"20px"}}>Change or cancel your booking

</p></Link>
<Link to="#"><p style={{color:'blue',marginLeft:"20px"}}>Refund process and timelines

</p></Link>
<Link to="#"><p style={{color:'blue',marginLeft:"20px"}}>Book a flight using an airline credit
</p></Link>
<Link to="#"><p style={{color:'blue',marginLeft:"20px"}}>International travel documents

</p></Link>

    
    </Box>


</Box>






{/* ///////////////// */}
<Box display={'flex'} flexDirection={'column'}  height={'40%'}  justifyContent={'center'} alignItems={'center'}>

<img width={'20%'} src="https://images.trvl-media.com/media/content/expind/images/sg/secure.png" alt="" />
<p >© 2022 Expedia, Inc., an Expedia Group company / Expedia Asia Holdings Mauritius / BEX Travel Asia Pte. Ltd. All rights reserved. Expedia and the Airplane Logo are trademarks or registered trademarks of Expedia, Inc.</p>
</Box>

</Box>

</div>

}