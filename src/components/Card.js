// Card.js
import React, { useState } from 'react';
import styled from 'styled-components';

// 단일 카드 컴포넌트
const Card = ({ title, subtitle, members, nick, initialHeartCount }) => {
  const [isHearted, setIsHearted] = useState(false);
  const [heartCount, setHeartCount] = useState(initialHeartCount);

  const toggleHeart = () => {
    setIsHearted((prev) => !prev);
    setHeartCount((prev) => (isHearted ? prev - 1 : prev + 1));
  };

  return (
    <Post>
      <Upper />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Members>{members}</Members>
      <Bottomcontainer>
        <Heart
          src={isHearted ? '/RedHeart.png' : '/BlankHeart.png'}
          alt="Heart"
          onClick={toggleHeart}
        />
        <Count>{heartCount}</Count>
        <Nick>{nick}</Nick>
      </Bottomcontainer>
    </Post>
  );
};

// 여러 개의 카드를 렌더링하는 CardList 컴포넌트
const CardList = () => {
  // mock data 배열 정의
  const cards = [
    { title: '게임명 1', subtitle: '게임 설명 1', members: '인원수: 4명', nick: '별명1', initialHeartCount: 5 },
    { title: '게임명 2', subtitle: '게임 설명 2', members: '인원수: 5명', nick: '별명2', initialHeartCount: 10 },
    { title: '게임명 3', subtitle: '게임 설명 3', members: '인원수: 6명', nick: '별명3', initialHeartCount: 15 },
    { title: '게임명 4', subtitle: '게임 설명 4', members: '인원수: 7명', nick: '별명4', initialHeartCount: 20 },
    { title: '게임명 5', subtitle: '게임 설명 5', members: '인원수: 8명', nick: '별명5', initialHeartCount: 25 },
    { title: '게임명 6', subtitle: '게임 설명 6', members: '인원수: 9명', nick: '별명6', initialHeartCount: 30 },
  ];

  return (
    <CardContainer>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          members={card.members}
          nick={card.nick}
          initialHeartCount={card.initialHeartCount}
        />
      ))}
    </CardContainer>
  );
};

export default CardList;

// 스타일드 컴포넌트 정의
const Post = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid #ddd;
  background-color: #fff;
`;

const Upper = styled.div`
  height: 250px;
  background: #241;
`;

const Title = styled.h2`
  margin-top: 10px;
  font-size: 16px;
  font-family: freetandard;
  padding-left: 10px;
  padding-bottom: 0px;
  margin-bottom: 0px;
`;

const Subtitle = styled.p`
  margin-top: 4px;
  padding-left: 10px;
  font-family: freetandard;
  color: #555;
  margin-bottom: 0px;
`;

const Members = styled.div`
  margin-top: 4px;
  padding-left: 10px;
`;

const Bottomcontainer = styled.div`
  margin-top: 23px;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 0px;
`;

const Heart = styled.img`
  width: 24px;
  height: 24px;
  padding-left: 15px;

`;

const Count = styled.p`
  width: 19px;
  height: 10px;
  text-align: center;
  font-size: 14px;
  margin-left: 5px;
  margin-right: 6px;
  padding-bottom: 8px;

`;

const Nick = styled.p`
  width: 73px;
  height: 17px;
  font-size: 17px;
  color: black;
  font-weight: bold;

`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
`;


// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { getAllPostsAPI } from '../API/postAPI'; 

// // Card component
// const Card = ({ title, method, count, likes }) => {
//   const [isHearted, setIsHearted] = useState(false);
//   const [heartCount, setHeartCount] = useState(likes);

//   const toggleHeart = () => {
//     setIsHearted((prev) => !prev);
//     setHeartCount((prev) => (isHearted ? prev - 1 : prev + 1));
//   };

//   return (
//     <Post>
//       <Upper />
//       <Title>{title}</Title>
//       <Subtitle>{method}</Subtitle>
//       <Members>{count}</Members>
//       <Bottomcontainer>
//         <Heart
//           src={isHearted ? '/RedHeart.png' : '/BlankHeart.png'}
//           alt="Heart"
//           onClick={toggleHeart}
//         />
//         <Count>{heartCount}</Count>
//       </Bottomcontainer>
//     </Post>
//   );
// };

// // CardList component
// const CardList = () => {
//   const [cards, setCards] = useState([]);

//   // Fetch posts from server
//   const fetchPosts = async () => {
//     try {
//       const response = await getAllPostsAPI(); 
//       setCards(response.data);
//     } catch (error) {
//       console.error("Error fetching posts data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchPosts(); 
//   }, []);

//   return (
//     <CardContainer>
//       {cards.map((card, index) => (
//         <Card
//           key={index}
//           title={card.title}
//           method={card.method}
//           members={`인원수: ${card.count}명`}
//           likes={card.likes.length}
//         />
//       ))}
//     </CardContainer>
//   );
// };

// export default CardList;

// // Styled components
// const Post = styled.div`
//   width: 400px;
//   height: 400px;
//   border: 1px solid #ddd;
//   background-color: #fff;
// `;

// const Upper = styled.div`
//   height: 250px;
//   background: #241;
// `;

// const Title = styled.h2`
//   margin-top: 10px;
//   font-size: 16px;
//   padding-left: 10px;
// `;

// const Subtitle = styled.p`
//   margin-top: 4px;
//   padding-left: 10px;
//   color: #555;
// `;

// const Members = styled.div`
//   margin-top: 4px;
//   padding-left: 10px;
// `;

// const Bottomcontainer = styled.div`
//   margin-top: 23px;
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// const Heart = styled.img`
//   width: 24px;
//   height: 24px;
//   padding-left: 15px;
// `;

// const Count = styled.p`
//   font-size: 14px;
//   margin-left: 5px;
// `;
  
// const CardContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 16px;
//   justify-content: space-between;
// `;
