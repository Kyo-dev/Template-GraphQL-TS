import mongoose from 'mongoose'

export class DataBase {
    
    constructor() {
        this.connect()
    }
    private async connect():Promise<void> {
        const URI = process.env.MONGODB_URL
        await mongoose.connect( 'mongodb://localhost:27017/testDB' || URI,  {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        })
        console.log('DB is connected')
    }
}