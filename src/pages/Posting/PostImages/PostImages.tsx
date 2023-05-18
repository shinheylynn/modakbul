import React, { useState } from 'react';
import * as S from './PostImages.style';

interface PostImagesProps {
  showImages: string[];
  setShowImages: (images: string[]) => void;
  handleShowImages: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PostImages({
  showImages,
  setShowImages,
  handleShowImages,
  handleAddImage,
}: PostImagesProps) {
  const handleDeleteImage = (id: number) => {
    setShowImages(showImages.filter((_, index: number) => index !== id));
  };

  return (
    <S.PostingImgContainer>
      <S.ImgWrapper>
        <S.InformAddImg htmlFor="input-file">
          <input
            type="file"
            id="input-file"
            multiple
            onChange={handleShowImages}
          />
          <span>+</span>
        </S.InformAddImg>
        {showImages.map((image, id) => (
          <S.ImageContainer key={id}>
            <img src={image} alt={`${image}-${id}`} />
            <button onClick={() => handleDeleteImage(id)} />
          </S.ImageContainer>
        ))}
      </S.ImgWrapper>
      <S.AddButtonBox>
        <S.AddButton htmlFor="input-file">
          <input
            type="file"
            id="input-file"
            multiple
            onChange={handleAddImage}
          />
          <span>사진추가</span>
        </S.AddButton>
      </S.AddButtonBox>
    </S.PostingImgContainer>
  );
}
