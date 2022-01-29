import PropTypes from 'prop-types'
import JeopardyAnswer from './JeopardyAnswer'

function JeopardyQuestion({data}) {
  return <div>
    <h2>{data.question}</h2>
    <JeopardyAnswer answer={data.answer} />
  </div>
}

JeopardyQuestion.propTypes = {
  data: PropTypes.object.isRequired,
}

export default JeopardyQuestion
