import {Document } from 'mongoose';

export interface IUser extends Document{
    username: string;
    email: string;
    password: string;
    _doc: any;
    encryptPassword(password:string):Promise<string>
    validatePassword(password:string):Promise<boolean>
}
