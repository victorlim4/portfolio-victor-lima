import React, { ChangeEvent } from 'react';
import './styles.scss';

interface IProps {
    onChange: (e:any) => void,
    placeholder: string,
    value: string,
    type?: string | 'text'
}

export const Input = (props: IProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
        props.onChange(e.target.value)

    return (
        <div className="inputContainer">
            <input
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                onChange={handleChange}
                className="input"
            />
        </div>
    )
}