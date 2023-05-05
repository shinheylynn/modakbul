import { useGoogleLogin } from '@react-oauth/google';
import * as S from './GoogleLoginButton.style';

const GoogleLoginButton = () => {
  const handleClick = async (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault();
    await login();
  };

  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse);
      sendTokenToBackend(tokenResponse.access_token);
    },
  });

  const sendTokenToBackend = async (access_token: string) => {
    try {
      const response = await fetch('/api/login/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ access_token }),
      });

      if (response.ok) {
        const user = await response.json();
        console.log(user);
        // TODO: 로그인된 사용자 정보를 알맞은 방식으로 처리하기
      } else {
        console.error('로그인 실패:', response.statusText);
      }
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  return (
    <div>
      <S.GoogleBtn src="images/login/google.png" onClick={handleClick} />
    </div>
  );
};

export default GoogleLoginButton;
