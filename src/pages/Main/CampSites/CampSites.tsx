import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../../config/config';
import * as S from './CampSites.style';

export default function CampSites() {
  const navigate = useNavigate();
  const [post, setPost] = useState<any[]>([]);

  // To-do: 실제 서버 연결 시
  useEffect(() => {
    fetch(`${API.MAIN}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setPost(data.mainPage));
  }, []);

  // Mockdata 이용 시
  // useEffect(() => {
  //   fetch('/data/Main/getPostMock.json', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => setPost(data.mainPage));
  // }, []);

  const goToDetail =
    (id: number) => (event: React.MouseEvent<HTMLDivElement>) => {
      navigate(`/postingDetail/${id}`);
    };

  return (
    <S.PostingBox>
      {post.map(data => (
        <S.Post onClick={goToDetail(data.postId)} key={data.postId}>
          <S.PostImgBox>
            <S.PostImg src={data.feedImage} alt="이미지" />
          </S.PostImgBox>
          <S.PostTitleBox>
            <S.PostTitle>{data.feedTitle}</S.PostTitle>
          </S.PostTitleBox>
          <S.PostWriterProfileWrapper>
            <S.LikeBox>
              <S.Like
                src={
                  data.userFeedLike
                    ? '/images/postingDetail/fillheart.png'
                    : '/images/postingDetail/heart.png'
                }
                alt="likeBtn"
              />
              <S.LikeCount>{data.feedLikeCount}</S.LikeCount>
            </S.LikeBox>
            <S.ScrapBox>
              <S.Scrap
                src={
                  data.userFeedScrap
                    ? '/images/postingDetail/fillbookmark.png'
                    : '/images/postingDetail/bookmark.png'
                }
                alt="scrapBtn"
              />
              <S.ScrapCount>{data.feedScrapCount}</S.ScrapCount>
            </S.ScrapBox>
            <S.CommentBox>
              <S.Comment src="/images/main/comment_icon.png" alt="commentBtn" />
              <S.CommentCount>{data.feedCommentCount}</S.CommentCount>
            </S.CommentBox>
            <S.PostWriterImg src={data.userProfileImage} alt="프로필이미지" />
            <S.PostWriterName>{data.userName}</S.PostWriterName>
          </S.PostWriterProfileWrapper>
        </S.Post>
      ))}
    </S.PostingBox>
  );
}
