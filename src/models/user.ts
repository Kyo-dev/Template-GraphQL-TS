import { Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs'
import {IUser} from '../interfaces/userInterface'

const user_schema = new Schema({
    username: {
        type: String,
        min: 3,
        max: 15,
        unique: true,
        lowercase: true,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        max: 100,
        min: 5,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        min: 7,
        max: 20,
        required: true
    }
});

user_schema.methods.encryptPassword = async (password: string):Promise <string> => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

user_schema.methods.validatePassword = async function (password: string):Promise<boolean>{
    return await bcrypt.compare(password, this.password)
}

export default model<IUser>('user_model', user_schema);