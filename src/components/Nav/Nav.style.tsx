import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  height: 8vh;
  height: 70px;
  width: 100%;
`;

export const LogoBox = styled.div`
  background-color: rgb(30, 86, 98);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  &:hover {
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  height: 100%;
  width: 200px;
`;

export const CategoryBox = styled.div`
  background-color: #ef9f19;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
  width: 60%;
`;

export const Categories = styled.button`
  font-weight: 500;
  border: none;
  font-size: x-large;
  background-color: transparent;
  color: #f0f0f0;
  text-shadow: 2px 2px 2px gray;
  &:hover {
    cursor: pointer;
    transition: 0.3s;
    color: #713a16;
  }
`;

export const ProfileBox = styled.div`
  background-color: #ef9f19;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
