import React from "react";
import { connect } from "react-redux";
import { deleteNote } from "../../redux/actions/noteActions";

const NoteItem = ({ note, deleteNote, setEditingNoteId }) => {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>

      <button onClick={() => setEditingNoteId(note.id)}>Edit</button>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  );
};

export default connect(null, { deleteNote })(NoteItem);
