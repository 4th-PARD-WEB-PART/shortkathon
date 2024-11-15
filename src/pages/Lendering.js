import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styled from 'styled-components';
import Logo from '../img/Logo.png'; // Logo 이미지 import
import { ButtonContainer, LogoImage } from './LoginPage';

const Lendering = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle button click and navigate to main page
  const handleStartClick = () => {
    navigate('/main'); // Navigate to the /main route
  };

  return (
    <Container>
      <LogoImage src={Logo} alt="Logo" /> {/* src에 Logo 이미지 적용 */}
      <Paragraph>"앞으로도, 뒤로도 라포형성은 포라포에서!"</Paragraph>
      <ButtonContainer>
        <LoginButton onClick={handleStartClick}>시작하기</LoginButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 673px;
  height: 227px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Paragraph = styled.div`
  width: 600px;
  height: 25px;
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  color: #00570A;
  font-family: 'freetandard', sans-serif; /* 원하는 폰트 적용 */
  margin-bottom: 20px; /* 텍스트와 버튼 사이의 간격 */
`;

const LoginButton = styled.button`
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
  margin-left: 30px;
`;

export default Lendering;
