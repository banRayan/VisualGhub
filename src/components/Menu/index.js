import React from 'react';
import { Bar, BoxItem, Container, Item } from './styles';
import { FiMenu, FiUser, FiLayers } from "react-icons/fi";
import { Link } from 'react-router-dom';

import Settings from '../Settings';

const Menu = () => {
    return(
        <Container>
            <Bar>
                <BoxItem>
                    <Item><FiMenu/></Item>
                </BoxItem>
                <Link to={'/Profile'}>
                    <BoxItem>
                        <Item><FiUser/></Item>
                    </BoxItem>
                </Link>
                <Link to={'/Home'}>
                    <BoxItem>
                        <Item><FiLayers/></Item>
                    </BoxItem>
                </Link>

            </Bar>
            <Settings/>
        </Container>
    )
}

export default Menu;