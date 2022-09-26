const booksModel = require("../models/booksSchma");

//------------- create new book -------------  ..? need to fix
const createNewBook = (req, res) => {
  const {
    title,
    author,
    description,
    category,
    image,
    year,
    puplish,
    price,
    rating
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
    rating
  });
  constbooksModelInstance
    .save()
    .then((result) => {
      res.status(201);
      res.json({
        success: true,
        message: "Book created",
        book: result,
      });
      console.log(36);
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
const getAllBooks = (req, res) => {
  booksModel
    .find() //..>{}
    .then((result) => {
      res.status(200);
      res.json({
        success: true,
        message: "All the book",
        book: result,
      });
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
//------------- get Book By category -------------
const getBookByCategory = (req, res) => {
  let categoryId = req.query.category;
  console.log(req.query.category);
  booksModel
    .find({ category: categoryId })
    .then((Books) => {
      if (Books === undefined) {
        return res.status(404).json({
          success: false,
          message: `The category: ${categoryId} has no books`,
        });
      }

      res.status(200).json({
        success: true,
        message: `All the books for the category: ${categoryId}`,
        books: Books,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: "err.message",
      });
    });
};
//------------- get Book By Id -------------
const getBookById = (req, res) => {
  bookId = req.query.id;
  console.log(bookId);
  booksModel
    .findById(bookId)
    .populate("category", "title -_id")
    .select(" -_id")
    .exec()
    .then((result) => {
      if (result=== undefined) {
        return res.status(404).json({
          success: false,
          message: `The book is not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `The book ${bookId} `,
        book: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
//------------- update Book By Id -------------
const updateBookById = (req, res) => {
  const bookId = req.params.id;
  const updetedBook = req.body;
  Object.keys(updetedBook).forEach((element,index) => {
    updetedBook[element] == "" && delete updetedBook[element];
  });
  booksModel
    .findByIdAndUpdate(bookId, req.body, { new: true })
    .then((result) => {
      if (result === undefined) {
        return res.status(404).json({
          success: false,
          message: `The Book : ${bookId} is not found`,
        });
      }
      res.status(202).json({
        success: true,
        message: `Book updated`,
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
//------------- delete Book By Id -------------
const deleteBookById = (req, res) => {
  const bookId = req.params.id;
  booksModel
    .findByIdAndDelete(bookId)
    .then((result) => {
      if (result===undefined) {
        return res.status(404).json({
          success: false,
          message: `The Book: ${bookId} is not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Book deleted`,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
//---------------------------------------------
module.exports = { createNewBook, getAllBooks, getBookByCategory, getBookById,updateBookById,deleteBookById};
// pt1
// NewBook,
// getAllBooks,
// getBookByCategory
// getBookById,
// updateBookById,
// deleteBookById,
// pt2
// getBooksByAuthor,
// deleteBookByAuthor,
// newComment

//const bookId = req.params.bookId;
