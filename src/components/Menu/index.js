import React from 'react';
import { Bar, BoxItem, Brand, Container, Icon, StyledLink, Text } from './styles';
import { FiUser, FiHome } from "react-icons/fi";


const Menu = () => {
    return (
        <Container>
            <Brand />
            <Bar>
                <StyledLink to={'/Home'}>
                    <BoxItem>
                        <Icon><FiHome size={24} className="IconStyle" /></Icon>
                        <Text>Home </Text>
                    </BoxItem>
                </StyledLink>
                <StyledLink to={'/Profile'}>
                    <BoxItem>
                        <Icon><FiUser size={24} className="IconStyle" /></Icon>
                        <Text>Profile</Text>
                    </BoxItem>
                </StyledLink>

            </Bar>
        </Container>
    )
}

export default Menu;