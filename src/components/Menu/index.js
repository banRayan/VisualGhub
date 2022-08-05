import React from 'react';
import { Bar, BoxItem, Brand, Container, Icon, StyledLink, Text } from './styles';
import { FiHome, FiLogOut } from "react-icons/fi";


const Menu = (props) => {

    const { me } = props;
    console.log(me)
    return (
        <Container>
            <Brand />
            <Bar>
                <StyledLink to={'/home'} >
                    <BoxItem>
                        <Icon><FiHome size={22} className="IconStyle" /></Icon>
                        <Text>Home</Text>
                    </BoxItem>
                </StyledLink>
                <StyledLink to={'/'}>
                    <BoxItem>
                        <Icon><FiLogOut size={22} className="IconStyle" /></Icon>
                        <Text>Log out</Text>
                    </BoxItem>
                </StyledLink>

            </Bar>
        </Container>
    )
}

export default Menu;