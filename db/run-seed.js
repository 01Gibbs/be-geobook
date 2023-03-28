import dotenv from 'dotenv'
dotenv.config({
    path: `.env`
  })
import seedDB from './seeds.js'
import mongoose from 'mongoose'


const runSeed = async () => {
    await mongoose.connect(process.env.DATABASE_URL)
    await seedDB()
    await mongoose.connection.close()
}

runSeed()