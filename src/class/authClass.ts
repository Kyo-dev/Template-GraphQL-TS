import bcrypt from "bcryptjs";
import User from "../models/user";
// import jwt from 'jsonwebtoken';

export class Auth {
    constructor (){}
    public async sign_up (args:any){
        console.log(args)
        try {
            const existUser = await User.findOne({
              email: args.userInput.email
            });
            if (existUser) throw new Error("User exist already");
            const hashedPassword = await bcrypt.hash(args.userInput.password, 12);
            if (
              args.userInput.username.length <= 0 ||
              args.userInput.username == null
            )
              throw new Error("Insert an username");
            if (args.userInput.email.length <= 0 || args.userInput.email == null)
              throw new Error("Insert an email");
            if (hashedPassword.length <= 0 || hashedPassword == null)
              throw new Error("Insert a pass");
            const user = new User({
              username: args.userInput.username,
              email: args.userInput.email,
              password: hashedPassword,
            });
            const result = await user.save();
            return {
              ...result._doc,
              _id: result.id,
            };
          } catch (error) {
            throw error;
          }

    }
    public async sign_in (){
        console.log('signin')
    }
}