import {Component} from 'react'

import {
  AppContainer,
  ResponsiveContainer,
  GradientGeneratorHeader,
  GradientDirectionsHeader,
  GradientDirectionsLists,
  ColourInputContainer,
  ColourTextAndInput,
  ColourValue,
  ColourInput,
  CustomButton,
} from './styledComponents'

import GradientDirectionsItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    fromColour: '#8ae323',
    toColour: '#014f7b',
    activeDirection: gradientDirectionsList[0].value,
    linearGradient: 'to top, #8ae323, #014f7b',
  }

  onChangeFromColour = event => {
    this.setState({
      fromColour: event.target.value,
    })
  }

  onChangeToColour = event => {
    this.setState({
      toColour: event.target.value,
    })
  }

  onClickActiveDirection = value => {
    this.setState({
      activeDirection: value,
    })
    console.log(value)
  }

  onClickGenerate = () => {
    const {fromColour, toColour, activeDirection} = this.state
    this.setState({
      linearGradient: `to ${activeDirection}, ${fromColour}, ${toColour}`,
    })
    console.log(`to ${activeDirection}, ${fromColour}, ${toColour}`)
  }

  render() {
    const {fromColour, toColour, linearGradient, activeDirection} = this.state
    return (
      <AppContainer
        data-testid="gradientGenerator"
        linearGradient={linearGradient}
      >
        <ResponsiveContainer>
          <GradientGeneratorHeader>
            Generate a CSS Color Gradient
          </GradientGeneratorHeader>
          <GradientDirectionsHeader>Choose Direction</GradientDirectionsHeader>
          <GradientDirectionsLists>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionsItem
                key={eachDirection.directionId}
                directionDetails={eachDirection}
                onClickActiveDirection={this.onClickActiveDirection}
                isActive={eachDirection.value === activeDirection}
              />
            ))}
          </GradientDirectionsLists>
          <GradientDirectionsHeader>Pick the Colors</GradientDirectionsHeader>
          <ColourInputContainer>
            <ColourTextAndInput>
              <ColourValue>{fromColour}</ColourValue>
              <ColourInput
                type="color"
                value={fromColour}
                onChange={this.onChangeFromColour}
              />
            </ColourTextAndInput>

            <ColourTextAndInput>
              <ColourValue>{toColour}</ColourValue>
              <ColourInput
                type="color"
                value={toColour}
                onChange={this.onChangeToColour}
              />
            </ColourTextAndInput>
          </ColourInputContainer>
          <CustomButton onClick={this.onClickGenerate}>Generate</CustomButton>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
