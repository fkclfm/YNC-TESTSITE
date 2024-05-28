import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh; /* 최소 화면 높이를 뷰포트 높이로 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 500px;
  max-width: 90%; /* 너비를 최대 90%로 설정 */
  margin: 50px; /* 위아래 여백을 줍니다. */
  background-color: rgb(248, 248, 248);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  color: rgb(100, 100, 100);
  position: relative;
  z-index: 1;
`;

export const Header = styled.div`
  position: absolute;
  top: -160px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 136px;
  background-image: url('./img/wiz__logo.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-bottom: 40px;
`;

export const Label = styled.label`
  font-weight: 700;
`;

export const Input = styled.input`
  border-width: 0 0 1px;
  outline: none;
  padding: 10px;
  color: black;
  transition: all 0.15s ease-in-out;
`;

export const Password = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const ForgotPassword = styled.a`
  text-align: left;
  color: rgba(70, 70, 70, 0.932);
  text-decoration: underline;
  margin-bottom: 0px;
  margin-right: 20px;
  order: 2;
`;

export const LoginButton = styled.button`
  background-color: rgb(27, 27, 27);
  padding: 18px;
  border-radius: 2px;
  text-align: center;
  margin-bottom: 20px;
  cursor: pointer;
  color: rgb(255, 255, 255);
  font-weight: 700;
  font-size: 25px;
  transition: opacity 0.3s;
  
  &:hover {
    opacity: 0.8;
  }
`;

export const RememberMe = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: rgb(70, 70, 70);
`;

export const RememberMeCheckbox = styled.input`
  margin-right: 8px;
`;

export const RememberMeLabel = styled.label`
  font-size: 14px;
  font-weight: 400;
`;
