import styled from 'styled-components';

export const AllWrap = styled.div`
  padding-top: 108px;
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const TitleImg = styled.img`
  width: 60px;
  height: 60px;
  padding-right: 10px;
`;

export const Title = styled.div`
  font-size: 60px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IdInput = styled.input`
  width: 250px;
  height: 50px;
  margin-top: 20px;
  border: 1px solid #dbdbdb;
  color : white
  border-radius: 4px;
  &::placeholder {
    color:#bdbdbd;
  }
`;

export const PwInput = styled.input`
  width: 250px;
  height: 50px;
  margin-top: 20px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  &::placeholder {
    color: #bdbdbd;
  }
`;

export const LoginBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginBtn = styled.button`
  margin-top: 40px;
  width: 250px;
  height: 50px;
  border: none;
  background-color: #89815d;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

export const PwSignupWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const ModifyPw = styled.div`
  color: #a1a0a0;
  padding-right: 35px;
  cursor: pointer;
`;

export const Signup = styled.div`
  color: #a1a0a0;
  cursor: pointer;
`;

export const OrWrap = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

export const Hr = styled.hr`
  width: 115px;
  margin-left: 4px;
  margin-right: 4px;
`;

export const SocialWrap = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  color: #a1a0a0;
`;
