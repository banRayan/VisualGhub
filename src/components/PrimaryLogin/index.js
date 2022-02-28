import React, { useState } from 'react';
import { Title, Container, HeadingContainer, Heading, Description, Logo, InputContainer, InputField, Input, ButtonContainer, Icon, Button, Paragraph, Link } from './styles';

import { FiGithub } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth';

export const PrimaryLogin = () => {
  const [inputUsername, setInputUsername] = useState([]);
  const { setUsername } = useAuth();

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputUsername(e.target.value)
  } 

  const handleLoginButtonClick = () => {
    try{
      if (inputUsername === '') {
        alert('insira um nome')
      }else{
        setUsername(inputUsername)
        navigate('/home')
      }
    }catch(error){
      alert(error.mesage)
    }
  }

  return (
    <Container>
        <HeadingContainer>
            <Heading>
                <Title>Enter your Github<br/> username</Title>
                <Description>With your username we can access your gitHub data</Description>
            </Heading>
            <Logo>VisualGit</Logo>
        </HeadingContainer>
        <InputContainer>
            <InputField>
              <Icon><FiGithub/></Icon>
              <Input 
                type='text'
                className='input'
                placeholder='username'
                onChange={handleInputChange}
                value={inputUsername}
              ></Input>
            </InputField>
        </InputContainer>
        <ButtonContainer>
          <Button
            onClick={handleLoginButtonClick}
          >Access</Button>
          <Paragraph>Don't have an account?<br/><Link target="_blank" rel="noreferrer" href="https://github.com/">Register Github</Link></Paragraph>
        </ButtonContainer>
    </Container>
  )
}
