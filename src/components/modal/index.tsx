import './styles.scss';

interface IProps {
    image: string,
    show: boolean,
    onClose: () => void
}

export const Modal = (props: IProps) => {
    return (
        <div 
            className={`modal ${props.show === false && "modal-off"}`}
        >
            <div className="modal-header">
                <button onClick={props.onClose}>X</button>
            </div>
            <img src={props.image} alt="modal-image" />
        </div>
    );
}