import { MdDelete } from "react-icons/md";

export default function Note(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.value.title}</h1>
      <p>{props.value.content}</p>

      <button onClick={handleDelete}>
        <MdDelete />
      </button>
    </div>
  );
}
