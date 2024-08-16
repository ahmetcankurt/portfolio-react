import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        <h2>{project.title}</h2>
        <img src={project.image} alt={project.alt} className="modal-image" />
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default Modal;
