import { useNavigate } from 'react-router-dom';
import * as S from './MypageBtn.style';

export default function MypageBtn() {
  const navigate = useNavigate();
  const goToMypage = () => {
    navigate('/mypage');
  };

  return (
    <S.MypageBtnBox>
      <S.MypageBtn
        src="/images/nav/mypgae_icon.png"
        alt="Mypage Button"
        onClick={goToMypage}
      />
    </S.MypageBtnBox>
  );
}
