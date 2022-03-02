import React, { ChangeEvent } from 'react';
import './styles.scss';
interface IProps {
    onChange: (e:any) => void,
    placeholder: string,
    value: string,
}

export const Message = (props: IProps) => {

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => 
        props.onChange(e.target.value)

    return (
        <div className="message">
            <textarea 
                placeholder={props.placeholder}
                onChange={handleChange}
                value={props.value}
            />
        </div>
    );
}