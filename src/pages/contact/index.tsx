import { useState } from 'react';
import { Input } from '../../components/input';
import './styles.scss';

import { FiChevronLeft } from 'react-icons/fi';
import { Button } from '../../components/button';
import { useNavigate } from 'react-router-dom';
import { Message } from '../../components/message';

export const Contact = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const navigate = useNavigate();

    return (
        <div className="contact">
            <div className="form">
                <div className="header">
                    <div className="backIcon">
                        <FiChevronLeft 
                            onClick={() => navigate(-1)}
                            color="#8d8a8a"
                        />
                    </div>
                </div>
                <Input 
                    onChange={setName}
                    placeholder="Seu Nome"
                    value={name}
                />
                <Input
                    onChange={setEmail}
                    placeholder="Seu Email"
                    value={email}
                />
                <Message 
                    placeholder='Digite aqui sua mensagem'
                    onChange={setMessage}
                    value={message}
                />

                <Button
                    linkTo='none'
                    styled="minimal"
                    onHandleSubmit={() => alert('mensagem enviada')}
                    text="Enviar Mensagem"
                />
            </div>
        </div>
    );
}