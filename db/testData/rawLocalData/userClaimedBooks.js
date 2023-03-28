const locationData = require("../locationData.js");
const userData = require("../userData.js");

const fetchClaimedBooks = () => {
  const claimedBooks = [];

  strAlphabet = "abcdefghijklmnopqrstuvwxyz";
  alphabet = strAlphabet.split("");
  const axios = require("axios");
  const genres = ["Action", "Romance", "Comedy", "Family", "Children's"];

  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=a")
    .then(function (response) {
      const bookData = response.data.items;
      bookData.map((book) => {
        return claimedBooks.push({
          title: book.volumeInfo.title,
          author: book.volumeInfo.authors,
          genre:
            book.volumeInfo.categories || genres[Math.floor(Math.random(4))],
          thumbnail: book.volumeInfo.imageLinks.smallThumbnail,
        });
      });
      return claimedBooks
    })
    .catch(function (error) {
      console.log(error);
    });
};

module.exports = fetchClaimedBooks
