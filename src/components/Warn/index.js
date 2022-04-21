import React from 'react';
import { Container, IconContainer, Message } from './styles';
import { FiAlertCircle } from "react-icons/fi";

const Warn = ({children}) => {
    return (
        <Container>
            <IconContainer>
                <h1><FiAlertCircle/></h1>
            </IconContainer>
            <Message>{children}</Message>
        </Container>
    )
}

export default Warn;