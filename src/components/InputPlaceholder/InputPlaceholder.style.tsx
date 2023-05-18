import styled from 'styled-components';

export const InputWrapper = styled.div`
  border: 1px solid #cccccc;
  border-bottom: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  height: 60px;
  position: relative;
`;

export const InputLegendWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 50px;
  top: -10px;
  margin-left: 10px;
`;

export const InputLegend = styled.legend`
  color: gray;
  font-size: large;
`;

export const Input = styled.input`
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
