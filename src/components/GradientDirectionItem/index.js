import {GradientDirectionsList, DirectionButton} from './styledComponents'

const GradientDirectionsItem = props => {
  const {directionDetails, onClickActiveDirection, isActive} = props
  const {displayText, value} = directionDetails

  const onClickDirection = () => {
    onClickActiveDirection(value)
  }
  console.log(isActive)
  return (
    <GradientDirectionsList>
      <DirectionButton onClick={onClickDirection} isActive={isActive}>
        {displayText}
      </DirectionButton>
    </GradientDirectionsList>
  )
}

export default GradientDirectionsItem
