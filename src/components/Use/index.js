import React from 'react';
import { useAuth } from '../../context/Auth';
import {  
    Container,
    UserBar,
    BoxAvatar,
    Avatar,
    UserContainer, 
    BoxIcon,
    Icon,
    Name,

} from './styles';
import { FiChevronDown } from "react-icons/fi";

const Use = () => {

    const { data } = useAuth();
    return(
        <Container>
            <UserBar>
                <BoxAvatar>
                    <Avatar src={data.avatar_url} />
                </BoxAvatar>
                <UserContainer>
                    <Name>{data.login}</Name>
                    <BoxIcon>
                        <Icon><FiChevronDown/></Icon>
                    </BoxIcon>
                </UserContainer>
            </UserBar>
        </Container>
    )
}

export default Use;