import './Modal.css'

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) {
        setTimeout(() => 0, 300)
        return null
    }

    return (
        <div className="modal-backdrop">
            <div className={ `modal ${isOpen? 'modal-show' : 'modal-hide'}` }>
                <button
                    onClick={onClose}
                    className="close-button">
                    <i className='bi bi-x'></i>
                </button>
                {children}
            </div>
        </div>
    )
}

export function ModalHeader({ children }) {
    return (
        <div className='modal-header'>
            {children}
        </div>
    )
}

export function ModalBody({ children }) {
    return (
        <div className='modal-body'>
            { children }
        </div>
    )
}

export function ModalFooter({ children }) {
    return (
        <div className='modal-footer'>
            { children }
        </div>
    )
}
