import User from '../models/userschema.js';



export const addUser = async (request , response) => {
    // console.log('Hello');
    const user = request.body;
    const newuser = new User(user);

    try{
        console.log('route working good');
       await newuser.save();
       response.status(201).json(newuser);
    }catch(error){
        response.status(409).json({message: error.message}); 
    }
}

export const getUsers = async(request , response) => {
    try {
        const user =  await User.find({});
        response.status(200).json(user);
    } catch (error) {
        // console.log('error in user controlling' , error);
        response.status(404).json({message : error.message});
    }
}