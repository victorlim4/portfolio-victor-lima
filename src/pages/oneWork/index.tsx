//import { useState, useEffect } from 'react';
import { GoBack } from '../../components/goBack';

import './styles.scss';

//import { useParams } from 'react-router-dom';

export const OneWork = () => {

    //let {id} = useParams();

    const work =
        {
            id: 1,
            image: 'https://picsum.photos/200',
            url: '/',
            heading: 'Identidade Visual Callisto',
            description: 'Identidade Visual feita para a agência Callisto'
        }

    return (
        <div className="container">
            <div className="content">
                <GoBack />
                <div className="infos">
                    <img 
                        src={work.image} 
                        alt=""
                        id="image"
                    />
                    <h1 id="heading">{work.heading}</h1>
                    <h1 id="description">{work.description}</h1>
                </div>
            </div>
        </div>
    );
}
