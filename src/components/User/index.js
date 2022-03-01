import React from 'react';
import { useAuth } from '../../context/Auth';
import { Container, Picture, UserContainer } from './styles';

const User = () => {
    const { data } = useAuth();

    return (
        <Container>
            <Picture src={data.avatar_url} alt="dd"></Picture>
            <UserContainer>
                <h1>{data.name}</h1>
                <p>{data.login}</p>
            </UserContainer>
        </Container>
    )
}

export default User;