import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    Button,
    Container,
    DescriptionContainer,
    Title,
    Message,
    ErrorDescription,
    ErrorContainer,
} from './styles';

const Error = () => {

    const navigate = useNavigate();

    return(
        <Container>
           <ErrorContainer>
               <DescriptionContainer>
                   <Title>Opps!</Title>
                   <Message>Page not found</Message>
                        <Button onClick={() => navigate('/')}><p>Try Again</p></Button>
               </DescriptionContainer>
               <ErrorDescription>404</ErrorDescription>
           </ErrorContainer>
        </Container>
    )
}

export default Error;