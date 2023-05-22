import styled from 'styled-components';

export const AllWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ThumbnailImg = styled.img`
  width: 100%;
  height: 300px;
`;

export const TitleWrap = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 40px;
  margin-bottom: 20px;
  width: 80%;
`;

export const SubTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: solid 1px #bfbfbf;
`;

export const UserInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #bfbfbf;
`;

export const SliderItem = styled.div`
  width: 100%;
  height: 100%;
`;

export const PostingImg = styled.img`
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 50px;
  font-weight: 600;
`;

export const UserImg = styled.img`
  width: 40px;
  border-radius: 70%;
  margin-right: 20px;
`;

export const UserNickname = styled.p``;

export const Scrape = styled.img`
  width: 40px;
  cursor: pointer;
`;

export const Like = styled(Scrape)`
  margin-right: 20px;
`;

export const PostingWrap = styled.div`
  display: flex;
  flex-direction: row;
  //overflow: scroll;
`;

export const PostingImgWrap = styled.div`
  width: 60%;
  height: 100%;
  margin-right: 10px;
`;

export const TextAndMapWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 40px;
`;

export const MainTextWrap = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

export const MainText = styled.div``;

export const MapWrap = styled.div`
  display: flex;
  justify-content: center;
`;
