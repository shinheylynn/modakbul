import styled from 'styled-components';

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: rgb(30, 86, 98);
  border: none;
  border-radius: 30px;
  width: 150px;
  height: 40px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:hover {
    cursor: pointer;
    transition: 0.2s;
    background-color: rgb(107, 160, 165);
  }
`;

export const LoginIcon = styled.img`
  color: white;
  width: 17px;
`;

export const LogoutIcon = styled(LoginIcon)`
  transform: scaleX(-1);
`;

export const LogInOut = styled.div`
  font-size: 17px;
  color: white;
  font-weight: 500;
`;
