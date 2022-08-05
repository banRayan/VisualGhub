import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth';

import {
  Container,
  HeadingContainer,
  Heading,
  Description,
  Logo,
  InputContainer,
  InputField,
  Input,
  ButtonContainer,
  Icon,
  Button,
  Paragraph,
  Link
} from './styles';

import { FiGithub } from "react-icons/fi";

export const PrimaryLogin = () => {
  const [inputUsername, setInputUsername] = useState([]);
  const { setUsername } = useAuth();

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputUsername(e.target.value)
  }

  const handleLoginButtonClick = () => {
    try {
      if (inputUsername === '' | inputUsername.length === 0) {
        //const inputField = document.querySelector('.Heading')
        //inputField.innerHTML = '* Obrigatório inserir um nome de usuário'
        alert('insira um nome de usuário')

      } else {
        setUsername(inputUsername)
        navigate('/home')
      }
    } catch (error) {
      console.error('error')
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleLoginButtonClick()
    }
  }

  return (
    <Container>
      <HeadingContainer>
        <Logo>Visual Ghub</Logo>
        <Heading >
          <Description>Enter your Github username to access your informations</Description>
        </Heading>
      </HeadingContainer>
      <InputContainer>
        <InputField>
          <Icon><FiGithub /></Icon>
          <Input
            type='text'
            placeholder='username'
            onChange={handleInputChange}
            value={inputUsername}
            onKeyDown={handleKeyDown}
          ></Input>
        </InputField>
      </InputContainer>
      <ButtonContainer>
        <Button
          onClick={handleLoginButtonClick}
        >Access</Button>
        <Paragraph>Don't have an account?<br /><Link target="_blank" rel="noreferrer" href="https://github.com">Register Github</Link></Paragraph>
      </ButtonContainer>
    </Container>
  )
}
