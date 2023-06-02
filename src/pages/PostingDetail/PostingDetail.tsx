import { useEffect, useState } from 'react';
import React from 'react';
import CommentsList from './components/Comment/CommentList';
import Map from './components/Map/Map';
import API from '../../config/config';
import Slick from '../../components/Carousel/Slick';
import * as S from './PostingDetail.style';
import { useNavigate, useParams } from 'react-router-dom';

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

interface LoginUser {
  loginUserId: number;
  loginUserName: string;
  loginUserProfileImage: string;
}

interface CommentListProps {
  postingData: PostingData[]; // 타입 변경: PostingData[]
}

export default function PostingDetail() {
  const [postingData, setPostingData] = useState<PostingData[]>([]);
  const [loginUser, setLoginUser] = useState<LoginUser[]>([]);

  const [scrapBtn, setScrapBtn] = useState(
    postingData.length > 0 ? postingData[0].userFeedScrap : false
  );
  const [controlScrapBtn, setControlScrapBtn] = useState(false);

  const [likeBtn, setLikeBtn] = useState(
    postingData.length > 0 ? postingData[0].userFeedLike : false
  );
  const [controlLikeBtn, setControlLikeBtn] = useState(false);

  const params = useParams();

  const navigate = useNavigate();

  const likeBtnhandler = () => {
    if (!localStorage.getItem('access_token')) {
      alert('로그인 후 이용가능합니다.');
      navigate('/login');
      return;
    }
    setLikeBtn(prev => {
      const newUserFeedLike = !prev;
      setPostingData(prevPostingData => {
        const updatedPostingData = [...prevPostingData];
        if (updatedPostingData.length > 0) {
          updatedPostingData[0].userFeedLike = newUserFeedLike;
          updatedPostingData[0].feedLikeCount = newUserFeedLike
            ? (parseInt(updatedPostingData[0].feedLikeCount) + 1).toString()
            : (parseInt(updatedPostingData[0].feedLikeCount) - 1).toString();
        }
        return updatedPostingData;
      });
      setControlLikeBtn(true);
      return newUserFeedLike;
    });
  };

  const scrapBtnhandler = () => {
    if (!localStorage.getItem('access_token')) {
      alert('로그인 후 이용가능합니다.');
      navigate('/login');
      return;
    }
    setScrapBtn(prev => {
      const newUserFeedScrape = !prev;
      setPostingData(prevPostingData => {
        const updatedPostingData = [...prevPostingData];
        if (updatedPostingData.length > 0) {
          updatedPostingData[0].userFeedScrap = newUserFeedScrape;
          updatedPostingData[0].feedScrapCount = newUserFeedScrape
            ? (parseInt(updatedPostingData[0].feedScrapCount) + 1).toString()
            : (parseInt(updatedPostingData[0].feedScrapCount) - 1).toString();
        }
        return updatedPostingData;
      });
      setControlScrapBtn(true);
      return newUserFeedScrape;
    });
  };

  useEffect(() => {
    if (likeBtn && controlLikeBtn) {
      fetch(`${API.LIKE_POSTING}/${params.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('access_token') || '',
        },
      }).then(res => {
        return res.json();
      });
    } else if (!likeBtn && controlLikeBtn) {
      fetch(`${API.LIKE_POSTING}/${params.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('access_token') || '',
        },
      }).then(res => {
        return res.json();
      });
    }
  }, [likeBtn]);

  useEffect(() => {
    if (scrapBtn && controlScrapBtn) {
      fetch(`${API.SCRAP_POSTING}/${params.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('access_token') || '',
        },
      }).then(res => {
        return res.json();
      });
    } else if (!scrapBtn && controlScrapBtn) {
      fetch(`${API.SCRAP_POSTING}/${params.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('access_token') || '',
        },
      }).then(res => {
        return res.json();
      });
    }
  }, [scrapBtn]);

  useEffect(() => {
    fetch(
      localStorage.getItem('access_token')
        ? `${API.LOGIN_POSTING_DETAIL}/${params.id}`
        : `${API.POSTING_DETAIL}/${params.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('access_token') || '',
        },
      }
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        const fetchedPostingData = data.feedDetail;
        const loginUserImg = data.loginUser;
        if (fetchedPostingData.length > 0) {
          setLikeBtn(fetchedPostingData[0].userFeedLike);
          setScrapBtn(fetchedPostingData[0].userFeedScrap);
          setPostingData(fetchedPostingData);
          setLoginUser(loginUserImg);
        }
      });
  }, [params.id]);

  // HTML을 파싱하여 텍스트만 추출하는 함수
  function extractTextFromHTML(html: string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  }

  // 백엔드에서 받아온 데이터에서 HTML 태그를 제거하고 텍스트만 추출
  const textWithoutTags =
    postingData.length > 0
      ? extractTextFromHTML(postingData[0].feedContent)
      : '';

  return (
    <S.AllWrap>
      {postingData.length > 0 && (
        <>
          {/* <S.ThumbnailImg
            src={postingData[0].feedImages[0].imageUrl}
            alt="thumbnailImg"
          /> */}
          <S.TitleWrap>
            <S.Title>{postingData[0].feedTitle}</S.Title>
            <S.SubTitleWrap>
              <S.UserInfoWrap>
                <S.UserInfo>
                  <S.UserImg
                    src={postingData[0].userProfileImage}
                    alt="userImg"
                  />
                  <S.UserNickname>{postingData[0].userName}</S.UserNickname>
                </S.UserInfo>
                <div>
                  <S.Like
                    src={
                      likeBtn
                        ? '/images/postingDetail/fillheart.png'
                        : '/images/postingDetail/heart.png'
                    }
                    alt="likeBtn"
                    onClick={likeBtnhandler}
                  />
                  <S.Scrape
                    src={
                      scrapBtn
                        ? '/images/postingDetail/fillbookmark.png'
                        : '/images/postingDetail/bookmark.png'
                    }
                    alt="scrapBtn"
                    onClick={scrapBtnhandler}
                  />
                </div>
              </S.UserInfoWrap>
              <S.PostingWrap>
                <S.PostingImgWrap>
                  <Slick>
                    {postingData.length > 0 &&
                      postingData[0].feedImages.map(({ imageUrl, imageId }) => (
                        <S.SliderItem key={imageId}>
                          <S.PostingImg src={imageUrl} />
                        </S.SliderItem>
                      ))}
                  </Slick>
                </S.PostingImgWrap>
                <CommentsList postingData={postingData} loginUser={loginUser} />
              </S.PostingWrap>
            </S.SubTitleWrap>
          </S.TitleWrap>
          <S.TextAndMapWrap>
            <S.MainTextWrap>
              <S.MainText>{textWithoutTags}</S.MainText>
            </S.MainTextWrap>
            <S.MapWrap>
              <Map />
            </S.MapWrap>
          </S.TextAndMapWrap>
        </>
      )}
    </S.AllWrap>
  );
}
