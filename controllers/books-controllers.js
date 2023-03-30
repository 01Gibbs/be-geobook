import bookModels from "../model/book.js";

export const getBooks = async (req, res, next) => {
  try {
    const bookData = await bookModels.find();
    return res.status(200).send({ books: bookData });
  } catch (error) {
    next(error);
  }
};

export const getBook = async (req, res, next) => {
  try {
    const bookData = await bookModels
      .findById(req.params.id)
      .setOptions({ sanitizeFilter: true });
    !bookData ? res.status(404).send({ msg: "Book not found" }) : null;
    return res.status(200).send({ book: bookData });
  } catch (error) {
    next(error);
  }
};

export const postBook = async (req, res, next) => {
  try {
    const newBook = new bookModels({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      posted_by: req.body.posted_by,
      location: req.body.location,
      location_description: req.body.location_description,
    });
    const dataToSave = await newBook.save();
    return res.status(201).send({ book: dataToSave });
  } catch (error) {
    next(error);
  }
};

export const deleteBook = async (req, res, next) => {
  try {
    const bookData = await bookModels.findByIdAndDelete(req.params.id);

    const deletedBook = await bookModels.findById(req.params.id);
    bookData === null ? res.status(404).send({ msg: "Book not found" }) : null;
    res.status(200).send({ msg: "Book deleted" });
  } catch (error) {
    next(error);
  }
};
