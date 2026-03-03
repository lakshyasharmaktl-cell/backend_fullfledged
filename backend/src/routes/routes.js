import express from "express";
import multer from 'multer'
import passport from '../config/google.js'

import {create_user,verify_otp,user_login,user_login_with_google,resend_Otp,updated_Profile,delete_Profile}
 from '../controller/user_controller.js'
 import {user_authentication,user_authorization} from '../error/user_auth.js'

const upload = multer({ storage: multer.diskStorage({}) })

const routes = express.Router()

//user
routes.post('/create_user',upload.single('profileImg'), create_user)
routes.post('/verify_otp/:id',verify_otp)
routes.post('/user_login',user_login)
routes.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));
routes.get("/auth/google/callback",passport.authenticate("google",{session : false}),user_login_with_google);
routes.get('/resend_Otp',resend_Otp)
routes.put('/updated_profile/:id',user_authorization,updated_Profile)
routes.delete('/delete_profile/:id',user_authorization,delete_Profile)

//Admin
import { admin_log_in, get_all_user } from '../controller/admin_controller.js'
import {authentication,authorization} from '../error/admin_auth.js'
routes.post('/admin_log_in', admin_log_in)
routes.get('/get_all_user', get_all_user)

export default routes;