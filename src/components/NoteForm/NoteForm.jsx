import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addNote, updateNote } from "../../redux/actions/noteActions";

const NoteForm = ({
  notes,
  addNote,
  updateNote,
  editingNoteId,
  setEditingNoteId,
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingNoteId !== null) {
      const noteToEdit = notes.find((note) => note.id === editingNoteId);

      if (noteToEdit) {
        setTitle(noteToEdit.title);
        setContent(noteToEdit.content);
      }
    } else {
      setTitle("");
      setContent("");
    }
  }, [editingNoteId, notes]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;

    if (editingNoteId !== null) {
      updateNote({
        id: editingNoteId,
        title,
        content,
      });
      setEditingNoteId(null);
    } else {
      addNote({
        id: Date.now(),
        title,
        content,
      });
    }

    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit">
        {editingNoteId !== null ? "Update note" : "Add note"}
      </button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  notes: state,
});

export default connect(mapStateToProps, { addNote, updateNote })(NoteForm);
