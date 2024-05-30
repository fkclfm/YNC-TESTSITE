import styled from '@emotion/styled';

// Emotion으로 스타일된 컴포넌트 정의
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 500px;
  height: 650px;
  background-color: rgb(248, 248, 248);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 28px;
  color: rgb(100, 100, 100);
  z-index: 1;
  position: relative;
`;

export const HeaderBackground = styled.div`
  width: 200px;
  height: 136px;
  background-image: url('./img/wiz__logo.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-weight: 700;
`;

export const Input = styled.input`
  border-width: 0 0 1px;
  outline: none;
  padding: 10px;
  color: rgb(0, 0, 0);
  transition: all 0.15s ease-in-out;
`;

export const Password = styled(Email)``; // 패스워드 스타일은 이메일과 동일

export const ForgotPassword = styled.a`
  text-align: center;
  color: rgb(0, 0, 0);
  text-decoration: underline;
  margin-bottom: 15px;
`;

export const CheckButton = styled.button`
  border: 1px solid black;
  color: rgb(1, 0, 0);
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(185, 185, 185);
    color: rgb(58, 38, 59);
  }
`;

export const LoginButton = styled.button`
  background-color: black;
  padding: 13px;
  border-radius: 1px;
  text-align: center;
  color: rgb(255, 255, 255);
  font-weight: 700;
  font-size: 25px;
`;
