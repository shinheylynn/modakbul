import * as S from './Comments.style';
import React, { useEffect, useRef } from 'react';
import API from '../../../../config/config';

interface CommentsData {
  commentContent: string;
  commentCreateTime: string;
  commentId: number;
  commentUserId: number;
  commentUserName: string;
  commentUserProfileImage: string;
}

interface CommentsProps {
  commentsData: CommentsData[];
  token: string | null;
  setCommentsData: (commentsData: CommentsData[]) => void;
}

export default function Comment({
  commentsData,
  token,
  setCommentsData,
}: CommentsProps) {
  const detailDate = (a: Date) => {
    const milliSeconds = new Date().getTime() - a.getTime();
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  };

  const deleteComment = (id: number) => {
    fetch(`${API.POSTING_COMMENTS}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token || '',
      },
      body: JSON.stringify({
        commentId: commentsData[0].commentId,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 200)
          setCommentsData(
            commentsData.filter(comment => comment.commentId !== id)
          );
      });
  };

  //**FIX comment delete function**//
  const removeComment = (id: number) => {
    const removeComment = commentsData.filter(
      comment => comment.commentId !== id
    );
    setCommentsData(removeComment);
  };

  return (
    <>
      {commentsData.map((comment, idx) => {
        return (
          <S.CommentWrap key={idx}>
            <S.UserImg src={comment.commentUserProfileImage} alt="userImg" />
            <S.CommentTextWrap>
              <S.UserNickName>{comment.commentUserName}</S.UserNickName>
              <S.CommentText>{comment.commentContent}</S.CommentText>
              <S.CommentInfoWrap>
                <S.PastTime>
                  {detailDate(new Date(comment.commentCreateTime))}
                </S.PastTime>
                <S.LikeCommentBtn
                  src="/images/postingDetail/heart.png"
                  alt="likeBtn"
                />
                {/* 버튼이 눌린 후 하트이미지와 좋아요수 출력되게 분기처리해야함 */}
                <S.replyComment>답글달기</S.replyComment>
                {comment.commentUserId ? (
                  <S.DeleteComment
                    onClick={() => deleteComment(comment.commentId)}
                  >
                    삭제
                  </S.DeleteComment>
                ) : (
                  <div />
                )}
              </S.CommentInfoWrap>
            </S.CommentTextWrap>
          </S.CommentWrap>
        );
      })}
    </>
  );
}
