import { useEffect, useState } from 'react';
import React from 'react';
import ListComponent from './components/ListComponent';
import * as S from './Mypage.style';
import API from '../../config/config';

type UserInfo = {
  userName: string;
  userProfileImage: string;
  userIntroduce: string | null;
};

type PostImage = {
  postId: number;
  postImage: string;
};

type MyPage = {
  userInfo: UserInfo[];
  postImage: PostImage[];
  likeImage: PostImage[];
  scrapImage: PostImage[];
};

export default function Mypage() {
  const [data, setdata] = useState<MyPage>({
    userInfo: [],
    postImage: [],
    likeImage: [],
    scrapImage: [],
  });

  useEffect(() => {
    fetch(`${API.MYPAGE}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('access_token') ?? '',
      },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setdata(data.myPage);
      });
  }, []);

  const getEmptyListInfo = (title: string) => {
    const emptyInfo = EMPTY_LIST_INFORM.find(
      info =>
        info.id ===
        MY_PAGE_CATEGORY.find(category => category.title === title)?.id
    );
    return emptyInfo || EMPTY_LIST_INFORM[0];
  };

  return (
    <S.Allwrap>
      <S.contentsWrap>
        <div>
          <S.UserInfoWrap>
            <S.ProfilImg
              src={
                data.userInfo.length > 0
                  ? data.userInfo[0].userProfileImage
                  : ''
              }
            />
            <S.Nickname>
              {data.userInfo.length > 0 ? data.userInfo[0].userName : ''}
            </S.Nickname>
            <S.Introduce>
              {data.userInfo.length > 0 ? data.userInfo[0].userIntroduce : ''}
            </S.Introduce>
            <S.ModifyUserInfoBtn>회원정보</S.ModifyUserInfoBtn>
            <S.Hr />
            <S.CountScrapeAndLikeWrap>
              <S.ScrapeWrap>
                <S.ImgBtn src="images/mypage/bookmark.png" alt="scrapeBtn" />
                <S.Title>스크랩</S.Title>
                <p>{data && data.scrapImage ? data.scrapImage.length : 0}</p>
              </S.ScrapeWrap>
              <S.LikeWrap>
                <S.ImgBtn src="images/mypage/heart.png" alt="likeBtn" />
                <S.Title>좋아요</S.Title>
                <p>{data && data.likeImage ? data.likeImage.length : 0}</p>
              </S.LikeWrap>
            </S.CountScrapeAndLikeWrap>
          </S.UserInfoWrap>
        </div>
        <S.PostingWrap>
          {MY_PAGE_CATEGORY.map(({ title, id }) => {
            const postingData =
              title === '내포스팅'
                ? data?.postImage || [] // undefined인 경우 빈 배열로 설정
                : title === '스크랩'
                ? data?.scrapImage || [] // undefined인 경우 빈 배열로 설정
                : title === '좋아요'
                ? data?.likeImage || [] // undefined인 경우 빈 배열로 설정
                : [];
            const emptyInfo = getEmptyListInfo(title);

            return (
              <S.ListWrap key={id}>
                <S.PostingTitleWrap>
                  <S.PostingTitle>{title}</S.PostingTitle>
                  <S.CountPosting>{postingData.length}</S.CountPosting>
                </S.PostingTitleWrap>
                <ListComponent data={postingData} emptyInfo={emptyInfo} />
              </S.ListWrap>
            );
          })}
        </S.PostingWrap>
      </S.contentsWrap>
    </S.Allwrap>
  );
}

export const MY_PAGE_CATEGORY = [
  {
    id: 1,
    title: '내포스팅',
  },
  {
    id: 2,
    title: '스크랩',
  },
  {
    id: 3,
    title: '좋아요',
  },
];

export const EMPTY_LIST_INFORM = [
  {
    id: 1,
    emptyImg: 'images/mypage/post.png',
    emptyText: `나의 캠핑을\n포스팅 해주세요 :)`,
  },
  {
    id: 2,
    emptyImg: 'images/mypage/post.png',
    emptyText: '캠핑을\n스크랩 해주세요 :)',
  },
  {
    id: 3,
    emptyImg: 'images/mypage/post.png',
    emptyText: '캠핑을\n좋아요 해주세요 :)',
  },
];
