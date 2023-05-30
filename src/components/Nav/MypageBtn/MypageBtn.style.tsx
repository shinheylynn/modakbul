import styled from 'styled-components';

export const MypageBtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 40px;
  background-color: rgb(30, 86, 98);
  border-radius: 50%;
  margin-right: 15px;
  &:hover {
    cursor: pointer;
    transition: 0.2s;
    background-color: rgb(107, 160, 165);
  }
`;

export const MypageBtn = styled.img`
  max-width: 30px;
  max-height: 30px;
`;
