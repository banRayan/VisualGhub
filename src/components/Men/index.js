import React from 'react';
import { Bar, BoxItem, Container, Item } from './styles';
import { FiMenu, FiUser, FiLayers } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Men = () => {
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
        </Container>
    )
}

export default Men;