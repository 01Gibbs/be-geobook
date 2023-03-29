import axios from 'axios'
import { faker } from '@faker-js/faker'
import fs from 'fs/promises'

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
          author: book.volumeInfo.authors,
          genre:
            book.volumeInfo.categories || genres[Math.floor(Math.random()*4)],
          thumbnail: book.volumeInfo.imageLinks.smallThumbnail
        })
      })

      const users = []

      for (let id = 1; id <= 100; id++) {
        let username = faker.internet.userName()
        let uid = faker.datatype.uuid()
        let name = faker.name.fullName()
        users.push({
          username: username,
          firebase_id: uid,
          name: name,
          claimed_books: [claimedBooks[Math.floor(Math.random()*10)]]
        })

      }
      fs.writeFile('userData.json', JSON.stringify(users))
    })
}

export default await fetchClaimedBooks()




