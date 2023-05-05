import * as S from './LoginBtn.style';

type LoginBtnProps = {
  userToken: string | null;
  setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function LoginBtn({ userToken, setUserToken }: LoginBtnProps) {
  return (
    <S.LoginButton>
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
