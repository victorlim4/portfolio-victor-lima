import './styles.scss';

interface IProps {
    url: string
}

export const ProfilePic = (props: IProps) => {
    return (
        <div className="profileContainer">
            <img 
                src={props.url} 
                alt="avatar" 
            />
        </div>
    )
}