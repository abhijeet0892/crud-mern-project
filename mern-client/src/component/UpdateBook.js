import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./UpdateBook.css";

const UpdateBook = () => {
  const { bid } = useParams();
  const navigate = useNavigate();

  const [bookData, setBookData] = useState({
    book_name: "",
    book_author: "",
    book_price: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:9000/api/viewbook/${bid}`)
      .then((response) => {
        setBookData({
          book_name: response.data.book_name,
          book_author: response.data.book_author,
          book_price: response.data.book_price,
        });
      })
      .then((error) => {
        console.error(error);
      });
  }, [bid]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:9000/api/updatebook/${bid}`,
        bookData
      );
      console.log(response.data);
      setBookData({
        book_name: "",
        book_author: "",
        book_price: "",
      });
      navigate("/books");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="update-book-container">
      <form className="update-book-form" onSubmit={handleFormSubmit}>
        <fieldset>
          <legend>Update Book</legend>
          <div className="form-group">
            <label htmlFor="book_name">Book Name</label>
            <input
              type="text"
              id="book_name"
              name="book_name"
              value={bookData.book_name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="book_author">Book Author</label>
            <input
              type="text"
              id="book_author"
              name="book_author"
              value={bookData.book_author}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="book_price">Book Price</label>
            <input
              type="text"
              id="book_price"
              name="book_price"
              value={bookData.book_price}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <button type="submit">Update Book</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default UpdateBook;
