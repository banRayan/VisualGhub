import React from 'react'
import { Link } from 'react-router-dom';
import { FiArchive, FiLogIn, FiUser } from "react-icons/fi"

import { Container, Header, Login } from './styles';

const Menu = () => {
    return (
        <Container>
            <Login>
                <Link to={'/'}>
                    <Header>
                        <FiLogIn />
                    </Header>
                </Link>
            </Login>
            <Link to={'/profile'}>
                <Header>
                    <FiUser />
                </Header>
            </Link>
            <Link to={'/home'}>
                <Header>
                    <FiArchive />
                </Header>
            </Link>
        </Container>
    )
}

export default Menu;