import './styles.scss';
interface IProps {
    image: string,
    url: string
}

export const Card = (props: IProps) => {
    return (
        <div className="card">
            <img src={props.image} alt="work" />
        </div>
    )
}

//<button onClick={() => alert(props.url)}>Ver Projeto</button>