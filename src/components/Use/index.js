import React from 'react';
import { useAuth } from '../../context/Auth';
import { Avatar, BoxAvatar, BoxIcon, Container, Icon, Name, UserContainer } from './styles';
import { FiChevronDown } from "react-icons/fi";

const Use = () => {

    const { data } = useAuth();
    console.log(data)
    return(
        <Container>
            <BoxAvatar>
                <Avatar src={data.avatar_url} />
            </BoxAvatar>
            <UserContainer>
                <Name>{data.login}</Name>
                <BoxIcon>
                    <Icon><FiChevronDown/></Icon>
                </BoxIcon>
            </UserContainer>
        </Container>
    )
}

export default Use;