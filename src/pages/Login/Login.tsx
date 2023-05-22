import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLoginButton from './GoogleLoginButton';
import * as S from './Login.style';

export default function Login() {
  const clientId =
    '398058854903-52lqo1sibg8atk38d839inqpecmklc54.apps.googleusercontent.com' ||
    '';

  return (
    <S.AllWrap>
      <S.TitleWrap>
        <S.TitleImg src="images/bonfire.png" />
        <S.Title>모 닥 불</S.Title>
      </S.TitleWrap>
      <S.InputWrap>
        <S.IdInput placeholder="아이디를 입력해 주세요" />
        <S.PwInput placeholder="비밀번호를 입력해 주세요" />
      </S.InputWrap>
      <S.LoginBtnWrap>
        <S.LoginBtn>로그인</S.LoginBtn>
      </S.LoginBtnWrap>
      <S.PwSignupWrap>
        <S.ModifyPw>비밀번호 재설정</S.ModifyPw>
        <S.Signup>회원가입</S.Signup>
      </S.PwSignupWrap>
      <S.OrWrap>
        <S.Hr />
        or
        <S.Hr />
      </S.OrWrap>
      <S.SocialWrap>
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLoginButton />
          구글 로그인
        </GoogleOAuthProvider>
      </S.SocialWrap>
    </S.AllWrap>
  );
}
