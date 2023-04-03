
require('dotenv').config({
  path: `.env`
});

const seedDB = require('./seeds.js')
const mongoose =  require('mongoose')


const runSeed = async () => {
    await mongoose.connect(process.env.DATABASE_URL)
    await seedDB()
    await mongoose.connection.close()
}

runSeed()