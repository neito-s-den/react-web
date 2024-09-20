import React, { useState } from "react";
import styles from "./ConfirmationModal.module.css";

const ConfirmationModal = ({ modalState }) => {
  if (!modalState.isOpen) return null;

  return (
    <>
      <div
        className={styles.root}
        onClick={() => {
          modalState.onClose();
        }}
      >
        <div className={styles.body}></div>
      </div>
    </>
  );
};

export default ConfirmationModal;
