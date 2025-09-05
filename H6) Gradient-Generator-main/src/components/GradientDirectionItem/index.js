// Write your code here
import {GradientList, GradientButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, getDirection, isActive} = props

  const {value, displayText} = directionDetails

  const checkDirection = () => {
    getDirection(value)
  }

  return (
    <GradientList>
      <GradientButton
        type="button"
        onClick={checkDirection}
        isActive={isActive}
      >
        {displayText}
      </GradientButton>
    </GradientList>
  )
}

export default GradientDirectionItem
