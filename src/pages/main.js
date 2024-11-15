// import React from 'react';
// import Appbar from '../components/Appbar';
// import Card from '../components/Card';
// import styled from 'styled-components';

// function Main() {
//   return (
//     <Container>
//       <Appbar />
//       <CardContainer>
//         <Card />
//       </CardContainer>
//     </Container>
//   );
// }

// export default Main;

// // 스타일드 컴포넌트 정의
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const CardContainer = styled.div`
//   margin-top: 200px; /* Appbar 아래에 적당한 여백을 추가 */
//   margin-left: 105px;
//   margin-right:105px;
// `;
import React from 'react';
import Appbar from '../components/Appbar';
import Card from '../components/Card';
import styled from 'styled-components';

const Main = () => {
  const handleImageClick = () => {
    window.open('http://localhost:3000/detail', '_blank', 'noopener,noreferrer');
  };

  return (
    <Container>
      <Appbar />
      <CardContainer>
        <Card />
        <ImageContainer>
          <img 
            src="/path-to-your-image.jpg" 
            alt="Clickable" 
            onClick={handleImageClick} 
            style={{ cursor: 'pointer', width: '300px', height: '200px' }} 
          />
        </ImageContainer>
      </CardContainer>
    </Container>
  );
};

export default Main;

// 스타일드 컴포넌트 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.div`
  margin-top: 200px; /* Appbar 아래에 적당한 여백을 추가 */
  margin-left: 105px;
  margin-right: 105px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
