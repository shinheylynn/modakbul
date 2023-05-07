import { NavigateFunction } from 'react-router-dom';
import * as S from './LoginBtn.style';

type LoginBtnProps = {
  userToken: string | null;
  setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
  navigate: NavigateFunction;
};

export default function LoginBtn({
  userToken,
  setUserToken,
  navigate,
}: LoginBtnProps) {
  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <S.LoginButton onClick={goToLogin}>
      {userToken ? (
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
