import mongoose from "mongoose";
import request from "supertest";
import app from "../index.js";
import seedDB from "../db/seeds.js";
import dotenv from "dotenv";

dotenv.config({ path: ".env.test" });

beforeAll(async () => {
  await mongoose.connect(process.env.DATABASE_URL);
});

beforeEach(async () => {
  await seedDB();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("userModels", () => {
  describe("GET: /api/users", () => {
    test("GET: 200 with array of all users", () => {
      return request(app)
        .get("/api/users")
        .expect(200)
        .then(({ body: { users } }) => {
          users.forEach((user) => {
            expect(user).toHaveProperty("username", expect.any(String));
            expect(user).toHaveProperty("firebase_id", expect.any(String));
            expect(user).toHaveProperty("name", expect.any(String));
            expect(user).toHaveProperty("claimed_books", expect.any(Array));
          });
        });
    });
  });
});
describe("bookModels", () => {
  describe("GET: /api/books", () => {
    test("GET: 200 with array of all books", () => {
      return request(app)
        .get("/api/books")
        .expect(200)
        .then(({ body: { books } }) => {
          books.forEach((book) => {
            expect(book).toHaveProperty("title", expect.any(String));
            expect(book).toHaveProperty("author", expect.any(String));
            expect(book).toHaveProperty("genre", expect.any(String));
            expect(book).toHaveProperty("posted_by", expect.any(String));
            expect(book).toHaveProperty("location", expect.any(Object));
            expect(book.location).toHaveProperty("type", expect.any(String));
            expect(book.location).toHaveProperty(
              "coordinates",
              expect.any(Array)
            );
            expect(book).toHaveProperty(
              "location_description",
              expect.any(String)
            );
          });
        });
    });
  });
});
