import { useEffect, useState } from 'react';
import * as S from './PostGrid.style';

export default function PostGrid() {
  const [post, setPost] = useState<any[]>([]);
  useEffect(() => {
    fetch('/data/Main/getPostMock.json')
      .then(res => res.json())
      .then(data => setPost(data.post));
  }, []);

  return (
    <S.PostingBox>
      {post.map(data => (
        <S.Post key={data.id}>
          <S.PostImgBox>
            <S.PostImg src={data.img} alt="이미지" />
          </S.PostImgBox>
          <S.PostTitleBox>
            <S.PostTitle>{data.title}</S.PostTitle>
          </S.PostTitleBox>
          <S.PostWriterBox>
            <S.PostWriter>{data.writer}</S.PostWriter>
          </S.PostWriterBox>
        </S.Post>
      ))}
    </S.PostingBox>
  );
}
