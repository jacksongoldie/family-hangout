import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
  } from '@chakra-ui/react'
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {

    const [email, getEmail] = useState('')
    const [password, getPassword] = useState('')
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

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