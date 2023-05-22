import { useEffect, useState } from 'react';
import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import CommentsList from './components/Comment/CommentList';
import Map from './components/Map/Map';
import API from '../../config/config';
import Slick from '../../components/Carousel/Slick';
import * as S from './PostingDetail.style';
import { useParams } from 'react-router-dom';

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

// interface CommentsListProps {
//   postingData: PostingData[];
// }

export default function PostingDetail() {
  const [scrapeBtn, setScrapeBtn] = useState(false);
  const [likeBtn, setLikeBtn] = useState(false);
  const [controlScrapeBtn, setControlScrapeBtn] = useState(false); // fetch코드 작성시 초기값을 data fetching 값으로 수정
  const [controlLikeBtn, setControlLikeBtn] = useState(false); // fetch코드 작성시 초기값을 data fetching 값으로 수정
  const [postingData, setPostingData] = useState<PostingData[]>([]);
  const params = useParams();

  const scrapeBtnhandler = () => {
    setScrapeBtn(prev => {
      return !prev;
    });
    setControlScrapeBtn(true);
  };

  const likeBtnhandler = () => {
    setLikeBtn(prev => {
      return !prev;
    });
    setControlLikeBtn(true);
  };

  interface itemsProps {
    item: string;
    name: string;
  }

  useEffect(() => {
    fetch(`${API.POSTING_DETAIL}/${params.id}`, {
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
        setPostingData(data.feedDetail);
      });
  }, [params.id]);

  //console.log(postingData[0].userName);
  console.log(postingData[0]);

  const items: itemsProps[] = [
    {
      item: 'http://placehold.it/1200x400',
      name: '이미지01',
    },
    {
      item: 'http://placehold.it/1200x400/ff0000',
      name: '이미지02',
    },
    {
      item: 'http://placehold.it/1200x400/00ffff',
      name: '이미지03',
    },
  ];

  return (
    <S.AllWrap>
      {postingData.length > 0 && (
        <>
          <S.ThumbnailImg
            // src="images/postingDetail/titleImg.jpg"
            src={postingData[0].feedImages[0].imageUrl}
            alt="thumbnailImg"
          />
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
                        ? '/public/images/postingDetail/fillheart.png'
                        : '/public/images/postingDetail/heart.png'
                    }
                    alt="likeBtn"
                    onClick={likeBtnhandler}
                  />
                  <S.Scrape
                    src={
                      scrapeBtn
                        ? 'public/images/postingDetail/fillbookmark.png'
                        : 'public/images/postingDetail/bookmark.png'
                    }
                    alt="scrapeBtn"
                    onClick={scrapeBtnhandler}
                  />
                </div>
              </S.UserInfoWrap>
              <S.PostingWrap>
                <S.PostingImgWrap>
                  <Slick>
                    {postingData[0].feedImages.map(({ imageUrl, imageId }) => (
                      <S.SliderItem key={imageId}>
                        <S.PostingImg src={imageUrl} />
                      </S.SliderItem>
                    ))}
                  </Slick>
                </S.PostingImgWrap>
                <CommentsList postingData={postingData} />
              </S.PostingWrap>
            </S.SubTitleWrap>
          </S.TitleWrap>
          <S.TextAndMapWrap>
            <S.MainTextWrap>
              <S.MainText>{postingData[0].feedContent}</S.MainText>
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
