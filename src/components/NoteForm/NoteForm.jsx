import { useState } from "react";
import { connect } from "react-redux";
import { addNote } from "../../redux/actions/noteActions";

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) return;

    addNote({
      id: Date.now(),
      title,
      content,
    });

    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit">Add note</button>
    </form>
  );
};

export default connect(null, { addNote })(NoteForm);
