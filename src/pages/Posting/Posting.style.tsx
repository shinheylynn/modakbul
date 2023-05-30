import styled from 'styled-components';
import ReactQuill from 'react-quill';

export const PostingContainer = styled.fieldset`
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
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  height: 60px;
  position: relative;
`;

export const TitleLegendWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 50px;
  top: -10px;
  margin-left: 10px;
`;

export const TitleLegend = styled.legend`
  color: gray;
  font-size: large;
`;

export const TitleInput = styled.input`
  height: 70%;
  width: 100%;
  padding-left: 10px;
  font-size: x-large;
  border: none;
  ::placeholder {
    font-size: large;
  }
  :focus {
    outline: none;
  }
`;

export const QuillContainer = styled.div`
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
  border: none;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a5651f;
  width: 150px;
  height: 50px;
  margin: 10px;
  font-size: medium;
  cursor: pointer;
  :hover {
    background-color: orange;
    transition: 0.3s;
  }
`;
