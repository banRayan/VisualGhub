import React, { useEffect, useState } from 'react';
import { Container, Picture, UserContainer } from './styles';

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
        <Container>
            <Picture></Picture>
            <UserContainer>
                <h1>{userInfo.name}</h1>
                <p>{userInfo.login}</p>
            </UserContainer>
        </Container>
    )
}

export default User;