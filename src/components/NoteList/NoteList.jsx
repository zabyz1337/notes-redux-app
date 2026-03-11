import React, { useState } from "react";
import { connect } from "react-redux";
import NoteItem from "../NoteItem/NoteItem";
import NoteForm from "../NoteForm/NoteForm";

const NoteList = ({ notes }) => {
  const [editingNoteId, setEditingNoteId] = useState(null);

  return (
    <div>
      <NoteForm
        editingNoteId={editingNoteId}
        setEditingNoteId={setEditingNoteId}
      />

      {notes.length === 0 ? (
        <p>No notes yet</p>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            setEditingNoteId={setEditingNoteId}
          />
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  notes: state,
});

export default connect(mapStateToProps)(NoteList);
