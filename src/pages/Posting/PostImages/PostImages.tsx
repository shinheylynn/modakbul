import React, { useState } from 'react';
import * as S from './PostImages.style';

interface PostImagesProps {
  showImages: string[];
  setShowImages: (images: string[]) => void;
  handleImages: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PostImages({
  showImages,
  setShowImages,
  handleImages,
}: PostImagesProps) {
  const handleDeleteImage = (id: number) => {
    setShowImages(showImages.filter((_, index: number) => index !== id));
  };

  return (
    <S.PostingImgContainer>
      <S.ImgWrapper>
        <S.InformAddImg htmlFor="input-file">
          <input type="file" id="input-file" multiple onChange={handleImages} />
          <span>+</span>
        </S.InformAddImg>
        {showImages.map((image, id) => (
          <S.ImageContainer key={id}>
            <img src={image} alt={`${image}-${id}`} />
            <button onClick={() => handleDeleteImage(id)}>X</button>
          </S.ImageContainer>
        ))}
      </S.ImgWrapper>
      <S.AddButtonBox>
        <S.AddButton htmlFor="input-file">
          <input type="file" id="input-file" multiple onChange={handleImages} />
          <span>사진추가</span>
        </S.AddButton>
        <S.ImgInfo>이미지 첨부는 최대 10장까지 가능합니다.</S.ImgInfo>
      </S.AddButtonBox>
    </S.PostingImgContainer>
  );
}
