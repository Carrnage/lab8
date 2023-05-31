import React, { useState } from 'react'
import { Box, Button, Input, Heading } from '@chakra-ui/react'




export const Home = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

const HandleLogin = () => {

  const loginData = {
    email: email,
    password: password,
  };

  console.log(loginData);

  fetch(`${process.env.REACT_APP_BACKEND_URL}/Auth/Login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData),
  })
  .then(response => response.json())
  .then(body => {
    if (body.token) {
      
      setToken(body.token)
    }
    else console.log(body.errorMessage)
  })
    
  .catch(err => console.log(err))
}

    return (
    <Box>
        <Heading>login</Heading>
        <Input
         onChange={e => setEmail(e.target.value)}
         type={'email'}
         placeholder='please enter your email'/>
        <Input 
        onChange={e => setPassword(e.target.value)}
        type={'password'} 
        placeholder='please enter your password'/>
        <Button onClick={HandleLogin} >Login</Button>
    </Box>
  )
}
