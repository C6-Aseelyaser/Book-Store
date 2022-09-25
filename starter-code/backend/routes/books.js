const express = require("express");
const {createNewBook} = require("../controllers/books");

const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

const booksRouter = express.Router();
// create books router

module.exports = booksRouter;





// NewBook,
// getAllBooks,
// getBookssByAuthor,
// getBookById,
// updateBookById,
// deleteBookById,
// deleteBookByAuthor,
// newComment
