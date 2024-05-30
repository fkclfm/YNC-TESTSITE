import styled from "@emotion/styled"

export const TestBox = styled.div`
  width: 70%;
  border: 2px solid #d2d2d2;
  border-radius: 10px;
  height: 50rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
`
export const TestTitle = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ProgressBox = styled.div`
  position: relative;
`
export const Progress = styled.progress`
  appearance: none;
  margin-left: -340px;
  margin-bottom: 20px;
  position: absolute;
  top: -150px;

  &::-webkit-progress-bar {
    background-color: #d2d2d2;
    border-radius: 10px;
    border: 1px solid #eee;
    width: 670px;
    height: 14px;
    overflow: hidden;
    margin: 0 auto;
  }

  &::-webkit-progress-value {
    background: black;
    border-radius: 0px;
    height: 14px;
    width: 24px;
  }
`

export const Question = styled.h2`
  margin-top: 1rem;
`
export const TestButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`

export const TestButton = styled.button`
  color: black;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  padding: 1.25rem 20rem;
  opacity: 0.5;
  transition: 0.15 ease-in-out;
  &:hover {
    opacity: 1;
  }
`