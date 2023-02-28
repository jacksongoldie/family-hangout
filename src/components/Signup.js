import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
  } from '@chakra-ui/react'
import { useState } from 'react';

function Signup() {

    const [email, getEmail] = useState('')
    const [password, getPassword] = useState('')

  return (
    <div>
        <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
    </div>
  )
}

export default Signup