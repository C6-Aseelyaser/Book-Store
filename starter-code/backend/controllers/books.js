const booksModel = require("../models/booksSchma");

//------------- create new book -------------
const createNewBook = (req, res) => {
  const bookId = req.params.bookId;
  const {
    title,
    author,
    description,
    category,
    image,
    year,
    puplish,
    price,
    quantity,
  } = req.body;
  constbooksModelInstance = new booksModel({
    title,
    author,
    description,
    category,
    image,
    year,
    puplish,
    price,
    quantity,
  });
  articlesModelInstance
    .save()
    .then((result) => {
      res.status(201);
      res.json({
        success: true,
        message: "Book created",
        book: result,
      });
      console.log(22);
      console.log(result);
    })
    .catch((err) => {
      res.status(500);
      res.json({
        success: false,
        message: "Server Error",
        err: err.message,
      });
    });
};
//-------------get All Books-------------
module.exports = { createNewBook };

// NewBook,  
// getAllBooks,
// getBookssByAuthor,
// getBookById,
// updateBookById,
// deleteBookById,
// deleteBookByAuthor,
// newComment
