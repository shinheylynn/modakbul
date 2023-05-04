import * as S from './ListComponent.style';
import { Link } from 'react-router-dom';

interface EmptyInfo {
  id: number;
  emptyImg: string;
  emptyText: string;
}

type PostImage = {
  postId: number;
  postImage: string;
};

interface ListComponentProps {
  data: PostImage[];
  emptyInfo: EmptyInfo;
}

export default function ListComponent({ data, emptyInfo }: ListComponentProps) {
  return (
    <S.MyPosting>
      {data.length === 0 ? (
        <Link to="/posting">
          <S.EmptyWrap>
            <S.EmptyList src={emptyInfo.emptyImg} alt="emptyList" />
            <S.AddPosting>{emptyInfo.emptyText}</S.AddPosting>
          </S.EmptyWrap>
        </Link>
      ) : (
        <S.ThumbnailWrapper>
          {data.map((posting: PostImage, id: number) => (
            <S.Thumbnail key={id} src={posting.postImage} alt="Thumbnail" />
          ))}
        </S.ThumbnailWrapper>
      )}
    </S.MyPosting>
  );
}
