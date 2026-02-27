import express from "express";
import multer from 'multer'
import passport from '../config/google.js'

import {create_user,verify_otp,user_login,user_login_with_google} from '../controller/user_controller.js'
const upload = multer({ storage: multer.diskStorage({}) })

const routes = express.Router()
//user
routes.post('/create_user',upload.single('profileImg'), create_user)
routes.post('/verify_otp/:id',verify_otp)
routes.post('/user_login',user_login)
routes.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));
routes.get("/auth/google/callback",passport.authenticate("google",{session : false}),user_login_with_google);

//Admin
import { admin_log_in, get_all_user } from '../controller/admin_controller.js'
routes.post('/admin_log_in', admin_log_in)
routes.get('/get_all_user', get_all_user)

export default routes 