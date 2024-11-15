import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Logo from '../img/Logo.png'; // Logo 이미지 import

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to navigate to the register page
  const handleRegisterClick = () => {
    navigate('/register'); // Navigate to the /register route
  };

  // Function to navigate to the home page ("/") on login
  const handleLoginClick = () => {
    navigate('/'); // Navigate to the home route
  };

  return (
    <Container>
      <LogoImage src={Logo} alt="Logo" /> {/* src에 Logo 이미지 적용 */}
      <InputContainer>
        <Input placeholder="아이디" />
        <Input type="password" placeholder="비밀번호" />
      </InputContainer>
      <ButtonContainer>
        <RegisterButton onClick={handleRegisterClick}>회원가입</RegisterButton>
        <LoginButton onClick={handleLoginClick}>로그인</LoginButton>
      </ButtonContainer>
    </Container>
  );
};

// 스타일 정의
export const Container = styled.div`
  width: 673px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin-top: 197px;
  margin-left: auto;
  margin-right: auto;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const LogoImage = styled.img`  
  width: 673px;
  height: 125px;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  width: 467.79px;
  height: 50px;
  margin-top: 12px;
  border: 1px solid #ddd;
  border-radius: 25px;
  font-size: 16px;
  color: #555;
  outline: none;
  color: #000;
  font-weight: bold;
  font-size: 20px;
  padding-left: 30px;

  &::placeholder {
    color: #B3B3B3;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 300px;
  margin-top: 17px;
`;

export const RegisterButton = styled.button`
  width: 226px;
  height: 50px;
  background-color: #B3B3B3;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 980px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  margin-right: 19px;

  &:hover {
    background-color: #bcbcbc;
  }
`;

export const LoginButton = styled.button`
  width: 226px;
  height: 50px;
  background-color: #00570A;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 980px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  gap: 19px;

  &:hover {
    background-color: #24331b;
  }
`;

export default LoginPage;
