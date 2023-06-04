import React, { useState } from 'react'
import TextField from '@mui/material/TextField';  



function TextInput({value,setValue}) {

  return (

     <TextField
          label="Url"
          value={value}
        onChange={(event) => {
            setValue(event.target.value);
        }}
        />

  )
}

export default TextInput
