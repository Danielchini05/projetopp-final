// CommentForm.js
import React, { useState } from "react";

function CommentForm({ onSubmit }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(comment);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione um comentário"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default CommentForm;
