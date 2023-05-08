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
    color: #7e846e;
  }
`;

export const PostImgBox = styled.div`
  margin: 5px;
`;

export const PostImg = styled.img`
  height: 290px;
  object-fit: cover;
  border-radius: 10px;
  width: 100%;
  &:hover {
    transition: 0.3s;
    opacity: 60%;
  }
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

export const PostWriterBox = styled.div`
  border-top: none;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-bottom: 10px;
`;

export const PostWriter = styled.div`
  font-size: 80%;
  padding-right: 10px;
`;
