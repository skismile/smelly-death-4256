
  import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Text,
    Button,
    Box,
  } from '@chakra-ui/react'
  import {ChevronDownIcon} from '@chakra-ui/icons'
  import { useDisclosure } from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import { Appcontext } from '../../context/appcontext'
export const LogedUser=()=> {

function logout(){
   setAuth({

    login:false,
    token:"",
    firstname:"",
    email:""


})
}


    const navigate=useNavigate()
    const {Auth,setAuth}=useContext(Appcontext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
  <Menu>
  <MenuButton as={Button} _hover={{backgroundColor:"white",}} bg={'none'} rightIcon={<ChevronDownIcon />}>
  {Auth.firstname}
  </MenuButton>
  <MenuList>
   <Box w={'400px'} borderBottom={'2px solid gray'} h={'100px'}>
    <Text fontWeight={'bold'} fontSize={'30px'}> Hi,  {Auth.firstname}</Text>
    <Text>{Auth.email}</Text>
   </Box>
    <MenuItem>Account</MenuItem>
    <MenuItem>List of favourites</MenuItem>
    <MenuItem>Feedback</MenuItem>
    <Box display={'flex'} alignItems={'center'} w={'400px'} borderTop={'2px solid gray'} h={'100px'}>
    <MenuItem  onClick={logout} >Sing out</MenuItem>
 
 </Box>
  </MenuList>
  
</Menu>
      </>
    )
  }