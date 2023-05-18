import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import PostImages from './PostImages/PostImages';
import * as S from './Posting.style';

export default function Posting() {
  const navigate = useNavigate();
  const [formContents, setFormContents] = useState({
    title: '',
    contents: '',
  });

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormContents(prev => ({ ...prev, title: e.target.value }));
  };

  const handleContents = (value: string) => {
    setFormContents(prev => ({ ...prev, contents: value }));
  };

  const [showImages, setShowImages] = useState<string[]>([]);
  const [imageLists, setImageLists] = useState<File[]>([]);

  const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList: FileList | null = e.target.files;
    let imageUrlLists: string[] = [...showImages];
    let selectedImages: File[] = [];

    if (fileList !== null) {
      for (let i = 0; i < fileList.length; i++) {
        const currentImage = fileList[i];
        const currentImageUrl = URL.createObjectURL(fileList[i]);
        imageUrlLists.push(currentImageUrl);
        selectedImages.push(currentImage);
      }
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
      alert('업로드 이미지는 10장을 초과할 수 없습니다.');
    }

    setImageLists(prevImageLists => [...prevImageLists, ...selectedImages]); //이거임 별표별표
    setShowImages(imageUrlLists);
  };

  const access_token = localStorage.getItem('access_token');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const uploadForm = new FormData();
    uploadForm.append(
      'data',
      JSON.stringify({
        userId: '1',
        title: formContents.title,
        content: formContents.contents,
      })
    );
    if (imageLists !== null) {
      for (let i = 0; i < imageLists.length; i++) {
        uploadForm.append('images', imageLists[i]);
      }
    }

    fetch('http://192.168.0.251:3003/feeds', {
      method: 'POST',
      headers: {
        authorization: access_token ?? '',
      },
      body: uploadForm,
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'FEED UPLOAD SUCCESS!') {
          navigate('/'); // To-do: 해당 detail 페이지로 넘어가게끔 navigate 코드 수정 필요
          alert('업로드 성공'); // To-do: 나중에는 alert창 제거 필요
        } else {
          alert('업로드 실패. 네트워크를 확인해 주세요.'); // To-do: alert창 대신 예쁜 거로 수정...ㅎㅎ
        }
      });
  };

  return (
    <S.PostingContainer>
      <S.TitleWrapper>
        <S.TitleLegendWrapper>
          <S.TitleLegend>Title</S.TitleLegend>
        </S.TitleLegendWrapper>
        <S.TitleInput
          placeholder="제목을 입력해주세요."
          value={formContents.title}
          onChange={handleTitle}
        />
      </S.TitleWrapper>
      <S.QuillContainer>
        <S.CustomReactQuill
          theme="snow"
          value={formContents.contents}
          onChange={handleContents}
        />
      </S.QuillContainer>
      <PostImages
        showImages={showImages}
        setShowImages={setShowImages}
        handleImages={handleImages}
      />
      <form onSubmit={onSubmit}>
        <S.SubmitBtn type="submit">
          <span>⬆️ 업로드</span>
        </S.SubmitBtn>
      </form>
    </S.PostingContainer>
  );
}
