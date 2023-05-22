import CampSites from './CampSites/CampSites';
import * as S from './Main.style';

export default function Main() {
  return (
    <S.MainContainer>
      <S.TitleBox>
        <S.TitleImg src="/images/main/main_campsite.png" alt="background img" />
        <S.Title>Hello Fellow Camper !</S.Title>
        <S.SubTitle>Welcome to Modakbul</S.SubTitle>
        <S.DescriptionBox>
          <S.Description>
            모닥불은 캠퍼들을 위한 캠핑장 장소 및 후기 공유 플랫폼입니다.
          </S.Description>
        </S.DescriptionBox>
      </S.TitleBox>
      <CampSites />
    </S.MainContainer>
  );
}
