import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getPostAPI } from '../API/postAPI'; 

// 이미지 import
import squadImage from '../img/squad.png'; // 6번째 이미지 추가
import missionImage from '../img/mission.png';
import visionImage from '../img/vision.png';
import archerImage from '../img/archer.png';
import blackImage from '../img/black.png';
import diceImage from '../img/dice.png';


// Mock image sources array
const mockImages = [
  missionImage,
  visionImage,
  archerImage,
  blackImage,
  diceImage,
  squadImage,
];

// Card component
const Card = ({ title, method, count, likes, imgSrc }) => {
  const [isHearted, setIsHearted] = useState(false);
  const [heartCount, setHeartCount] = useState(likes);

  const toggleHeart = () => {
    setIsHearted((prev) => !prev);
    setHeartCount((prev) => (isHearted ? prev - 1 : prev + 1));
  };

  return (
    <Post>
      <Upper>
        <Image src={imgSrc} alt="Post image" />
      </Upper>
      <Title>{title}</Title>
      <Subtitle>{method}</Subtitle>
      <Members>{count}</Members>
      <Bottomcontainer>
        <Heart
          src={isHearted ? '/RedHeart.png' : '/BlankHeart.png'}
          alt="Heart"
          onClick={toggleHeart}
        />
        <Count>{heartCount}</Count>
      </Bottomcontainer>
    </Post>
  );
};

// CardList component
const CardList = () => {
  const [cards, setCards] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await getPostAPI(); 
      setCards(response.data);
    } catch (error) {
      console.error("Error fetching posts data:", error);
    }
  };

  useEffect(() => {
    fetchPosts(); 
  }, []);

  return (
    <CardContainer>
      {cards.slice(0, 6).map((card, index) => (
        <Card
          key={index}
          title={card?.title}
          method={card?.method}
          count={`인원수: ${card?.count}명`}
          likes={0}
          imgSrc={mockImages[index % mockImages.length]} // 순차적으로 이미지 배정
        />
      ))}
    </CardContainer>
  );
};

export default CardList;

// Styled components
const Post = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid #ddd;
  background-color: #fff;
`;

const Upper = styled.div`
  height: 250px;
  background: #241;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Title = styled.h2`
  margin-top: 10px;
  font-size: 16px;
  padding-left: 10px;
`;

const Subtitle = styled.p`
  margin-top: 4px;
  padding-left: 10px;
  color: #555;
  font-size: 11px;
`;

const Members = styled.div`
  margin-top: 4px;
  padding-left: 10px;
`;

const Bottomcontainer = styled.div`
  margin-top: 23px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Heart = styled.img`
  width: 24px;
  height: 24px;
  padding-left: 15px;
`;

const Count = styled.p`
  font-size: 14px;
  margin-left: 5px;
`;
  
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
`;