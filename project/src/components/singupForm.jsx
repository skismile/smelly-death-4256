import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Stack,
    RadioGroup,
    HStack,
    Radio,
    useDisclosure,
    Checkbox,
    Button,
    Flex,
  } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Appcontext } from '../context/appcontext'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


export const SingupForm=()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname,setFirstname] = useState('')
    const [surname, setsurname] = useState('')
    const [checkbox, setCheckBox] = useState(false)
   const[singupData,setSingupData]=useState(null)
   const Navigate=useNavigate()
    // const { isOpen, onOpen, onClose } = useDisclosure()
    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const handleFirstnameChange = (e) => setFirstname(e.target.value)
    const handleSurnamelChange = (e) => setsurname(e.target.value)
  
    const isError = email === '' || password === ''
const {Auth,setAuth}=useContext(Appcontext)
const singupFormSubmit=()=>{


// console.log("email:",email)
// console.log("pass:",password)
// console.log("pass:",firstname)
// console.log("pass:",surname)
setSingupData({email:email,password:password,firstname:firstname,surname:surname})

setEmail('')
setPassword('')
setFirstname('')
setsurname('')
}



useEffect(()=>{

    if(singupData!=null)
{
    console.log(singupData)


    axios(`https://skismile-fake-server-app.herokuapp.com/singup_user_data`,{
        method:'POST',
        data:singupData
    }).then((res)=>{
        console.log(res.data)
    })
alert('Account created Successfully')
    Navigate('/singinform')
}


},[singupData])




return <div>

<Box width={'30%'} margin={'auto'}>

<FormControl isInvalid={isError}>
<FormLabel fontSize={'30px'}>Sing up</FormLabel>
      <Stack gap={'30px'}>
  <Input value={email}
        onChange={handleEmailChange}
        type='email' 
        placeholder='Email address' 
        />
         <Input 
         value={firstname}
        onChange={handleFirstnameChange}
        type='text' 
        placeholder='First name' 
        />
         <Input
          value={surname}
        onChange={handleSurnamelChange}
        type='text' 
        placeholder='Surname' 
        />
  <Input  type='text'
  value={password}
  onChange={handlePasswordChange}
   placeholder='Password'
    />
  </Stack>
    
      {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>All details filled  is required.</FormErrorMessage>
      )}


<FormLabel as='legend'></FormLabel>
    <HStack spacing='24px'>
      {/* <Radio onClick={()=>checkBoxFun()} value='This is a public or shared devic'>This is a public or shared devic</Radio> */}
      <Checkbox onChange={()=>setCheckBox(true)} colorScheme='green' >
      {/* defaultChecked */}
      This is a public or shared device
  </Checkbox>
    </HStack>

  {checkbox?<FormHelperText>Not your device? Selecting this checkbox reduces the amount of time you are signed in here.</FormHelperText>:null}

    </FormControl>

<Stack marginTop={'15px'}>

    <p>By signing in, I agree to the Expedia <a href="https://www.expedia.co.in/terms" style={{color:'blue'}}>Terms and Conditions</a>, <a href="https://www.expedia.co.in/privacy" style={{color:'blue'}}>Privacy Statement</a> and  
      <a href="https://www.expedia.co.in/rewards/terms" style={{color:'blue'}}>Expedia Rewards Terms and Conditions.</a> </p>


      <Button disabled={isError} onClick={singupFormSubmit}
       backgroundColor={'#3662d8'} color={'white'}>Continue</Button>
</Stack>

<p style={{display:'inline'}}>
Already have an account? </p><Link  to={'/singinform'}><p style={{display:'inline',color:'blue'}}>Sign in</p>   </Link> 
<p>or continue with</p>

</Box>


<Flex marginTop={'20px'} justifyContent={'center'} gap={'2rem'}>

<img width={'25px'} src="https://a.travel-assets.com/egds/marks/apple.svg" alt="" />
<img width={'25px'} src="https://a.travel-assets.com/egds/marks/facebook.svg" alt="" />
<img width={'25px'} src="https://a.travel-assets.com/egds/marks/google.svg" alt="" />
</Flex>



</div>


}