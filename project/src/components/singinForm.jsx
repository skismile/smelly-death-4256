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


export const SinginForm=()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkbox, setCheckBox] = useState(false)
   const[loginData,setLoginData]=useState(null)
   const[usersData,setUsersData]=useState([])
   const Navigate=useNavigate()
    // const { isOpen, onOpen, onClose } = useDisclosure()
    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
  
    const isError = email === '' || password === ''
const {Auth,setAuth}=useContext(Appcontext)
const loginFormSubmit=()=>{


  // console.log("email:",email)
  // console.log("pass:",password)
setLoginData({email:email,password:password})
setEmail("")
setPassword("")
}


useEffect(()=>{

  axios(`https://skismile-fake-server-app.herokuapp.com/singup_user_data`).then((res)=>{
    // console.log(res.data)
    setUsersData(res.data)
    loginAuth()
  })

},[])
useEffect(()=>{

  loginAuth()


},[loginData])



function loginAuth()
{
  usersData.map((ele)=>{
    // console.log(ele.email)
    if(ele.email===loginData.email && ele.password==loginData.password)
    {
     
      setAuth({
        login:true,
        token:ele.id,
        firstname:ele.firstname,
        email:ele.email
      })
      alert('user loged in')
     Navigate('/loginsuccess')
      return
    }
   
  })
// if(loginData )
// {
//   if(loginData.email!=""||loginData.password!="")
//   {
//     if(Auth.login==false)
//    {
//      alert('wrong email id or password',Auth.login)

//    }
//   }
  
// }

}


// if(usersData.length!=0)
// {console.log(usersData)
// // console.log(loginData)
// }

return <div>

<Box width={'30%'} margin={'auto'}>

<FormControl isInvalid={isError}>
<FormLabel fontSize={'30px'}>Sing in</FormLabel>
      <Stack gap={'30px'}>
  <Input value={email}
        onChange={handleEmailChange}
        type='email' 
        placeholder='Email address' 
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
        <FormErrorMessage>Email and Password is required.</FormErrorMessage>
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


      <Button disabled={isError} onClick={loginFormSubmit}
       backgroundColor={'#3662d8'} color={'white'}>Sing in</Button>
</Stack>

</Box>

<Link to='#'><p style={{color:'blue',marginTop:'20px'}}>Forgot password?</p></Link>

<p style={{display:'inline'}}> Don't have an account? </p><Link to={'/singupform'}><p style={{color:'blue',marginTop:'20px',display:'inline'}}>Create one</p></Link> 
<p style={{marginTop:'10px'}}>or continue with</p>
<Flex marginTop={'20px'} justifyContent={'center'} gap={'2rem'}>
  
<img width={'25px'} src="https://a.travel-assets.com/egds/marks/apple.svg" alt="" />
<img width={'25px'} src="https://a.travel-assets.com/egds/marks/facebook.svg" alt="" />
<img width={'25px'} src="https://a.travel-assets.com/egds/marks/google.svg" alt="" />
</Flex>


</div>


}