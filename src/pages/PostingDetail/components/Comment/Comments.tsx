import * as S from './Comments.style';
import React from 'react';

interface Pros {
  token: string | null;
}

export default function Comment({ token }: Pros) {
  return (
    <>
      <S.UserNickName>user1</S.UserNickName>
      <S.CommentText>댓글입니다.</S.CommentText>
      <S.CommentInfoWrap>
        <S.PastTime>1분 전</S.PastTime>
        <S.LikeCommentBtn src="" alt="likeBtn" />
        {/* 버튼이 눌린 후 하트이미지와 좋아요수 출력되게 분기처리해야함 */}
        <S.replyComment>답글달기</S.replyComment>
        {token && <S.DeleteComment>삭제</S.DeleteComment>}
      </S.CommentInfoWrap>
    </>
  );
}
