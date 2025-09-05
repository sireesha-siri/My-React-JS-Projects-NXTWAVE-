// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 90%;
  padding: 50px;
  font-family: 'Roboto';
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 40px;

  @media screen and (min: width:768px) {
    font-size: 30px;
  }
`

export const TextContent = styled.p`
  color: #ededed;
  font-size: 22px;
`

export const GradientDirectionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`

export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
`

export const ColorPickerBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`

export const ColorValue = styled.p`
  color: #ededed;
  font-size: 22px;
  font-weight: 500;
`

export const InputColor = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  background-color: #00c9b7;
  min-width: 25px;
  border-radius: 6px;
  border: none;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-left: 15px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-top: 1px;
  outline: none;
  cursor: pointer;
`
