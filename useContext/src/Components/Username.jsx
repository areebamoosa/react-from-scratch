import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../App';

function UserName() {

    const user = useContext(UserContext);

    return <p>{user.name}</p>;
}

export default UserName;