import {useEffect , useState} from 'react';
import {Table , TableBody, TableCell , TableHead , TableRow , Button} from '@mui/material';
import {getUsers} from '../service/api.js';
import { Link } from 'react-router-dom';
const Alluser = () => {

  const[users , setUsers] = useState([]);

  useEffect( ()=>{
    getAllUsers();
  } , []);

  const getAllUsers = async () => {
   let response =  await getUsers();
  //  console.log(response.data);
  setUsers(response.data);
  }


  return (
    <Table>
      <TableHead>
        <TableRow>
          {/* <TableCell>ID</TableCell> */}
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          users.map(user => (
            <TableRow>
              {/* <TableCell>{user._id}</TableCell> */}
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button variant='contained' style={{marginRight: 10}} Component={Link} to={`/edit/${user.name}`} >Edit</Button>
                <Button variant='contained' color='error'>Delete</Button>
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  )
}

export default Alluser;