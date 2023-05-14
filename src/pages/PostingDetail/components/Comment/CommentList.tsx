import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Comments from './Comments';
import API from '../../../../config/config';
import * as S from './CommentList.style';

interface PostingData {
  feedContent: string;
  feedCreateTime: string;
  feedImages: { imageId: number; imageUrl: string }[];
  feedLikeCount: string;
  feedScrapCount: string;
  feedCommentCount: string;
  feedTitle: string;
  postId: number;
  userFeedLike: boolean;
  userFeedScrap: boolean;
  userName: string;
  userProfileImage: string;
}

interface CommentListProps {
  postingData: PostingData[];
}

export default function CommentsList({ postingData }: CommentListProps) {
  const [comment, setComment] = useState('');
  const [commentsData, setCommentsData] = useState([{}]);

  console.log(commentsData);

  const getComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const navigate = useNavigate();

  const currentDateTime = new Date().toISOString();

  const token = localStorage.getItem('access_token');

  const addComment = () => {
    fetch(`${API.POSTING_COMMENTS}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token || '',
      },
      body: JSON.stringify({
        content: comment,
        postId: postingData[0].postId,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (comment === '') {
          return alert('댓글을 입력 해 주세요');
        } else if (token === 'undefined') {
          alert('로그인이 필요합니다.');
          navigate('/login');
        }
        const result = [
          {
            commentId: commentsData.length + 1,
            content: comment,
            profileImage: postingData[0].userProfileImage,
            nickname: postingData[0].userName,
            feedCreateTime: currentDateTime,
          },
          ...commentsData,
        ];
        setCommentsData(result);
        setComment('');
      });
  };

  return (
    <S.CommentsAllWrap>
      <S.CommentsWrap>
        <S.CommentListWrap>
          <S.CommentWrap>
            <div>
              <S.UserImg src="images/postingDetail/user.png" alt="userImg" />
            </div>
            <S.CommentDetailWrap>
              <Comments token={token} />
            </S.CommentDetailWrap>
          </S.CommentWrap>
        </S.CommentListWrap>
      </S.CommentsWrap>
      <S.CommentItemWrap>
        <div>
          <S.CountingWrap>
            <S.CountContents>
              댓글 {postingData[0].feedCommentCount}
            </S.CountContents>
            <S.CountContents>
              좋아요 {postingData[0].feedLikeCount}
            </S.CountContents>
            <S.CountContents>
              스크랩 {postingData[0].feedScrapCount}
            </S.CountContents>
          </S.CountingWrap>
        </div>
        <S.InputWrap>
          <S.UserImg src={postingData[0].userProfileImage} alt="userImg" />
          <S.CommentInputWrap>
            <S.CommentInput
              placeholder=" 캠핑을 소통해봐요!"
              onChange={getComment}
              value={comment}
            />
            <S.CommentBtn
              type="button"
              onClick={addComment}
              style={{ color: comment.length === 0 ? '#bababa' : 'green' }}
              disabled={comment.length === 0}
            >
              입력
            </S.CommentBtn>
          </S.CommentInputWrap>
        </S.InputWrap>
      </S.CommentItemWrap>
    </S.CommentsAllWrap>
  );
}
