import React from 'react';
import { useAuth } from '../../context/Auth';

import {
    Container,
    UserBar,
    Picture,
    UserContainer
} from './styles';

const User = () => {
    const { data } = useAuth();

    return (
        <Container>
            <UserBar>
                <Picture src={data.avatar_url} alt="dd"></Picture>
                <UserContainer>
                    <h1>{data.name}</h1>
                    <p>{data.login}</p>
                </UserContainer>
            </UserBar>
        </Container>
    )
}

export default User;