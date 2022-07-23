import {Box, Button,Flex,Spacer,Stack,Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Getapp } from './getApp'



export const Main2=()=>{
   
    const basicBoxStyles = {
        display: 'flex',
        // flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'left',
        textAlign: 'left',
        boxSize: '500px',
        w:'80%',
        color: 'white',
        textShadow: '0 0 20px black',
        fontWeight: 'bold',
        fontSize: '20px',
        px: 4,
        m:'auto',
        borderRadius:'20px',
        background:
          'url(https://a.travel-assets.com/travel-assets-manager/cmct-5255/POSa-HP-Hero-D-928x398.jpg) center/cover no-repeat',
      }  


return <div>
<Flex direction={'column'} rowGap={'70px'}>

<Box sx={basicBoxStyles}  brightness='40%'>
    <Box 
    // border={'5px solid yellow' } 
    width={{
        md:'60%',
        sm:'100%',
        lg:'40%'
        
    }} >

   <Text fontSize='30px'>
    Save instantly with Expedia Rewards
    </Text>
    <Text>You can enjoy access to perks like Member Prices, saving you 10% or more on select hotels. Terms may apply.
</Text>
      <Button filter='auto' brightness='100%' color={'white'} backgroundColor={'#3662D8'}>See Member Prices</Button>
    </Box  >
      </Box>

<Link to='/Hotels'>
<Box
//  border={'2px solid green'}
 boxSize={'200px'}
    // {
//     md:'200px',
//     sm:'100px',
//     lg:'400px',
//     xl:'800px',
//     xxl:'1200px'
//   }}  

  
  
  w={'80%'}
   margin={'auto'}
    background={'url(https://a.travel-assets.com/travel-assets-manager/gmvd-1482-bookearly-emea/667x320.jpg) center/cover no-repeat' }
    borderRadius={'10px'} 
    display={'flex'}
    flexDirection={'column'}
  
    textAlign={'left'}
    

    >
<Text mt={'140px'}  color={'white'} > Plan ahed and save</Text>
<Text color={'white'}>Book 60 days  in advance for 20% off select stays</Text>

</Box>
</Link>
        </Flex>


{/* //////////////// */}



<Getapp/>





</div>

}