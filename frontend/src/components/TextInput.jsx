import React, { useState } from 'react'
import TextField from '@mui/material/TextField';  



function TextInput(props) {

  return (

     <TextField
          // inputRef={refe}
          // label={label}
          // value={value}
          // onChange={(event) => {
          //     setValue(event.target.value);
          // }}

          {...props}

        />

  )
}

export default TextInput
