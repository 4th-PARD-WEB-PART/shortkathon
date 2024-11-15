import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Logo from '../img/Logo.png';
import { Container, LogoImage, InputContainer, Input, ButtonContainer, RegisterButton, LoginButton } from './LoginPage'; // LoginPage의 스타일 컴포넌트 가져오기

const RegisterPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to navigate to the login page
  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the /login route
  };

  return (
    <Container>
      <LogoImage src={Logo} alt="Logo" />
      <InputContainer>
        <Input placeholder="닉네임" />
        <Input placeholder="아이디" />
        <Input type="password" placeholder="비밀번호" />
      </InputContainer>
      <ButtonContainer>
        <RegisterButton>회원가입</RegisterButton>
        <LoginButton onClick={handleLoginClick}>가입</LoginButton>
      </ButtonContainer>
    </Container>
  );
};

export default RegisterPage;
