import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginBtn from './LoginBtn/LoginBtn';
import { CATEGORIES } from './CategoryList';
import * as S from './Nav.style';

export default function Nav() {
  const [userToken, setUserToken] = useState<string | null>(null);
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };

  return (
    <S.NavContainer>
      <S.LogoBox onClick={goToMain}>
        <S.Logo src="/images/modakbul_logo.png" alt="Modakbul Logo" />
      </S.LogoBox>
      <S.CategoryBox>
        {CATEGORIES.map(category => (
          <S.Categories key={category.id}>{category.list}</S.Categories>
        ))}
      </S.CategoryBox>
      <S.LoginBox>
        <LoginBtn
          userToken={userToken}
          setUserToken={setUserToken}
          navigate={navigate}
        />
      </S.LoginBox>
    </S.NavContainer>
  );
}
