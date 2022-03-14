import React from 'react'
import { Link } from 'react-router-dom';
import { FiList } from "react-icons/fi";
import { FiUser } from "react-icons/fi"
import { FiArchive } from "react-icons/fi"

import { Container, Header } from './styles';

const Menu = () => {
    return (
        <Container>
            <Link to={'/profile'}>
                <Header>
                    <FiUser />
                </Header>
            </Link>
            <Header>
                <FiArchive />
            </Header>
        </Container>
    )
}

export default Menu;