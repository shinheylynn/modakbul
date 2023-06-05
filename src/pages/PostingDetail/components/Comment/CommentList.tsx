import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Comments from './Comments';
import API from '../../../../config/config';
import * as S from './CommentList.style';

interface PostingData {
  feedContent: string;
  feedCreateTime: string;
  feedCommentCount: string;
  feedImages: { imageId: number; imageUrl: string }[];
  feedLikeCount: string;
  feedScrapCount: string;
  feedTitle: string;
  postId: number;
  userFeedLike: boolean;
  userFeedScrap: boolean;
  userName: string;
  userProfileImage: string;
}

interface CommentsData {
  commentContent: string;
  commentCreateTime: string;
  commentId: number;
  commentUserId: number;
  commentUserName: string;
  commentUserProfileImage: string;
}

interface LoginUser {
  loginUserId: number;
  loginUserName: string;
  loginUserProfileImage: string;
}

interface CommentListProps {
  postingData: PostingData[];
  loginUser: LoginUser[];
}

export default function CommentsList({
  postingData,
  loginUser,
}: CommentListProps) {
  const [comment, setComment] = useState('');
  const [commentsData, setCommentsData] = useState<CommentsData[]>([]);
  const [noMoreComment, setNoMoreComment] = useState(true); // 플래그: 더 이상 데이터가 없는지 여부

  const getComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  console.log(postingData);
  const navigate = useNavigate();

  const currentDateTime = new Date().toISOString();
  const addComment = () => {
    const maxCommentId = Math.max(
      ...commentsData.map(comment => comment.commentId)
    );
    fetch(`${API.POSTING_COMMENTS}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('access_token') || '',
      },
      body: JSON.stringify({
        content: comment,
        postId: postingData[0].postId,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'COMMENT UPLOAD SUCCESS!') {
          const newComment = {
            commentContent: comment,
            commentCreateTime: currentDateTime,
            commentId: maxCommentId + 1,
            commentUserId: postingData[0].postId,
            commentUserName: loginUser[0].loginUserName,
            commentUserProfileImage: loginUser[0].loginUserProfileImage,
          };
          setCommentsData([newComment, ...commentsData]);
          setComment('');
        } else if (comment === '') {
          alert('댓글을 입력 해 주세요');
        } else if (!localStorage.getItem('access_token')) {
          alert('로그인이 필요합니다.');
          navigate('/login');
        } else {
          console.log('error');
        }
      });
  };

  const params = useParams();

  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        // 스크롤이 감지되면 추가적인 데이터를 불러올 수 있는 함수 호출
        loadMoreComments();
      }
    }, observerOptions);

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [commentsData]);

  const loadMoreComments = () => {
    if (!noMoreComment) {
      return; // 더 이상 데이터가 없으면 중지
    }

    const startIndex = commentsData.length; // 현재 commentsData의 길이를 가져옵니다.
    const endIndex = startIndex + 12; // 가져올 댓글의 끝 인덱스를 계산합니다.

    fetch(
      `${API.GET_POSTING_COMMENTS}/${params.id}?startIndex=${startIndex}&endIndex=${endIndex}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('access_token') || '',
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        if (data.feedComment.length === 0) {
          setNoMoreComment(false); // 더 이상 데이터가 없음을 표시
        } else {
          setCommentsData([...commentsData, ...data.feedComment]);
        } // 새로운 댓글을 기존의 commentsData에 추가합니다.
      });
  };

  return (
    <S.CommentsAllWrap>
      <S.CommentsWrap>
        <div>
          <S.CommentWrap>
            <S.CommentDetailWrap>
              {commentsData.length > 0 ? (
                <Comments
                  commentsData={commentsData}
                  setCommentsData={setCommentsData}
                  postingData={postingData}
                  loginUser={loginUser}
                />
              ) : (
                <S.EmptyCommentWrap>
                  <S.EmptyCommentList src="/images/postingDetail/emptyCommentList.png" />
                  <p>댓글을 입력해 주세요!</p>
                </S.EmptyCommentWrap>
              )}
              {/* 무한 스크롤을 감지할 요소 */}
              <div id="observer" ref={observerRef} />
            </S.CommentDetailWrap>
          </S.CommentWrap>
        </div>
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
          <S.UserImg
            src={
              localStorage.getItem('access_token')
                ? loginUser[0].loginUserProfileImage
                : '/images/postingDetail/user.png'
            }
            alt="userImg"
          />
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
