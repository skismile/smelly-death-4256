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
  } from '@chakra-ui/react'
import { useState } from 'react'



export const SinginForm=()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkbox, setCheckBox] = useState(false)
   
    // const { isOpen, onOpen, onClose } = useDisclosure()
    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
  
    const isError = email === '' || password === ''



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


      <Button disabled={isError} backgroundColor={'#3662d8'} color={'white'}>Sing in</Button>
</Stack>




</Box>



</div>


}