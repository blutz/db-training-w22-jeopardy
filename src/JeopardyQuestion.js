import PropTypes from 'prop-types'

function JeopardyQuestion({data}) {
  return <div>{JSON.stringify(data)}</div>
}

JeopardyQuestion.propTypes = {
  data: PropTypes.object.isRequired,
}

export default JeopardyQuestion
