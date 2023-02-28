import { InputGroup, Input } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useState } from 'react'

function UploadForm() {
    const [file, setFile] = useState(null);

  function handleChange(e){
    e.preventDefault();
    setFile(e.target.files[0])
  }

  return (
    <div>
        <InputGroup>
            <Input
            type='file'
            accept='image/jpeg, image/png' 
            onChange={handleChange}
            /> 

            <AddIcon />
        </InputGroup>
        {file ? <div>{file.name}</div> : null}
    </div>
  ) 
}

export default UploadForm