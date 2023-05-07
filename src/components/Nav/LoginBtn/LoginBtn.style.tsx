import styled from 'styled-components';

export const LoginButton = styled.button`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #767933;
  border: none;
  border-radius: 30px;
  width: 150px;
  height: 40px;
  &:hover {
    cursor: pointer;
    transition: 0.3s;
    background-color: #7e846e;
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
