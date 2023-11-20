import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

export default function CreateArea(props) {
  const [isExpanded, setisExpanded] = useState(false);

  const [Note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    props.add(Note);
    setNote((prev) => ({
      ...prev,
      title: "",
      content: "",
    }));
    e.preventDefault();
  }

  function handleSwitch() {
    setisExpanded(true);
  }

  return (
    <form className="create-note ">
      {isExpanded && (
        <input
          placeholder="Text ..."
          name="title"
          value={Note.title}
          onChange={(e) => handleChange(e)}
        />
      )}
      <textarea
        rows={isExpanded ? 3 : 1}
        onClick={handleSwitch}
        placeholder="content .."
        name="content"
        value={Note.content}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleSubmit}>
        <IoMdAddCircle />
      </button>
    </form>
  );
}
