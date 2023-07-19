import PropTypes from 'prop-types'
import {ButtonContainer, Button} from 'components/FeedbackOptions/FeedbackOptions.styled'

export const FeedbackOptions = ({ options, handleClick}) => {

  return (<ButtonContainer>  {options.map(option => {
    return (
      <Button type="button" key={option} onClick={() => handleClick(option)}>
        {option}
      </Button>
    )
})}
  </ButtonContainer>
  )
}


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleClick: PropTypes.func.isRequired
}

