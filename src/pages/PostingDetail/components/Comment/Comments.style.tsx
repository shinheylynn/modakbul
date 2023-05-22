import styled from 'styled-components';

export const CommentWrap = styled.div`
  display: flex;
`;

export const UserImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 70%;
  margin-right: 20px;
`;

export const CommentTextWrap = styled.div`
  margin-bottom: 20px;
`;

export const UserNickName = styled.p`
  margin-bottom: 10px;
  font-size: 12px;
`;

export const CommentText = styled.p`
  margin-bottom: 10px;
  font-size: 12px;
`;

export const CommentInfoWrap = styled.div`
  display: flex;
`;

export const PastTime = styled.p`
  margin-right: 10px;
  font-size: 10px;
  color: #656e75;
`;

export const LikeCommentBtn = styled.img`
  margin-right: 10px;
  width: 10px;
  cursor: pointer;
`;

export const replyComment = styled.p`
  margin-right: 10px;
  font-size: 10px;
  color: #656e75;
  cursor: pointer;
`;

export const DeleteComment = styled(replyComment)``;
