import styled from 'styled-components';

export const AboutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WelcomeWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BgImgWrapper = styled.div`
  width: 100vw;
`;

export const BgImg = styled.img`
  border-bottom-left-radius: 200px;
  border-bottom-right-radius: 200px;
  opacity: 75%;
  object-fit: cover;
  width: 100%;
  height: 100%;
  height: 80vh;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
  height: 40vh;
  gap: 4vh;
  background-color: orange;
  opacity: 90%;
  border-radius: 100px;
  color: white;
  text-shadow: 2px 2px 2px gray;
`;

export const AboutTitle = styled.h1`
  font-size: 2vw;
  line-height: 5vh;
`;

export const AboutSubTitle = styled.h3`
  font-size: 1vw;
  line-height: 3vh;
`;

export const DownArrowBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -7vh;
  gap: 5px;
`;

export const DownArrow = styled.div`
  font-size: 2.2vw;
  color: orange;
  text-shadow: 2px 2px 2px #1e5663;
`;

export const AboutDescWrapper = styled.div`
  margin: 10vh 0;
  width: 20vw;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1vw;
  border-radius: 20px;
  background-color: #60848d;
  color: white;
  text-shadow: 1px 1px 1px black;
`;

export const AboutDesc = styled.div``;
