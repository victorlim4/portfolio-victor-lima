import React from 'react';
import './styles.scss';

import { ProfilePic } from '../../components/profilePic';
import { Social } from '../../components/social';
import { Button } from '../../components/button';

export const Home = () => {

    const organizationUrl: string = 'https://github.com/callisto4gency'

    return (
        <div className="container">
            <div className="profile">
                <ProfilePic 
                    url="https://avatars.githubusercontent.com/u/45642533?v=4"
                />

                <h1 className="name">Victor Lima</h1>

                <span className="workOf">Designer & senior developer</span>

                <p className="description">
                Senior Developer at <a className="url" href={organizationUrl}>@callisto4gency</a>, Coffee Lover, 
                A.I Enthusiast and Explorer of new technologies and software 
                solutions development.
                </p>

                <Social 
                    facebook="https://fb.com/victorlima278903"
                    instagram="https://instagram.com/_victor_lima"
                    linkedin="https://www.linkedin.com/in/victor-lima-68b67420a/"
                />

                <Button
                    linkTo='/contact'
                    text="Contratar"
                    styled="normal"
                    onHandleSubmit={() => alert("contratar")}
                />
            </div>
        </div>
    );
}