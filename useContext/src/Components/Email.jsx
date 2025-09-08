import React, { useContext } from 'react';
import { UserContext } from '../App';

function Email() {

    const user = useContext(UserContext);

    return <p>{user.email}</p>;
}

export default Email;