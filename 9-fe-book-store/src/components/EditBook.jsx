import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [judul, setJudul] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const { id } = useParams();

  useEffect(() => {
    getBookById();
  }, []);

  const navigate = useNavigate();

  const updateBook = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:3333/book", {
        id,
        judul,
        penerbit,
        deskripsi,
      });
      navigate("/");
    } catch (error) {
      console.log("Ada error" + error);
    }
  };

  const getBookById = async (e) => {
    try {
      const response = await axios.get(`http://localhost:3333/book/${id}`);
      //   console.log(id);

      setJudul(response.data.judul);
      setPenerbit(response.data.penerbit);
      setDeskripsi(response.data.deskripsi);
    } catch (error) {
      console.log("error :" + error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <h1>Form Tambah Buku</h1>
        <hr />
        <form onSubmit={updateBook}>
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
              value={deskripsi}
            ></textarea>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
