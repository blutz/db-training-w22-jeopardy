import { useState, Fragment } from 'react'
import PropTypes from 'prop-types'

function JeopardyAnswer({answer}) {
  const [shown, setShown] = useState(false)
  return <Fragment>
    {shown ? <h3>{answer}</h3> : <h3 onClick={() => setShown(true)}>(reveal answer)</h3>}
  </Fragment>
}

JeopardyAnswer.propTypes = {
  answer: PropTypes.string.isRequired,
}

export default JeopardyAnswer
