import styled from 'styled-components';

export const PostingBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  row-gap: 50px;
  column-gap: 50px;
  margin: 0px 80px 80px 80px;
`;

export const Post = styled.div`
  box-shadow: #6a6d61 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  height: 350px;
  &:hover {
    cursor: pointer;
    transition: 0.3s;
    color: #ffffff;
    background-color: #1a4d59;
    opacity: 80%;
  }
`;

export const PostImgBox = styled.div`
  margin: 5px;
  height: 350px;
`;

export const PostImg = styled.img`
  height: 290px;
  object-fit: cover;
  border-radius: 10px;
  width: 100%;
`;

export const PostTitleBox = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
  width: 80%;
`;

export const PostTitle = styled.div`
  font-size: 130%;
  padding-left: 10px;
`;

export const PostWriterProfileWrapper = styled.div`
  border-top: none;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-bottom: 30px;
  gap: 5px;
`;

export const LikeBox = styled.div`
  width: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Like = styled.img`
  width: 27px;
  position: relative;
  top: 1px;
`;

export const LikeCount = styled.div`
  font-size: 80%;
  position: absolute;
`;

export const ScrapBox = styled.div`
  width: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Scrap = styled.img`
  width: 30px;
  position: relative;
  top: 1.5px;
`;

export const ScrapCount = styled.div`
  font-size: 80%;
  position: absolute;
`;

export const CommentBox = styled.div`
  width: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Comment = styled.img`
  width: 30px;
  position: relative;
  top: 2px;
`;

export const CommentCount = styled.div`
  font-size: 80%;
  position: absolute;
`;

export const PostWriterImg = styled.img`
  object-fit: cover;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const PostWriterName = styled.div`
  font-size: 80%;
  padding-right: 10px;
`;
