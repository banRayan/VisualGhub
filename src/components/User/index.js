import React, { useEffect, useState } from 'react';

import './styles.css'


const User = ({user}) => {
    const [userInfo, setUserInfo] = useState([])

    useEffect(()=>{
        const getUser = async() =>{
            let response = await fetch(`https://api.github.com/users/${user}`);
            let data = await response.json();
            setUserInfo(data);
        }
        getUser();
    },[user])

    
    return (
        <div className="user-container">
            <div className="user-picture">
             </div>
            <div className="user-info-container">
                <h1>{userInfo.name}</h1>
                <p>{userInfo.login}</p>
            </div>
        </div>
    )
}

export default User;