import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  height: 8vh;
  height: 70px;
  width: 100vw;
`;

export const LogoBox = styled.div`
  background-color: rgb(30, 86, 98);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15vw;
  &:hover {
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  height: 100%;
  width: 200px;
`;

export const CategoryBox = styled.div`
  background-color: #a56520;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
  width: 70vw;
  font-size: 20px;
`;

export const Categories = styled.div`
  font-weight: 500;
  color: #f0f0f0;
  text-shadow: 1px 1px 1px rgb(239, 176, 110);
  &:hover {
    cursor: pointer;
    transition: 0.3s;
    color: #713a16;
  }
`;

export const ProfileBox = styled.div`
  background-color: #a56520;
  width: 15vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 20px;
`;
