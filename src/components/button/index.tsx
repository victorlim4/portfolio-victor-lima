import './styles.scss';

interface IProps {
    text: string,
    onHandleSubmit: () => void
}

export const Button = (props: IProps) => {
    return (
        <div className="button">
            <button onClick={props.onHandleSubmit}>
                {
                    props.text
                }
            </button>
        </div>
    )
}