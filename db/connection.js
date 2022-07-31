import mongoose from "mongoose";

const connection = async (URL)=>{
    try{
        await mongoose.connect(URL, {useNewUrlParser: true})
        console.log("db connect successfully")
    } catch(err){
        console.log("err", err)
    }
}

export default connection