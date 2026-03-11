import { connect } from "react-redux";
import { deleteNote } from "../../redux/actions/noteActions";

const NoteItem = ({ note, deleteNote }) => {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>

      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  );
};

export default connect(null, { deleteNote })(NoteItem);
