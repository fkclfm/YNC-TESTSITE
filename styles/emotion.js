import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 110px;
`;

export const Nav = styled.nav`
  height: 90px;
  padding: 0 110px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 90px;
  height: 60px;
`;

export const NavMenu = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
`;

export const StyledLink = styled.a`
  font-weight: 700;
  font-size: 20px;
  color: black;
  text-decoration: none;
`;

export const Banner = styled.section`
  width: 90%;
  height: 500px;
  border-radius: 10px;
  margin-bottom: 120px;
  margin: 0 auto;
`;

export const TestName = styled.h2`
  font-weight: 700;
  padding-left: 100px;
  margin-bottom: 20px;
`;

export const SelectToggle = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 80px;
`;

export const TestType = styled.div`
  width: 130px;
  height: 120px;
  background-color: aqua;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: center;
  gap: 13px;
  background-color: white;
  border: 1px solid #d2d2d2;
  cursor: pointer;
  opacity: 0.7;
`;

export const ToggleIcon = styled.img`
  width: 50px;
  height: 45px;
`

export const TestButton = styled.a`
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;


export const SearchTest = styled.div`
  background-color: #e9ecef;
  border-radius: 20px;
  width: 45%;
  height: 35px;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const SearchImage = styled.img`
  width: 23px;
  height: 23px;
  display: block;
  margin-left: 15px;
  background-color: transparent;
`;

export const SearchInput = styled.input`
  width: 100%;
  font-weight: 600;
  font-size: 15px;    
`;

export const TestBox = styled.div`
  display: flex;
  width: 100%;
  background-color: beige;
  height: 500px;
`;
