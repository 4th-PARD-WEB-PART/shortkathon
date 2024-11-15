import React from 'react';
import styled from 'styled-components';
import DetailImageSrc1 from '../img/Detail.png';
import DetailImageSrc2 from '../img/Detail2.png';
import PardButtonSrc from '../img/PardButton.png';
import Appbar from '../components/Appbar';

const GameDetails = () => {
  return (
    <Container>
        <Appbar/>
      <DetailImage src={DetailImageSrc1} alt="Detail 1" width="752px" height="2786px" />
      <ImageGallery>
        <DetailImage src={DetailImageSrc2} alt="Detail 2" width="420px" height="342px" />
        <PardButtonWrapper>
          <PardButton src={PardButtonSrc} alt="Pard Button" width="420px" height="100px" />
        </PardButtonWrapper>
      </ImageGallery>
    </Container>
  );
};

export default GameDetails;

const Container = styled.div`
margin-left: 150px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  border-radius: 8px;
  margin-top:200px;
`;

const ImageGallery = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
`;

const DetailImage = styled.img`
  border-radius: 10px;
`;

const PardButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const PardButton = styled.img`
  border-radius: 10px;
`;
