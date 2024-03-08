import { IoCloseSharp } from "react-icons/io5";

interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (open : boolean) => boolean | void;
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({modalOpen, setModalOpen, children}) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`} role="dialog">
    <div className="modal-box">

      <label 
        onClick={() => setModalOpen(false)}
        className="btn"><IoCloseSharp size={30} className="tadytototo"></IoCloseSharp>
      </label>
        {children}

  </div>
</div>
  )
}

export default Modal