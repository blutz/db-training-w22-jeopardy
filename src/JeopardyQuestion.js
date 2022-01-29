import PropTypes from 'prop-types'
import JeopardyAnswer from './JeopardyAnswer'

function JeopardyQuestion({data, onRight, onWrong}) {
  return <div>
    <h2>{data.question}</h2>
    <JeopardyAnswer answer={data.answer} onRight={onRight} onWrong={onWrong} />
  </div>
}

JeopardyQuestion.propTypes = {
  data: PropTypes.object.isRequired,
  onRight: PropTypes.func.isRequired,
  onWrong: PropTypes.func.isRequired,
}

export default JeopardyQuestion
