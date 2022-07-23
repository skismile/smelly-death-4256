import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
  export default function Language() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button backgroundColor={'white'}
         _hover={{background:'none',color:'blue'}} 
         onClick={onOpen}><span className="material-symbols-outlined">
language
</span>English</Button>
  
        <Modal  isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent width={'90%'} height={'600px'}>
            <ModalHeader>Display settings</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
         
         <select style={{width:'100%',height:'50px'}} name="" id="">

<option  value="">Region</option>
<option  value="india">India</option>


         </select>
         <select style={{width:'100%',height:'50px'}} name="" id="">

<option  value="">Language</option>
<option  value="English">English</option>


         </select>

         <select style={{width:'100%',height:'50px'}} name="" id="">

<option  value="">Currency</option>
<option  value="">₹INR</option>


         </select>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='red' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button  colorScheme={'blue'}  onClick={onClose}>SAVE</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }



  /////////////singup

  function goToSingin(navigate,onClose){

    navigate('/singinform')
    onClose()
  }
  function goToSingup(navigate,onClose){

    navigate('/singupform')
    onClose()
  }

  export const SinginNav=()=> {
    const navigate=useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button backgroundColor={'white'}
       _hover={{background:'none',color:'blue'}} 
         onClick={onOpen}>Sing in</Button>
  
        <Modal  isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent width={'30%'} height={'300px'}>
            <ModalHeader>Members can access discounts, points and special features</ModalHeader>
            <ModalCloseButton />
            <ModalBody>

        <Stack>
     <Button onClick={()=>goToSingin(navigate,onClose) }  bg={'#3662D8'} color={"white"}>Sing in</Button>
     <Button onClick={()=>goToSingup(navigate,onClose)} color={'#3662D8'}>Create a free account</Button>
     
            </Stack> 
        




     
            </ModalBody>
  
            {/* <ModalFooter>
              <Button colorScheme='red' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button  colorScheme={'blue'}  onClick={onClose}>SAVE</Button>
            </ModalFooter> */}
          </ModalContent>
        </Modal>
      </>
    )
  }