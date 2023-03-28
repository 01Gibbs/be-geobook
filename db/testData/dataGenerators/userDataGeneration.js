import axios from "axios";
import { faker } from "@faker-js/faker";
import fs from "fs";
const  fetchClaimedBooks  = async () => {
  const claimedBooks = [];
  // let strAlphabet = "abcdefghijklmnopqrstuvwxyz";
  // let alphabet = strAlphabet.split("");

  let test = []
  const genres = ["Action", "Romance", "Comedy", "Family", "Children's"];
  const data = await axios
    .get("https://www.googleapis.com/books/v1/volumes?q=a")
    .then( function (response) {
      return response.data.items;
    }).then((bookData)=>{
      bookData.map((book) => {
        return claimedBooks.push({
          title: book.volumeInfo.title,
          author: book.volumeInfo.authors,
          genre:
            book.volumeInfo.categories || genres[Math.floor(Math.random(4))],
          thumbnail: book.volumeInfo.imageLinks.smallThumbnail,
        });
      })
      return Promise.all([claimedBooks])
    })
    .catch(function (error) {
      console.log(error);
    });

};

const promiseClaimedBooks = async ()=>{
  const apiPromise = await fetchClaimedBooks()
  console.log(fetchClaimedBooks())
}

console.log(promiseClaimedBooks())



function generateUsers() {
  let users = [];

  for (let id = 1; id <= 100; id++) {
    let username = faker.internet.userName();
    let uid = faker.datatype.uuid();
    let name = faker.name.fullName();
    users.push({
      username: username,
      firebase_id: uid,
      name: name,
      // claimed_books:claimedBooks[Math.floor(Math.random(10))]
    });
  }

  return { data: users };
}
let dataObj = generateUsers();

//to use, add "type": "module" to package.json
//remember to remove!
fs.writeFileSync("userData.json", JSON.stringify(dataObj, null, "\t"));
