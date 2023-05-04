import React, { useState } from 'react';
import LoginBtn from './LoginBtn/LoginBtn';
import { CATEGORIES } from './CategoryList';
import * as S from './Nav.style';

export default function Nav() {
  const [userToken, setUserToken] = useState<string | null>(null);

  return (
    <S.NavContainer>
      <S.LogoBox>
        <S.Logo src="/images/modakbul_logo.png" alt="Modakbul Logo" />
      </S.LogoBox>
      <S.CategoryBox>
        {CATEGORIES.map(category => (
          <S.Categories key={category.id}>{category.list}</S.Categories>
        ))}
      </S.CategoryBox>
      <S.LoginBox>
        <LoginBtn userToken={userToken} setUserToken={setUserToken} />
      </S.LoginBox>
    </S.NavContainer>
  );
}
