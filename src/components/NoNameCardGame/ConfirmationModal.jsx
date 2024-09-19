const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => { 
    if (!show) return null;
    
    return (
        <div className="modal">
        <div className="modal-content">
            <div className="modal-header">
            <h2>Are you sure?</h2>
            </div>
            <div className="modal-body">
            <p>Do you really want to do this?</p>
            </div>
            <div className="modal-footer">
            <button onClick={onClose}>Cancel</button>
            <button onClick={onConfirm}>Confirm</button>
            </div>
        </div>
        </div>
    );
}


export default ConfirmationModal;