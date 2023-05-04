import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  height: 8vh;
  height: 70px;
  width: 100vw;
`;

export const LogoBox = styled.div`
  background-color: #767933;
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
  background-color: #a8693f;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
  width: 70vw;
  font-size: 20px;
`;

export const Categories = styled.div`
  font-weight: 500;
  &:hover {
    cursor: pointer;
    transition: 0.3s;
    color: #f0f0f0;
  }
`;

export const LoginBox = styled.div`
  background-color: #a8693f;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15vw;
`;
