import { Flex ,Box,Text, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Input,
    



} from "@chakra-ui/react"
import {ChevronDownIcon} from '@chakra-ui/icons'
import { useState } from "react"

export let Getapp=()=>{

let [get,setGet]=useState(false)
let [countrycode,setCountryCode]=useState('Country code')




    return <div>

<Flex 
 border={'2px solid green'}
 boxSize={'300px'}
 

 w={'80%'}
  margin={'auto'}
  mt={'100px'}
   borderRadius={'10px'} 
   display={'flex'}
  >
<Box 

background={'url(https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_ROME_iStock_72dpi.jpg) center/cover no-repeat'}
w={'30%'} border={'1px solid red'}></Box>
<Box w={'50%'} border={'1px solid red'}>
    <Text fontWeight={'bold'} fontSize={'25px'} >Our app takes you further</Text>
    <Text fontSize={'10px'} >When you book on the app you can save up to 20% on select hotels while earning double the points with every booking. With these app deals you'll save even more on trips, and that means you can take more trips, and manage it all on the go.</Text>
    <br /><br />
    <Text fontWeight={'bold'}>Text yourself a download link for easy access</Text>
    <Flex gap={'25px'}>

    <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    {countrycode}
  </MenuButton>
  <MenuList onClick={(e)=>setCountryCode(e.target.value)} >

    <MenuItem value={"India +91"} >India +91</MenuItem>
    <MenuItem  value={"Italy +39"}>Italy +39</MenuItem>
    <MenuItem value={"Japan +81"}>Japan +81</MenuItem>
    <MenuItem value={"France +33"}>France +33</MenuItem>
    <MenuItem value={"USA +1"}>United State of America +1</MenuItem>
  </MenuList>
</Menu>
    
    <Input placeholder="Phone number" w={'30%'}/>
    <Button disabled={get} onClick={()=>setGet(!get)} bg={'#3662D8'} color={'white'} >Get the app</Button>

    </Flex  >
    {get?<Text fontSize={'10px' } color={'green'}  >We’ve sent you a text message with a link to download the app.</Text>:null}
    <Text fontSize={'10px'}  >By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</Text>

     </Box>
<Box display={'flex'} flexDirection={'column'} justifyContent={'center'}
alignItems={'center'}

w={'20%'} border={'1px solid red'}>
    
    <img width={'70%'} src="https://a.travel-assets.com/mad-service/qr-code/footer_qr/27_QR_FOOTER.png" alt="" />
    <p>Scan the QR code</p>
     </Box>


</Flex>


    </div>



}