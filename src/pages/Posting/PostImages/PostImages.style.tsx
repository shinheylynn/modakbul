import styled from 'styled-components';

export const PostingImgContainer = styled.div`
  border: 1px solid #cccccc;
  padding: 10px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 80vw;
`;

export const ImgWrapper = styled.div`
  width: 80vw;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InformAddImg = styled.label`
  height: 150px;
  background-color: lightgray;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  input[type='file'] {
    display: none;
  }

  span {
    color: white;
    font-size: 50px;
  }
`;

export const ImageContainer = styled.div`
  margin: 5px;
  position: relative;
  width: 150px;
  height: 150px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  button {
    border: 1px solid red;
    position: absolute;
    top: -8px;
    right: -8px;
    border: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export const AddButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const AddButton = styled.label`
  background-color: #767932;
  width: 150px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  input[type='file'] {
    display: none;
  }

  span {
    font-size: 15px;
    color: white;
  }
`;
