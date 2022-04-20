import './styles.scss';

import { FiChevronLeft } from 'react-icons/fi';

import { useNavigate } from 'react-router-dom';

export const GoBack = () => {

    const navigate = useNavigate();

    return (
        <div className="header">
            <div className="backIcon" onClick={() => navigate(-1)}>
                <FiChevronLeft
                    color="#8d8a8a"
                />
            </div>
        </div>
    );
}