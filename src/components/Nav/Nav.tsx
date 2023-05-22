import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from './CategoryList';
import LoginBtn from './LoginBtn/LoginBtn';
import PostingBtn from './PostingBtn/PostingBtn';
import * as S from './Nav.style';

export default function Nav() {
  const [userToken, setUserToken] = useState<string | null>(null);
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };
  const access_token = userToken;

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
              console.log(category.navigate);
            }}
          >
            {category.list}
          </S.Categories>
        ))}
      </S.CategoryBox>
      <S.ProfileBox>
        {access_token && (
          <PostingBtn userToken={userToken} setUserToken={setUserToken} />
        )}
        <S.LoginBox>
          <LoginBtn userToken={userToken} setUserToken={setUserToken} />
        </S.LoginBox>
      </S.ProfileBox>
    </S.NavContainer>
  );
}
