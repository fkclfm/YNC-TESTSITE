import styled from "@emotion/styled";

export const MyPageBox = styled.div`
  padding: 70px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
` 
// 프로필 UI
export const ProfileBox = styled.div`
  width: 30%;
  border: 1px solid #d2d2d2;
  border-radius: 0.7rem;
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  padding: 0 2.5rem;
` 

export const Profile = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 1px solid #d2d2d2;
`
export const EditProfile = styled.div`
  border: 1px solid #cae9a9;
  width: 100%;
  height: 2.5rem;
  border-radius: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
`
export const EditProfileIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
`
export const EditProfileText = styled.span`
  color: #8ec96d;
  font-weight: 500;
`

//마이페이지 UI
export const Userinfo = styled.div`
  width: 60%;
  border: 1px solid #d2d2d2;
  border-radius: 0.7rem;
  height: 50rem;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`
export const InfoFlexBox = styled.div`
  width: 14rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const featuresBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const feature = styled.div`
  display: flex;
  flex-direction: column;
  
`