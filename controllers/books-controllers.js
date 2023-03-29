import bookModels from "../model/book.js";

export const getBooks = async (req, res) => {
  try {
    const bookData = await bookModels.find();
    return res.status(200).send({ books: bookData });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
