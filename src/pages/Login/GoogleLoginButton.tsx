import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import * as S from './GoogleLoginButton.style';
import API from '../../config/config';

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const handleClick = async (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault();
    await login();
  };

  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse); // 프로젝트 배포시 console.log(tokenResponse); 삭제
      sendTokenToBackend(tokenResponse.access_token);
    },
  });

  const sendTokenToBackend = async (access_token: string) => {
    try {
      const response = await fetch(`${API.LOGIN}`, {
        method: 'POST',
        headers: {
          Authorization: access_token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ access_token }),
      });

      if (response.ok) {
        const user = await response.json();
        console.log(user); // 프로젝트 배포시 console.log(user) 삭제
        localStorage.setItem('access_token', user.access_token);
        navigate('/');
      } else {
        console.error('로그인 실패:', response.statusText);
      }
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('다시 로그인 해주세요!');
    }
  };

  return (
    <div>
      <S.GoogleBtn
        src="images/login/google.png"
        onClick={handleClick}
        alt="googleLoginBtn"
      />
    </div>
  );
};

export default GoogleLoginButton;
