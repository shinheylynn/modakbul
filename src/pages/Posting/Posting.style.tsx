import styled from 'styled-components';
import ReactQuill from 'react-quill';

export const PostingContainer = styled.div`
  border: 1px solid black;
  width: 100vw;
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  border: 1px solid #cccccc;
  border-bottom: none;
  display: flex;
  align-items: center;
  width: 80vw;
  height: 60px;
`;

export const TitleInput = styled.input`
  height: 70%;
  width: 100%;
  padding-left: 10px;
  font-size: x-large;
  border: none;
  ::placeholder {
    font-size: x-large;
  }
  :focus {
    outline: none;
  }
`;

export const QuillContainer = styled.div`
  /* border: 1px solid gray; */
  display: flex;
  justify-content: center;
  width: 80vw;
  height: 700px;
`;

export const CustomReactQuill = styled(ReactQuill)`
  height: 90%;
  width: 100%;
`;

export const SubmitBtn = styled.button`
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  width: 100px;
  height: 50px;
  margin: 10px;
  cursor: pointer;
`;
