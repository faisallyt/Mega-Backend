import {v2 as cloudinary} from "cloudinary"
import fs from fs;


          
cloudinary.config({ 
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME, 
  api_key:CLOUDINARY_API_KEY , 
  api_secret:  CLOUDINARY_API_SECRET
});


const uploadOnCloudinary=async(localFilePath)=>{
    try{

    }
    catch(error){
        
    }
}