const locationData = require("../locationData.js");
const userData = require("../userData.js");
const googleBookLocalData = require("../googleBooksApiLocalData");

const bookFormattedData = [];
const userFormattedData = [userData];
const locationFormattedData = locationData;

// const googleBookLocalData.map((book) => {
//   return bookFormattedData.push({
//     title: book.volumeInfo.title,
//     author: book.volumeInfo.authors,
//     genre: book.volumeInfo.categories,
//     thumbnail: book.volumeInfo.imageLinks.smallThumbnail,
//   });
// });

// console.log(bookFormattedData[0], "book i0,", bookFormattedData[2], "book i2");
// console.log(userFormattedData[0]);
console.log(locationFormattedData);
