import styled from "styled-components";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoImg from "../img/logo_2.png"
import SearchImg from "../img/search.png"

function Appbar({ isLoggedin, setIsLoggedin }) {
  const navigator = useNavigate();
  const handleHomePage = () => {
    navigator("/");
  };
  const handleLoggedIn = () => {
    alert("로그인");
    navigator("/login");
  };

  const [inputValue,setInputValue] = useState('');

  return (<div>
    <Title1>
      <Logo src={LogoImg} onClick={handleHomePage} />
      <SubTitle2 onClick={handleLoggedIn}>로그인</SubTitle2>
    </Title1>
    <Title2>
      <SearchBox
        type="text"
        className="search-input"
        placeholder="어떤 라포형성을 찾으시나요?"
        icon={SearchImg}
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)}
      />
    </Title2>
    <main>
      <Outlet /></main>
  </div>);
}

export const Title1 = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 80px;
justify-content: space-between;
align-items: center;
position: fixed; /* 화면에 고정 */
left: 0; /* 오른쪽에 위치 */
top: 0%; /* 상단에 위치 */
`;


export const SubTitle1 = styled.div`
display: flex;
font-size: 15px;
width: 141px;
text-align:center;
justify-content: center;
align-items: center;
height:80px;
border: 1px solid black;
margin-left: 105px;
`;

export const SubTitle2 = styled.button`
font-size: 15px;
width: 105px;
height:40px;
background-color: #23750D;
border-radius: 40px;
margin-right: 105px;
border-style: none;
font-size: 20px;
color: white;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
`;

export const Title2 = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 80px;
justify-content: space-between;
align-items: center;
position: fixed; /* 화면에 고정 */
left: 0; /* 오른쪽에 위치 */
top: 80px; /* 상단에 위치 */

`;

export const SearchBox = styled.input`
  position: absolute; /* 부모(container)를 기준으로 정렬 */
  top: 50%; /* 세로 가운데 */
  left: 50%; /* 가로 가운데 */
  transform: translate(-50%, -50%); /* 정확한 중심으로 이동 */
width: 610px;
height: 40px;
border-radius: 40px;
border:1px solid black;
background-image: url(${(props) => props.icon}); /* 아이콘 경로 */
background-repeat: no-repeat; /* 이미지 반복 방지 */
  background-size: 20px 20px; /* 아이콘 크기 조정 */
  background-position: 15px center; /* 위치 (왼쪽 10px, 세로 중앙) */
  padding-left: 45px; /* 텍스트와 아이콘 간격 */
  outline: none;
  font-size:20px;
  color: #BCBCBC;
  &::placeholder {
    color: #BCBCBC; /* 기본 placeholder 색상 */

  }
`;

export const Logo = styled.img`
margin-left: 105px;
`;

export default Appbar;