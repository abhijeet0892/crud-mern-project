import axios from "axios";
import React, { useEffect, useState } from "react";
import "./AllBook.css";
import { Link } from "react-router-dom";

const AllBook = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    getBook();
  }, []);

  const getBook = async () => {
    try {
      const response = await axios.get("http://localhost:9000/api/viewbook");
      setBookData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deletebook = async (id) => {
    try {
      axios.delete(`http://localhost:9000/api/deletebook/${id}`);
      getBook();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>AllBook</h1>
      <div className="add-book-link">
        <Link className="link-btn" to={"/"}>
          Add Book
        </Link>
      </div>
      <table className="book-table">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Book Author</th>
            <th>Book Price</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookData.map((books) => (
            <tr key={books._id}>
              <td>{books.book_name}</td>
              <td>{books.book_author}</td>
              <td>${books.book_price}</td>
              <td>
                <a href={`updatebook/${books._id}`}>Edit</a>
              </td>
              <td>
                <a href="#" onClick={() => deletebook(books._id)}>
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBook;
