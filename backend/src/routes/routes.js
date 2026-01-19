import express from "express";
import multer from 'multer'

import {create_user,verify_otp,user_login} from '../controller/user_controller.js'
const upload = multer({ storage: multer.diskStorage({}) })

const routes = express.Router()
routes.post('/laxxy',upload.single('profileImg'), create_user)

routes.post('/verify_otp/:id',verify_otp)
routes.post('/user_login',user_login)

export default routes 