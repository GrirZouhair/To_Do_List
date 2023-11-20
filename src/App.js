import React, { useState } from "react";
import Header from "./Component/Header";
import CreateArea from "./Component/CreateArea";
import Note from "./Component/Note";
import Footer from "./Component/Footer";

export default function App() {
  const [note, setnote] = useState([]);

  function onAdd(newParam) {
    setnote((prev) => [...prev, newParam]);
  }
  function deleteNote(id) {
    setnote((prev) => {
      return prev.filter((item, index) => index !== id);
    });
  }

  return (
    <>
      <Header />
      <CreateArea add={onAdd} />
      {note.map((value, index) => (
        <Note id={index} value={value} key={index} onDelete={deleteNote} />
      ))}
      <Footer />
    </>
  );
}
