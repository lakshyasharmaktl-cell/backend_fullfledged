import { v2 as cloudinary } from 'cloudinary'
import sharp from 'sharp'
import dotenv from 'dotenv'

dotenv.config()

cloudinary.config({
    cloud_name: process.env.Cloudname,
    api_key: process.env.APIkey,
    api_secret: process.env.API_secret
});

export const uploadProfileImg = async (filePath) => {
    try {
        console.log(filePath)
        const uploadResult = await cloudinary.uploader.upload(filePath,{folder:'ProfileImgs'})
        return uploadResult

    } catch (err) {
        console.error('Image upload failed:', err)
        throw err
    }
}

export const deleteProfileImg = async (AssetsId) => {
  try {
    const result = await cloudinary.uploader.destroy(AssetsId);
    return result
  } 
  catch (err) {console.log(err.message);}
};