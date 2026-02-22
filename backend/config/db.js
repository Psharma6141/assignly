const mongoose= require("mongoose");

// const MONGODB_URI=  process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/task-management';

const connectDb= (async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongoDb connected");        
    }
    catch(err){
        console.log("connection error", err);
        process.exit(1);
    }
});


module.exports= connectDb;