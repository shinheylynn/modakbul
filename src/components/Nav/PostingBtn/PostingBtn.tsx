import { useNavigate } from 'react-router-dom';
import * as S from './PostingBtn.style';

type PostingBtnProps = {
  userToken: string | null;
  setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function PostingBtn({
  userToken,
  setUserToken,
}: PostingBtnProps) {
  const navigate = useNavigate();
  const access_token = userToken;
  const goToPosting = () => {
    navigate('/posting');
  };
  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <S.PostBtnBox>
      <S.PostBtn
        src="/images/nav/upload.png"
        alt="posting Button"
        onClick={access_token ? goToPosting : goToLogin}
      />
    </S.PostBtnBox>
  );
}
