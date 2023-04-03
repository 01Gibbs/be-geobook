const axios = require('axios')
const { faker } = require('@faker-js/faker')
const mongoose = require('mongoose')
const fs = require('fs/promises')


const fetchClaimedBooks = () => {
  const claimedBooks = []
  const genres = ['Action', 'Romance', 'Comedy', 'Family', "Children's"]

  return axios
    .get('https://www.googleapis.com/books/v1/volumes?q=a')
    .then(response => {
      const bookData = response.data.items
      bookData.map(book => {
        return claimedBooks.push({
          title: book.volumeInfo.title,
          author: book.volumeInfo.authors[0],
          genre:
            genres[Math.floor(Math.random()*4)],
          thumbnail: book.volumeInfo.imageLinks.smallThumbnail
        })
      })

      const users = []

      for (let id = 1; id <= 100; id++) {
        let username = faker.internet.userName()
        let uid = faker.datatype.uuid()
        let name = faker.name.fullName()
        users.push({
          _id: new mongoose.Types.ObjectId(),
          username: username,
          firebase_id: uid,
          name: name,
          claimed_books: [claimedBooks[Math.floor(Math.random()*10)]]
        })

      }
      return fs.writeFile('userData.json', JSON.stringify(users))
    })
}

fetchClaimedBooks()



