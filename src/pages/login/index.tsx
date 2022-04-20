import React, { useState } from 'react';
import './styles.scss';

import { Input } from '../../components/input';
import { Button } from '../../components/button';

import { GoBack } from '../../components/goBack';

export const Login = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <div className="login">
            <div className="form">
                <GoBack />
                    <Input
                        onChange={setEmail}
                        placeholder="Email"
                        value={email}
                    />
                    <Input
                        onChange={setPassword}
                        placeholder="Senha"
                        value={password}
                    />

                <Button
                    linkTo='none'
                    styled="normal"
                    onHandleSubmit={() => alert('logado')}
                    text="Entrar"
                />
            </div>
        </div>
    )
}