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
        <Link to={emptyInfo.id === 1 ? '/posting' : '/'}>
          <S.EmptyWrap>
            <S.EmptyList src={emptyInfo.emptyImg} alt="emptyList" />
            <S.AddPosting>{emptyInfo.emptyText}</S.AddPosting>
          </S.EmptyWrap>
        </Link>
      ) : (
        <S.ThumbnailWrapper>
          {data.map((posting: PostImage, id: number) => (
            <Link key={id} to={`/postingdetail/${posting.postId}`}>
              <S.Thumbnail src={posting.postImage} alt="Thumbnail" />
            </Link>
          ))}
        </S.ThumbnailWrapper>
      )}
    </S.MyPosting>
  );
}
