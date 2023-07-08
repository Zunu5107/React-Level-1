import React from "react";

export default function TodoBoxComment({ title, content }) {
  return (
    <div>
      <h2 className="big-label">{title}</h2>
      <label className="todo-label">{content}</label>
    </div>
  );
}
