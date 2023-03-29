import mongoose from 'mongoose'
import request from 'supertest'
import app from '../index.js'
import seedDB from '../db/seeds.js'
import dotenv from 'dotenv'

dotenv.config({path:'.env.test'})


beforeAll(async () => {
    await mongoose.connect(process.env.DATABASE_URL)
})

beforeEach(async () => {
    await seedDB()
})

afterAll(async () => {
    await mongoose.connection.close()
})


describe('userModels', () => {
    describe('GET: /api/users', () => {
        test('GET: 200 with array of all users', () => {
            return request(app)
            .get('/api/users')
            .expect(200)
            .then(({body:{users}}) => {
                users.forEach(user => {
                    expect(user).toHaveProperty('username', expect.any(String))
                    expect(user).toHaveProperty('firebase_id', expect.any(String))
                    expect(user).toHaveProperty('name', expect.any(String))
                    expect(user).toHaveProperty('claimed_books', expect.any(Array))
                })

            })
        })
    })
})