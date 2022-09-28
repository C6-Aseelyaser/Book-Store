// import "./style/css";
//change this folder to Admin

import axios from "axios";
import { useState, useEffect, useContext } from "react";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState("");
  const [puplish, setPuplish] = useState("");
  const [price, setPrice] = useState("");
  const [rating, SetRating] = useState("");
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
  // const [first, setfirst] = useState(second)

  const createBook = () => {
    axios.post(
        "http://localhost:5000/Books/",
      {
        title,
        author,
        description,
        category,
        image,
        year,
        puplish,
        price,
        rating,
        comment,
      })
        .then((results) => {
          setMessage(results.data.message);
        })
        .catch((err) => {
          setMessage(err.response.data.message);
        });
  };

  return (
    <div className="addBook">
      <div className="add">
        <input
          type="text"
          placeholder="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="author"
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="image"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="year"
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="puplish"
          onChange={(e) => {
            setPuplish(e.target.value);
          }}
        />
                <input
          type="text"
          placeholder="price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
                <input
          type="text"
          placeholder="rating"
          onChange={(e) => {
            SetRating(e.target.value);
          }}
        />
                <input
          type="text"
          placeholder="comment"
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <button type="submit" className="createArticles" onClick={createBook}> book created </button>
      </div>
    </div>
  );
};
export default AddBook;
