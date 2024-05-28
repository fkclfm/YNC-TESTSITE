import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 110px;
`;

export const Inner = styled.nav`
  height: 90px;
  padding: 20px;
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
  justify-content: space-between;
  gap: 40px;
`;

export const StyledLink = styled.a`
  font-weight: 700;
  font-size: 19px;
  color: black;
  text-decoration: none;
`;

export const Banner = styled.section`
  height: 300px;
  border-radius: 10px;
  margin-bottom: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BannerImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`
export const TestName = styled.h2`
  font-weight: 700;
  padding-left: 100px;
  margin-bottom: 20px;
`;

export const SelectBox = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
`;

export const SelectToggle = styled.div`
  width: 50%;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 700;
`;

export const TestType = styled.div`
  width: 150px;
  height: 35px;
  background-color: aqua;
  border-radius: 20px;
  display: flex;
  justify-content: center;  
  align-items: center;
  background-color: white;
  border: 1px solid #e3e3e3;
  padding: 15px 0;
  cursor: pointer;
  opacity: 0.7;
`;

export const TestButton = styled.button`
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;

export const TestTypeHover = styled(TestType)`
  &:hover {
    opacity: 1;
  }
`;

export const SearchTest = styled.div`
  background-color: #e9ecef;
  border-radius: 20px;
  width: 40%;
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
