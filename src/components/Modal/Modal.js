import { FaTimes } from 'react-icons/fa'
import './Modal.scss';

export default function Modal({ active, setActive, children, handleClose }) {

    return (
        <div className={active ? 'modal active' : "modal"} onClick={() => setActive(false)}>
            <div className="modal_content" onClick={(e) => e.stopPropagation()}>
                <span className='modal_close' onClick={handleClose}><FaTimes size={25} style={{ color: '#fffff' }} /></span>
                {children}
            </div>
        </div>


    )
}