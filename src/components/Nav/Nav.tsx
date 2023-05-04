import * as S from './Nav.style';

export default function Nav() {
  return (
    <S.NavContainer>
      <S.LogoBox>
        <S.Logo>Modakbul</S.Logo>
      </S.LogoBox>
      <S.CategoryBox>
        <S.Categories>Categories</S.Categories>
      </S.CategoryBox>
      <S.LoginBox>
        <S.Login>Login/Logout</S.Login>
      </S.LoginBox>
    </S.NavContainer>
  );
}
