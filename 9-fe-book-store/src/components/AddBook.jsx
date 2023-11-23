import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [judul, setJudul] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const navigate = useNavigate();

  const saveBook = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3333/book", {
        judul,
        penerbit,
        deskripsi,
      });
      navigate("/");
    } catch (error) {
      console.log("Ada error" + error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <h1>Form Tambah Buku</h1>
        <hr />
        <form onSubmit={saveBook}>
          <div className="field">
            <label className="label">Judul</label>
            <input
              type="text"
              className="input"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              placeholder="Judul Buku"
            />
          </div>
          <div className="field">
            <label className="label">Penerbit</label>
            <input
              type="text"
              className="input"
              value={penerbit}
              onChange={(e) => setPenerbit(e.target.value)}
              placeholder="Penerbit"
            />
          </div>
          <div className="field">
            <label className="label">Deskripsi Buku</label>
            <textarea
              name="deskripsi"
              className="textarea"
              placeholder="Deskripsi Buku"
              onChange={(e) => setDeskripsi(e.target.value)}
            >
              {deskripsi}
            </textarea>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
