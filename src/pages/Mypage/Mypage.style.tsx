import styled from 'styled-components';

export const Allwrap = styled.div`
  display: flex;
  justify-content: center;
  width: 94%;
  height: 100%;
`;

export const MypageNavWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid #ededed;
  padding-bottom: 20px;
  padding-top: 20px;
`;

export const MypageCategory = styled.p`
  cursor: pointer;
`;

export const contentsWrap = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const UserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px #847a7a58;
  border-radius: 4px;
  padding: 30px;
  width: 100%;
`;

export const ProfilImg = styled.img`
  border-radius: 70%;
  border: 1px solid #b1b1b159;
  width: 100px;
  font-style
`;

export const Nickname = styled.p`
  margin: 15px;
  font-size: xx-large;
  font-weight: 500;
`;

export const Introduce = styled.p`
  margin: 15px;
  font-weight: 300;
`;

export const ModifyUserInfoBtn = styled.button`
  margin: 15px;
  border-radius: 4px;
  border: solid 1px #847a7a58;
  padding: 5px 15px;
  background-color: white;
  cursor: pointer;
`;

export const Hr = styled.hr`
  width: 190px;
  height: 1px;
  border: 0;
  background: #847a7a58;
`;

export const CountScrapeAndLikeWrap = styled.div`
  display: flex;
  padding-top: 10px;
  width: 100%;
  justify-content: space-evenly;
`;

export const ScrapeWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgBtn = styled.img`
  width: 50px;
  margin-bottom: 5px;
  cursor: pointer;
`;

export const Title = styled.p`
  margin-bottom: 5px;
`;

export const LikeWrap = styled(ScrapeWrap)``;

export const PostingWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 60px;
`;

export const PostingTitle = styled.span`
  margin-bottom: 10px;
  font-size: larger;
  font-weight: 500;
`;

export const ListWrap = styled.div`
  width: 100%;
`;

export const PostingTitleWrap = styled.div`
  margin-bottom: 10px;
`;

export const CountPosting = styled(PostingTitle)`
  margin-left: 5px;
`;
