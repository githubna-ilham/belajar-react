import React, { useState, useEffect } from "react";
import axios from "axios";

const BookList = () => {
  const [books, setBook] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const response = await axios.get("http://192.168.40.1:3333/books");
    // console.log(response.data.data);
    setBook(response.data.data);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Judul</th>
              <th>Penerbit</th>
              <th>Deskripsi</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book.id}>
                <td>{index + 1}</td>
                <td>{book.judul}</td>
                <td>{book.penerbit}</td>
                <td>{book.deskripsi}</td>
                <td>
                  <button className="button is-small is-info">Edit</button>
                  <button className="button is-small is-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookList;
