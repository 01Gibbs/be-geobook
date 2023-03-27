require('dotenv').config();
const mongoose = require('mongoose')
const testBooks = require('./testData/bookData')
const testUsers = require('./testData/userData')

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString).then(()=> {
    console.log('MONGO CONNECTION OPEN')
})
.catch(err => console.log(err))

const seedDB = async (/* Add files here with arrays of objects 
to put in collection, this way can be different for test and
 production data (or can just use the same, as diff databases 
    will mean it's not affecteed anyway*/) => {
    await userModel.deleteMany({})
    await userModel.insertMany(testUsers)
    await booksModel.deleteMany({})
    await booksModel.insertMany(testBooks)
}




module.exports = seedDB