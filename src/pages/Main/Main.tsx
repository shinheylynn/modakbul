import PostGrid from './PostGrid/PostGrid';
import * as S from './Main.style';

export default function Main() {
  return (
    <S.MainContainer>
      <S.TitleBox>
        <S.Title>Hello Fellow Camper !</S.Title>
        <S.SubTitle>Welcome to Modakbul</S.SubTitle>
      </S.TitleBox>
      <PostGrid />
    </S.MainContainer>
  );
}
