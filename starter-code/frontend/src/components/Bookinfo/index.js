import {useState, useEffect} from 'react'

function BookInfo() {
  // -------------get book by id -------------
//   when click on anybook it will bring the user to bookinfo
//   this will be in another copmponents
const [books, setBooks] = useState([]);
const getBooksById = () => {
  axios
    .get(`http://localhost:5000/books/search_2?id=${id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
    .then((results) => {
      console.log(results);
      setBooks(results.data.books);
    })
    .catch((err) => {
      console.log(err);
    });
};

  return (
    <div>
      
    </div>
  )
}

export default BookInfo

