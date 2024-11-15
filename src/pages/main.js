import React from 'react';
import Appbar from '../components/Appbar';
import Card from '../components/Card';
import styled from 'styled-components';

function Main() {
  return (
    <Container>
      <Appbar />
      <CardContainer>
        <Card />
      </CardContainer>
    </Container>
  );
}

export default Main;

// 스타일드 컴포넌트 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.div`
  margin-top: 200px; /* Appbar 아래에 적당한 여백을 추가 */
  margin-left: 105px;
  margin-right:105px;
`;
