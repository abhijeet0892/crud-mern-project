import React, { useState } from "react";
import axios from "axios";
import "./CreateBook.css";

const CreateBook = () => {
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:9000/api/addbook",
        bookData
      );
      console.log(response.data);
      setBookData({
        book_name: "",
        book_author: "",
        book_price: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-book-container">
      <form className="create-book-form" onSubmit={handleFormSubmit}>
        <fieldset>
          <legend>Add Book</legend>
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
            <button type="submit">Add Book</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateBook;
