import styles from "./ConfirmationModal.module.css";

const ConfirmationModal = ({ modalState, onClose }) => {
  if (!modalState.isOpen) return null;

  return (
    <>
      <div
        className={styles.root}
        onClick={() => {
          onClose();
        }}
      >
        <div className={styles.body} onClick={(event) => {event.stopPropagation();}}>
            <div className={styles.title}>{modalState.title}</div>
            <div className={styles.message}>{modalState.message}</div>
            <div className={styles.buttons}>
              <button onClick={() => {onClose(true)}}>Confirm</button>
              <button onClick={() => {onClose(false)}}>Cancel</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
