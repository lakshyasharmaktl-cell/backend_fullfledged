import user_models, { userSchema } from '../models/user_models.js'
import { error } from '../error/errorhandling.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const admin_log_in = async (req, res) => {
    try {

        const data = req.body

        const { email, password } = data

        if (!email) return res.status(400).send({ status: false, msg: "email is required!" })
        if (!password) return res.status(400).send({ status: false, msg: "PASSWORD IS REQUIRED!" })

        const DB = await user_models.findOne({ email: email, role: "Admin" })
        if (!DB) return res.status(400).send({ status: false, msg: "User not found!" })

        const comparePasswod = await bcrypt.compare(password, DB.password)

        if (!comparePasswod) return res.status(400).send({ status: false, msg: "wrong password" })

        const token = jwt.sign({ userId: DB._id }, process.env.AdminToken, { expiresIn: '1d' })
        res.status(200).send({ status: true, msg: "Login Successfully", token, id: DB._id })

    }
    catch (e) { error(e, res) }
}

export const get_all_user = async (req, res) => {
    try {

        const getData = await user_models.find({ role: 'user' }).select({name:1, email:1, gender:1, profileImg:1})

        res.status(200).send({ status: true, data: getData })

    }
    catch (err) {
        error(err)
    }
}