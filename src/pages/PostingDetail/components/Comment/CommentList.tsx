import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Comments from './Comments';
import API from '../../../../config/config';
import * as S from './CommentList.style';

interface PostingData {
  feedContent: string;
  feedCreateTime: string;
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

interface CommentListProps {
  postingData: PostingData[];
}

export default function CommentsList({ postingData }: CommentListProps) {
  const [comment, setComment] = useState('');
  const [commentData, setCommentData] = useState([{}]);
  const [commentsData, setCommentsData] = useState<CommentsData[]>([]);

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
        } else if (!token) {
          alert('로그인이 필요합니다.');
          navigate('/login');
        }

        const newComment = {
          commentContent: comment,
          commentCreateTime: currentDateTime,
          commentId: commentData.length + 1,
          commentUserId: postingData[0].postId,
          commentUserName: postingData[0].userName,
          commentUserProfileImage: postingData[0].userProfileImage,
          // 로그인한 user의 프로필 이미지로 변경해야 함
        };
        setCommentsData([newComment, ...commentsData]);
        setComment('');
      });
  };

  const params = useParams();

  //**첫 렌더링시 8개씩 끊어서 불러오게 수정해야 함**//
  // useEffect(() => {
  //   fetch(`${API.GET_POSTING_COMMENTS}/${params.id}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //       Authorization: localStorage.getItem('access_token') || '',
  //     },
  //   })
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       setCommentsData(data.feedComment);
  //     });
  // }, [params.id]);

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
  }, []);

  const loadMoreComments = () => {
    const startIndex = commentsData.length;
    const endIndex = startIndex + 8;

    // 서버에서 startIndex부터 endIndex까지의 댓글 데이터를 불러오는 API 요청을 보내고,
    // 응답으로 받은 데이터를 commentsData에 추가
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
        setCommentsData([...commentsData, ...data.feedComment]);
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
                  token={token}
                  setCommentsData={setCommentsData}
                  postingData={postingData}
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
            <S.CountContents>댓글 {commentsData.length}</S.CountContents>
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
          {/* 로그인한 user의 img로 변경해야 함 */}
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
