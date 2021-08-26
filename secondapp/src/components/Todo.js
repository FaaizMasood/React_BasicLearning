import React from "react";

function Todo(props) {
  // Props is used to pass down attributes from the app.js file down to component level , (accept data from outside )in the form for key value pairs
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <span> A span</span>
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}

export default Todo;
