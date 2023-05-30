import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginBtn from './LoginBtn/LoginBtn';
import MypageBtn from './MypageBtn/MypageBtn';
import { CATEGORIES } from './CategoryList';
import PostingBtn from './PostingBtn/PostingBtn';
import * as S from './Nav.style';

export default function Nav() {
  const [userToken, setUserToken] = useState<string | null>(null);
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };
  useEffect(() => {
    const access_token = setUserToken(localStorage.getItem('access_token'));
  }, []);

  return (
    <S.NavContainer>
      <S.LogoBox onClick={goToMain}>
        <S.Logo src="/images/modakbul_logo.png" alt="Modakbul Logo" />
      </S.LogoBox>
      <S.CategoryBox>
        {CATEGORIES.map(category => (
          <S.Categories
            key={category.id}
            onClick={() => {
              navigate(category.navigate);
            }}
          >
            {category.list}
          </S.Categories>
        ))}
      </S.CategoryBox>
      <S.ProfileBox>
        {userToken && (
          <PostingBtn userToken={userToken} setUserToken={setUserToken} />
        )}
        {userToken && <MypageBtn />}
        <LoginBtn userToken={userToken} setUserToken={setUserToken} />
      </S.ProfileBox>
    </S.NavContainer>
  );
}
