import styled from 'styled-components';

export const CommentsAllWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  padding: 10px;
`;

export const LikeAndScrapeWrap = styled.div`
  display: flex;
  padding-bottom: 20px;
  margin-bottom: 20px;
  margin-left: 5px;
  border-bottom: solid 1px #bfbfbf;
`;

export const CountLike = styled.p`
  margin-right: 20px;
  color: #656e75;
`;

export const CountScrap = styled(CountLike)``;

export const CommentsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CountingWrap = styled.div`
  display: flex;
`;

export const CountContents = styled.div`
  color: #656e75;
  margin-bottom: 20px;
  margin-left: 5px;
  font-size: 10px;
`;

export const CommentItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const InputWrap = styled.div`
  display: flex;
`;

export const UserImg = styled.img`
  width: 25px;
  border-radius: 70%;
  margin-right: 20px;
`;

export const CommentInputWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const CommentInput = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border: solid 1px #bfbfbf;
  outline: none;
  border-radius: 4px;
  cursor: text;
  transition: all 0.1s linear 0s;
  &:focus {
    border: 2px solid green;
  }
`;

export const CommentBtn = styled.button`
  position: absolute;
  right: 6px;
  top: 4px;
  font-size: 13px;
  border: none;
  background-color: white;
  cursor: pointer;
`;

export const CommentListWrap = styled.div`
  //display: flex;
`;

export const CommentWrap = styled.div`
  display: flex;
`;

export const CommentDetailWrap = styled.div`
  display: flex;
  flex-direction: column;
`;