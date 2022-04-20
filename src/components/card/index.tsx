import './styles.scss';
import { useNavigate } from 'react-router-dom';
interface IProps {
    image: string,
    url: string
    id: string,
}

export const Card = (props: IProps) => {

    const navigate = useNavigate();

    const Link = () => navigate(`/${props.id}`);

    return (
        <div className="card" onClick={Link}>
            <img src={props.image} alt="work" />
        </div>
    )
}

//<button onClick={() => alert(props.url)}>Ver Projeto</button>