// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Logo from '../img/Logo.png';
// import { Container, LogoImage, InputContainer, Input, ButtonContainer, RegisterButton, LoginButton } from './LoginPage'; // LoginPage의 스타일 컴포넌트 가져오기
// import { postUserAPI } from '../API/userAPI';

// const RegisterPage = () => {
//   const navigate = useNavigate(); 


//   const handleLoginClick = () => {
//     navigate('/login'); 
//   };

//   return (
//     <Container>
//       <LogoImage src={Logo} alt="Logo" />
//       <InputContainer>
//         <Input placeholder="닉네임" />
//         <Input placeholder="아이디" />
//         <Input type="password" placeholder="비밀번호" />
//       </InputContainer>
//       <ButtonContainer>
//         <RegisterButton>회원가입</RegisterButton>
//         <LoginButton onClick={handleLoginClick}>가입</LoginButton>
//       </ButtonContainer>
//     </Container>
//   );
// };

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../img/Logo.png';
import { Container, LogoImage, InputContainer, Input, ButtonContainer, RegisterButton, LoginButton } from './LoginPage';
import { postUserAPI } from '../API/userAPI';

const RegisterPage = () => {
  const navigate = useNavigate(); 

  // State for form inputs
  const [nickname, setNickname] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle the register button click
  const handleRegisterClick = async () => {
    try {
      // Call the API to register the user
      const userData = { name: nickname, nickname: userId, password };
      const response = await postUserAPI(userData);

      if (response.status === 200) { // Check if the user was successfully created (HTTP 201 Created)
        alert('회원가입이 성공적으로 완료되었습니다!');
        navigate('/login'); // Navigate to the login page after successful registration
      } else {
        throw new Error('회원가입에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  // Function to navigate to the login page
  // const handleLoginClick = () => {
  //   navigate('/login');
  // };

  return (
    <Container>
      <LogoImage src={Logo} alt="Logo" />
      <InputContainer>
        <Input placeholder="닉네임" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        <Input placeholder="아이디" value={userId} onChange={(e) => setUserId(e.target.value)} />
        <Input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
      </InputContainer>
      <ButtonContainer>
        <RegisterButton >회원가입</RegisterButton>
        <LoginButton onClick={handleRegisterClick}>가입</LoginButton>
      </ButtonContainer>
    </Container>
  );
};

export default RegisterPage;
