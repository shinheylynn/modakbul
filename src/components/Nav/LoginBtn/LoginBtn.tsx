import { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './LoginBtn.style';

type LoginBtnProps = {
  userToken: string | null;
  setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function LoginBtn({ userToken, setUserToken }: LoginBtnProps) {
  const navigate = useNavigate();
  const access_token = userToken;
  const handleLogin: MouseEventHandler<HTMLButtonElement> = e => {
    navigate('/login');
  };
  const handleLogout: MouseEventHandler<HTMLButtonElement> = e => {
    localStorage.removeItem('access_token');
    navigate('/');
    window.location.replace('/');
  };

  return (
    <S.LoginButton onClick={access_token ? handleLogout : handleLogin}>
      {access_token ? (
        <>
          <S.LogoutIcon
            src="/images/nav/right-to-bracket-solid.png"
            alt="login"
          />
          <S.LogInOut>Logout</S.LogInOut>
        </>
      ) : (
        <>
          <S.LoginIcon
            src="/images/nav/right-to-bracket-solid.png"
            alt="login"
          />
          <S.LogInOut>Login</S.LogInOut>
        </>
      )}
    </S.LoginButton>
  );
}
