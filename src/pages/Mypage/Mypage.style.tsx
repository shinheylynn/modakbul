import styled from 'styled-components';

export const Allwrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 60px;
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
  //margin-right: 5px;
`;

export const ImgBtn = styled.img`
  width: 50px;
  margin-bottom: 5px;
  cursor: pointer;
`;

export const Title = styled.p`
  margin-bottom: 5px;
`;

export const Count = styled.p``;

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

export const PostingTitleWrap = styled.div`
  margin-bottom: 10px;
`;

export const CountPosting = styled(PostingTitle)`
  margin-left: 5px;
`;

// export const MyPosting = styled.div`
//   width: 150%;
//   height: 47.5%;
//   //width: 400px;
//   overflow: auto;
//   border: 1px solid #847a7a58; //** 레이아웃 작업 완료시 삭제 **/
//   border-radius: 4px;
//   padding: 10px;
//   ::-webkit-scrollbar {
//     display: none; /* Chrome, Safari, Opera*/
//   }
// `;

// export const EmptyWrap = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   cursor: pointer;
// `;

// export const EmptyList = styled.img`
//   width: 25%;
//   margin-bottom: 20px;
// `;

// export const AddPosting = styled.p`
//   font-size: 15px;
//   font-weight: 500;
//   text-align: center;
//   position: absolute;
//   bottom: 45%;
//   right: 42%;
//   color: black;
// `;

// export const ThumbnailWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-gap: 10px;
//   justify-items: center;
// `;

// export const Thumbnail = styled.img`
//   width: 200px;
//   /* border: 1px solid #b1b1b159; */
//   border-radius: 4px;
//   padding: 10px;
// `;
