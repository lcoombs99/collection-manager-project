import * as ReactDom from 'react-dom';

const ModalBackdrop = () => {
  return <div className="modal-backdrop"/>;
};

const ConfirmationModal = props => {
  return (
    <div className="modal">
      <p>Are you sure you want to delete this entry?</p>
      <button className="button" onClick={props.onCancel}>Cancel</button>
      <button className="button-warning" onClick={props.onConfirm}>Delete</button>
    </div>
  );
};

function Modal(props) {
  return (
    <>
      {ReactDom.createPortal(
        <ModalBackdrop/>,
        document.getElementById('modal-backdrop-root')
      )}

      {ReactDom.createPortal(
        <ConfirmationModal onCancel={props.onCancel} onConfirm={props.onConfirm}/>,
        document.getElementById('modal-overlay-root')
      )}
    </>
  );
}

export default Modal;