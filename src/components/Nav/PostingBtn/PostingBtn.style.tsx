import styled from 'styled-components';

export const PostBtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 40px;
  background-color: rgb(30, 86, 98);
  border-radius: 50%;
  margin: 10px;
  &:hover {
    cursor: pointer;
    transition: 0.2s;
    background-color: rgb(107, 160, 165);
  }
`;

export const PostBtn = styled.img`
  max-width: 20px;
  max-height: 20px;
`;
