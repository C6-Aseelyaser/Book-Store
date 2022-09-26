const booksModel = require("../models/booksSchma");

//------------- create new book -------------  ..? need to fix
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
const getAllBooks =(req,res)=>{
  // const  a =req.token.userId
  booksModel
  .find({})
  .then((result)=>{
    res.status(200);
    res.json({
      success:true,
      message:"All the book",
      book:result,
    });
  })
  .catch((err)=>{
    res.status(500);
    res.json({
      success:false,
      message:"Server Error",
      err:err.message,
    });
  });
};
//------------- get Book By category -------------
const getBookByCategory =(req,res)=>{
  let categoryId = req.query.category;
  booksModel
  .find({ category: categoryId })
  .then((Books)=>{
    if(!book.length){
      return res.status(404).json({
        success:false,
        message:`The category: ${categoryId} has no books`
      })
    }
    res.status(200).json({
      success:true,
      message:`All the books for the category: ${categoryId}`,
      books:books
    })
  })
  .catch((err)=>{
    res.status(500).json({
      success:false,
      message:`Server Error`,
      err:"err.message"
    })
  })
}
//------------- get Book By Id -------------
const getBookById =(req,res)=>{
  bookId=req.query.id;
  console.log(bookId);
  booksModel
  .findById(bookId)
  .populate("category", "title -_id").select('title description -_id') 
  .exec()
      .then((result) => {
      if (!result) {
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
}
//------------- get Book By author -------------
module.exports = { createNewBook,getAllBooks,getBookByCategory,getBookById };

// NewBook,  
// getAllBooks,
// getBookssByAuthor,
// getBookById,
// updateBookById,
// deleteBookById,
// deleteBookByAuthor,
// newComment
//const bookId = req.params.bookId;