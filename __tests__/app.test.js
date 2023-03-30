import mongoose from "mongoose";
import request from "supertest";
import app from "../app.js";
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
  describe("GET: /api/users/:username", () => {
    test("GET: 200 with individual user ", () => {
      return request(app)
        .get("/api/users/Orland.Schmitt58")
        .expect(200)
        .then(({ body: { user } }) => {
          expect(user.username).toBe("Orland.Schmitt58");
          expect(user.firebase_id).toBe("170330cd-c86a-4f71-9272-bc1ac09f4759");
          expect(user.name).toBe("Mrs. Ray McCullough PhD");
          expect(user.claimed_books).toEqual([
            {
              title:
                "Proposals for establishing ... a Joint Stock Tontine Company ... for the purpose of ascertaining the principles of agricultural improvement, etc. L.P.",
              author: ["John SINCLAIR (Right Hon. Sir)"],
              genre: "Comedy",
              thumbnail:
                "http://books.google.com/books/content?id=bPQCzE1eTbcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            },
          ]);
        });
    });
    test("GET: 404 when request not found", () => {
      return request(app)
        .get("/api/users/userNotInDB")
        .expect(404)
        .then(({ body }) => {
          expect(body.msg).toBe("User Not Found");
        });
    });
  });
  describe("POST: /api/users", () => {
    test("POST: 201 ", () => {
      return request(app)
        .post("/api/users")
        .send({
          username: "TestUser1",
          firebase_id: "12eef1f2-d9ec-4aab-88b9-68528940ca0",
          name: "Test User Has Name",
        })
        .expect(201)
        .then(({ body: { user } }) => {
          expect(user).toMatchObject({
            username: "TestUser1",
            firebase_id: "12eef1f2-d9ec-4aab-88b9-68528940ca0",
            name: "Test User Has Name",
          });
        });
    });
    test("POST: 201 ignores extra keys", () => {
      return request(app)
        .post("/api/users")
        .send({
          username: "TestUser1",
          firebase_id: "12eef1f2-d9ec-4aab-88b9-68528940ca0",
          name: "Test User Has Name",
          claimed_books: ['book1', 'book2']
        })
        .expect(201)
        .then(({ body: { user } }) => {
          expect(user).toMatchObject({
            username: "TestUser1",
            firebase_id: "12eef1f2-d9ec-4aab-88b9-68528940ca0",
            name: "Test User Has Name",
          });
        });
    });
    test("POST: 400 missing key", () => {
      return request(app)
        .post("/api/users")
        .send({
          username: "TestUser1",
          firebase_id: "12eef1f2-d9ec-4aab-88b9-68528940ca0",
        })
        .expect(400)
        .then(({body: {msg}}) => {
          expect(msg).toBe("name is a required field")
        })
    })
    test("POST: 400 ignores extra keys", () => {
      return request(app)
        .post("/api/users")
        .send({
          username: ["TestUser1"],
          firebase_id: "12eef1f2-d9ec-4aab-88b9-68528940ca0",
          name: "Test User Has Name",
          claimed_books: ['book1', 'book2']
        })
        .expect(400)
        .then(({body: {msg}}) => {
          expect(msg).toBe("username field should be a string")
        })
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
  describe("GET: /api/books/:id", () => {
    test("200 with one book object", () => {
      return request(app)
        .get("/api/books/6425407dba5e321df2803b39")
        .expect(200)
        .then(({ body: { book }}) => {
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
        })
    })
    test("404 non-existent book", () => {
      return request(app)
        .get("/api/books/123")
        .expect(404)
        .then(({body: {msg}}) => {
          expect(msg).toBe('Book not found.')
    })
  })
})
})
