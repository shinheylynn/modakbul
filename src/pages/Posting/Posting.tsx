import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import PostImages from './PostImages/PostImages';
import * as S from './Posting.style';

export default function Posting() {
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

  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const selectedImages = Array.from(files);
      setImageFiles(selectedImages);
    }
  };

  //이미지 관련 코드
  const [showImages, setShowImages] = useState<string[]>([]);
  const [imageLists, setImageLists] = useState<File[]>([]);

  const handleShowImages = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  // 이미지 관련 코드 여기까지

  // const { title, content, images } = uploadForm;

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

    fetch('http://192.168.0.249:3003/feeds', {
      method: 'POST',
      headers: {
        authorization: access_token ?? '',
      },
      body: uploadForm,
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'FEED UPLOAD SUCCESS!') {
          // TO-DO: 통신 성공 시 submit & navigate
          alert('업로드 성공');
        } else {
          alert('업로드 실패. 네트워크를 확인해 주세요.');
        }
      });
  };

  return (
    <S.PostingContainer>
      <S.TitleWrapper>
        <S.TitleInput
          placeholder="제목"
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
        handleShowImages={handleShowImages}
        handleAddImage={handleAddImage}
      />
      <form onSubmit={onSubmit}>
        <S.SubmitBtn type="submit">
          <span>업로드</span>
        </S.SubmitBtn>
      </form>
    </S.PostingContainer>
  );
}
