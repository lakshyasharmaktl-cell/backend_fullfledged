// import passport from 'passport'
// import { Stra6tegy as googleStrategy, profile } from "passport-google-oauth20";
// import dotenv from 'dotenv'
// dotenv.config()

// passport.use(
//     new GoogleStrategy(
//         {
//             clientID: process.env.Client_Id!,
//             clientSecret: process.env.Client_secret!,
//             callbackURL: "/auth/google/callback",

//         },
//         async(_accessToken : String, _refreshToken : string , profile, done) => {
//             try{
//                 if(!profile) return done(null,false);
//                 done(null, profile);

//             }
//             catch(err){done(err as Error, false);}

//         }
//     )
// );
// passport.serialization((user : any , done) => done(null,user.id));
// passport.deserialization((user : any , done) => done(null,user));

// export default passport;