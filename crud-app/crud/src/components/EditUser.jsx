import React, { useState } from 'react';
import { FormGroup , FormControl , InputLabel , Input , Button , Typography , styled } from '@mui/material';
import { addUser } from '../service/api';
import { useNavigate } from 'react-router-dom';


// import { Form } from 'react-router-dom';
const Conatiner = styled(FormGroup)`
    margin:auto;
    width:50%;
    & > div {
      margin-top:20px;
    }
`

const defaultvalue ={
    name:'',
    username:'',
    email:'',
    phone:''
}

const Edituser = () => {
  const [user , setUser] = useState(defaultvalue);

  const navigate = useNavigate();

  const OnValueChange = (e) =>{
    setUser({...user , [e.target.name]:e.target.value });
    // console.log(user);
  }

  const AddUsertodb = async () =>{
    await addUser(user);
    navigate('/all');
  }

  return (
    <Conatiner>
      <Typography variant='h4'>Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input name='name' onChange={(e)=>OnValueChange(e)}/>
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input name='username' onChange={(e)=>OnValueChange(e)}/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input name='email' onChange={(e)=>OnValueChange(e)}/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input name='phone' onChange={(e)=>OnValueChange(e)}/>
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={()=>AddUsertodb()}>Edit</Button>
      </FormControl>
    </Conatiner>
  )
}

export default Edituser;
