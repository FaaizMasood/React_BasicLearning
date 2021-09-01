import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  // Props is used to pass down attributes from the app.js file down to component level , (accept data from outside )in the form for key value pairs
  // use state always return 2 elements
  // first arg is the current state, second is a func to assign a new value (react will re-execute and re-evaluate and new value in rendered)
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // ** function to overlay when button is clicked **/
  function deleteHandler() {
    //console.log(props.text);
    // switch the state, with useState which allows us to register different states and react will react to changes in state and render based on the changes
    setModalIsOpen(true);
  }

  // function to close the modal
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <span> A span</span>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
