import dotenv from 'dotenv'
dotenv.config()
import { App } from './config/server'
import {DataBase} from './config/database'

const main = async () => {
    new DataBase()
    new App();
}

main();