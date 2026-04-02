// server pe file aa chuki hai. 
// server se local path milega aur fir cloudinary pe upload hoga
// then server se remove krenge
import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async(localFilePath)=>{
    try {
        if(!localFilePath) return null;
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        })
        //file has been uploaded successfully
        console.log("file is uploaded on cloudinary", response.url);
        return response
    } catch (error) {
        // if the file is not uploaded then remove it from server
        fs.unlinkSync(localFilePath)
        return null
    }
}

export {uploadOnCloudinary}