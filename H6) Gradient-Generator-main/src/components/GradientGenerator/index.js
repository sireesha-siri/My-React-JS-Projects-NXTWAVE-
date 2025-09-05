import {Component} from 'react'

import {
  AppContainer,
  MainContainer,
  Heading,
  TextContent,
  GradientDirectionList,
  ColorPickerContainer,
  ColorPickerBox,
  ColorValue,
  InputColor,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

// Write your code here
class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  getDirection = direction => {
    this.setState({activeDirection: direction})
  }

  onClickGenerate = () => {
    const {firstColor, secondColor, activeDirection} = this.state
    this.setState({
      gradientValue: `to ${activeDirection}, ${firstColor}, ${secondColor}`,
    })
  }

  render() {
    const {activeDirection, firstColor, secondColor, gradientValue} = this.state

    return (
      <AppContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <MainContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <TextContent>Choose Direction</TextContent>

          <GradientDirectionList>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                directionDetails={each}
                getDirection={this.getDirection}
                isActive={each.value === activeDirection}
              />
            ))}
          </GradientDirectionList>

          <TextContent>Pick the Colors</TextContent>

          <ColorPickerContainer>
            <ColorPickerBox>
              <ColorValue>{firstColor}</ColorValue>
              <InputColor
                type="color"
                value={firstColor}
                onChange={this.onChangeFirstColor}
              />
            </ColorPickerBox>

            <ColorPickerBox>
              <ColorValue>{secondColor}</ColorValue>
              <InputColor
                type="color"
                value={secondColor}
                onChange={this.onChangeSecondColor}
              />
            </ColorPickerBox>
          </ColorPickerContainer>

          <GenerateButton onClick={this.onClickGenerate}>
            Generate
          </GenerateButton>
        </MainContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
