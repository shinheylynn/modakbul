import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
`;

export const TitleBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
  height: auto;
  color: #f0f0f0;
  text-shadow: 3px 4px 7px rgb(81, 104, 105);
  position: relative;
`;

export const TitleImg = styled.img`
  object-fit: cover;
  border-bottom-left-radius: 200px;
  border-bottom-right-radius: 200px;
  width: 100%;
  height: 350px;
  opacity: 80%;
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 300%;
  position: absolute;
  top: 90px;
`;

export const SubTitle = styled.h3`
  font-size: 150%;
  position: absolute;
`;

export const DescriptionBox = styled.div`
  margin-top: 20px;
  position: absolute;
  bottom: 80px;
`;

export const Description = styled.h4``;
