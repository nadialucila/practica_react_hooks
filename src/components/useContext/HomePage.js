import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const HomePage = () => {

    const {user} = useContext(UserContext);

    return (
        <>
            <h1> Home </h1>
            <hr/>
        </>
    );
}
