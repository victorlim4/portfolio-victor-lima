import { useState } from 'react';
import { Input } from '../../components/input';
import './styles.scss';

import { Button } from '../../components/button';
import { Message } from '../../components/message';

import { GoBack } from '../../components/goBack';

export const Contact = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    return (
        <div className="contact">
            <div className="form">
                <GoBack />
                <Input
                    onChange={setName}
                    placeholder="Seu Nome"
                    value={name}
                />
                <Input
                    onChange={setEmail}
                    placeholder="Seu whatsapp ou email"
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