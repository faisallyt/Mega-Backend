const mongoose=require("mongoose");
const {DB_NAME} =require("../constants.js");

// const connectDB=async()=>{
//     try{
//         const connectionInstance=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

//         console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
//         //just so that we can know ki db kaunse wale me connection ho rahi hai. database production
//         //ka alag hota hai, development ka alag hota hai, testing ka alag hota hai.
//     }
//     catch(error){
//         console.log(`MongoDB connection error `,error);
//         process.exit(1);
//     }
// }

// module.exports= connectDB;

// // db/index.js
// const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB:", process.env.MONGODB_URI);

        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`MongoDB connection error `, error);
        process.exit(1);
    }
};

module.exports = connectDB;
