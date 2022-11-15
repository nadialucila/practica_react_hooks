import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginPage = () => {

    const {user, setUser} = useContext(UserContext);

    return (
        <>
            <h1> Login </h1>
            <hr/>
            <button className='btn btn-primary'
                    onClick={ () => setUser({
                        id: 12,
                        name: 'nadia'
                    }) }>
                Login
            </button>
        </>
    );
}
