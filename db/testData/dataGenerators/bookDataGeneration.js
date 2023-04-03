const { faker } = require('@faker-js/faker')
const mongoose = require('mongoose')
const fs = require('fs/promises')

function generateBooks() {
  let books = [];

  // to consider linking data /users/:user_id/ username to this input?
  for (let id = 1; id <= 25; id++) {
    let title = faker.music.songName();
    let name = faker.name.fullName();
    let genre = faker.date.month();
    let username = faker.name.fullName();
    let location = {
      type: "Point",
      coordinates: [
        faker.address.longitude(-1.454922, -1.62933),
        faker.address.latitude(53.850197, 53.766673),
      ],
    };
    let location_description = faker.hacker.phrase();

    books.push({
      _id: new mongoose.Types.ObjectId(),
      title: title,
      author: name,
      genre: genre,
      posted_by: username,
      location: location,
      location_description: location_description,
    });
  }
  return fs.writeFile('booksData.json', JSON.stringify(books))

}

module.exports = generateBooks();
