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
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

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

        const newComment = {
          commentContent: comment,
          commentCreateTime: currentDateTime,
          commentId: commentData.length + 1,
          commentUserId: postingData[0].postId,
          commentUserName: postingData[0].userName,
          commentUserProfileImage: postingData[0].userProfileImage,
        };
        setCommentsData([newComment, ...commentsData]);
        setComment('');
      });
  };

  const params = useParams();

  useEffect(() => {
    fetch(`${API.GET_POSTING_COMMENTS}/${params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('access_token') || '',
      },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCommentsData(data.feedComment);
      });
  }, [params.id]);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      entries => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting && hasMore) {
          loadMoreComments();
        }
      },
      { threshold: 1 }
    );

    const target = document.getElementById('observer');
    if (target) {
      observer.current.observe(target);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [hasMore]);

  const loadMoreComments = () => {
    const nextPage = currentPage + 1;

    fetch(`${API.GET_POSTING_COMMENTS}/${params.id}?page=${nextPage}`, {
      // fetch next page of comments data
    })
      .then(res => res.json())
      .then(data => {
        if (data.feedComment.length > 0) {
          setCommentsData(prevData => [...prevData, ...data.feedComment]);
          setCurrentPage(nextPage);
        } else {
          setHasMore(false);
        }
      });
  };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     entries => {
  //       const firstEntry = entries[0];
  //       if (firstEntry.isIntersecting) {
  //         // 스크롤의 끝에 도달했을 때 실행할 로직
  //         loadMoreComments();
  //       }
  //     },
  //     { threshold: 1 } // 1은 요소가 전부 다 보일 때 콜백 호출
  //   );

  //   const target = document.getElementById('observer');
  //   if (target) {
  //     observer.observe(target);
  //   }

  //   return () => {
  //     observer.unobserve(target as Element);
  //   };
  // }, []);

  // const loadMoreComments = () => {
  //   // 새로운 페이지의 댓글 로드 로직
  //   const nextPage = currentPage + 1;

  //   fetch(`${API.GET_POSTING_COMMENTS}/${params.id}?page=${nextPage}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //       Authorization: localStorage.getItem('access_token') || '',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       // 새로운 페이지의 댓글을 현재 댓글 데이터에 추가
  //       setCommentsData(prevData => [...prevData, ...data.feedComment]);
  //       setCurrentPage(nextPage);
  //     });
  // };

  return (
    <S.CommentsAllWrap>
      <S.CommentsWrap id="observer">
        <S.CommentListWrap>
          <S.CommentWrap>
            <S.CommentDetailWrap>
              {commentsData.length > 0 ? (
                <Comments
                  commentsData={commentsData}
                  token={token}
                  setCommentsData={setCommentsData}
                />
              ) : (
                <S.EmptyCommentWrap>
                  <S.EmptyCommentList src="/images/postingDetail/emptyCommentList.png" />
                  <p>댓글을 입력해 주세요!</p>
                </S.EmptyCommentWrap>
              )}
              {/* 무한 스크롤을 감지할 요소 */}
              {/* <div id="observer" /> */}
            </S.CommentDetailWrap>
          </S.CommentWrap>
        </S.CommentListWrap>
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
