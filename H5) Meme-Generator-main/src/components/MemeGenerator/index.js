// Write your code here
import {Component} from 'react'

import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  FormAndMemeContainer,
  FormContainer,
  FormLabel,
  FormInput,
  FormSelect,
  FormOption,
  GenerateButton,
  MemeContainer,
  TextContent,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    activeOption: '',
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeOptionInput: fontSizesOptionsList[0].optionId,
  }

  onChangeBackgroundImage = event => {
    this.setState({imageUrlInput: event.target.value})
    console.log('hi')
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({activeOptionInput: event.target.value})
  }

  OnSubmitForm = event => {
    event.preventDefault()

    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      activeOptionInput,
    } = this.state

    this.setState({
      imageUrl: imageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeOption: activeOptionInput,
    })
  }

  getFormForMemeGeneration = () => {
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      activeOptionInput,
    } = this.state

    return (
      <FormContainer onSubmit={this.OnSubmitForm}>
        <FormLabel htmlFor="background-image">Image URL</FormLabel>
        <FormInput
          type="text"
          id="background-image"
          onChange={this.onChangeBackgroundImage}
          placeholder="Enter the image URL"
          value={imageUrlInput}
        />

        <FormLabel htmlFor="top-text">Top Text</FormLabel>
        <FormInput
          type="text"
          id="top-text"
          onChange={this.onChangeTopText}
          placeholder="Enter the Top Text"
          value={topTextInput}
        />

        <FormLabel htmlFor="bottom-text">Bottom Text</FormLabel>
        <FormInput
          type="text"
          id="bottom-text"
          onChange={this.onChangeBottomText}
          placeholder="Enter the Bottom Text"
          value={bottomTextInput}
        />

        <FormLabel htmlFor="font-size">Font Size</FormLabel>
        <FormSelect
          id="font-size"
          onChange={this.onChangeFontSize}
          value={activeOptionInput}
        >
          {fontSizesOptionsList.map(each => (
            <FormOption key={each.optionId}>{each.displayText}</FormOption>
          ))}
        </FormSelect>

        <GenerateButton type="submit">Generate</GenerateButton>
      </FormContainer>
    )
  }

  getMeme = () => {
    const {imageUrl, topText, bottomText, activeOption} = this.state

    return (
      <MemeContainer data-testid="meme" backgroundImage={imageUrl}>
        <TextContent activeFontSizeId={activeOption}>{topText}</TextContent>
        <TextContent activeFontSizeId={activeOption}>{bottomText}</TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>

          <FormAndMemeContainer>
            {this.getMeme()}
            {this.getFormForMemeGeneration()}
          </FormAndMemeContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
