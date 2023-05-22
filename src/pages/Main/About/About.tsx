import * as S from './About.styles';

export default function About() {
  return (
    <S.AboutContainer>
      <S.WelcomeWrapper>
        <S.BgImgWrapper>
          <S.BgImg src="/images/main/main_campsite.png" alt="배경이미지" />
        </S.BgImgWrapper>
        <S.TitleWrapper>
          <S.AboutTitle>
            Hello, Welcome! <br />
            About 모닥불
          </S.AboutTitle>
          <S.AboutSubTitle>
            모닥불은 2023년 5월에 team TwoPlusOne이 진행하여 배포한 첫
            프로젝트입니다.
            <br /> 캠퍼들의 경험을 공유할 수 있는 장을 만들기 위해 제작했습니다.
          </S.AboutSubTitle>
        </S.TitleWrapper>
        <S.DownArrowBox>
          <S.DownArrow>▼</S.DownArrow>
          <S.DownArrow>▼</S.DownArrow>
          <S.DownArrow>▼</S.DownArrow>
        </S.DownArrowBox>
      </S.WelcomeWrapper>
      <S.AboutDescWrapper>
        <S.AboutDesc /> 최초 배포 일자: 2023년 6월
      </S.AboutDescWrapper>
    </S.AboutContainer>
  );
}
