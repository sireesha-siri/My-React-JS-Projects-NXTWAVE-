// Style your elements here
import styled from 'styled-components'

export const GradientList = styled.li`
  width: 49%;
  list-style-type: none;
  margin-top: 10px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    width: 24%;
  }
`

export const GradientButton = styled.button`
  height: 45px;
  width: 90px;
  border-radius: 7px;
  border: none;
  padding: 5px;
  color: #334155;
  font-weight: bold;
  background-color: white;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
`
