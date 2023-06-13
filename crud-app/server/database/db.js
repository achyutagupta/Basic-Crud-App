import mongoose from "mongoose";




const Connection = async (username , password) => {

    const URL = 'mongodb://achyutagupta888rg:rkqwertyuiop@ac-h7kciuk-shard-00-00.zbfxmxu.mongodb.net:27017,ac-h7kciuk-shard-00-01.zbfxmxu.mongodb.net:27017,ac-h7kciuk-shard-00-02.zbfxmxu.mongodb.net:27017/?ssl=true&replicaSet=atlas-q1mce3-shard-0&authSource=admin&retryWrites=true&w=majority';
    
    try {
       await mongoose.connect(URL);
       console.log('Connection Successful');
    }catch(error){
        console.log("Error while connecting data base" , error);
    }
}

export default Connection; 