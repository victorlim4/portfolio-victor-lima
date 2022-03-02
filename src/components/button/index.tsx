import { Link } from 'react-router-dom';
import './styles.scss';

interface IProps {
    text: string,
    onHandleSubmit: () => void,
    styled: string
    linkTo: string,
}

export const Button = (props: IProps) => {
    return (
        <div className={props.styled}>
            {
                props.linkTo === 'none'
                ?
                <button onClick={props.onHandleSubmit}>
                {
                    props.text
                }
                </button>
                :
                <Link to={props.linkTo} className="button">
                {
                    props.text
                }
                </Link>
            }
        </div>
    )
}