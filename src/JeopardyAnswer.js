import { useState, Fragment } from 'react'
import PropTypes from 'prop-types'

function JeopardyAnswer({answer, onRight, onWrong}) {
  const [shown, setShown] = useState(false)
  return <Fragment>
    <div>{shown ? <h3>{answer}</h3> : <h3 onClick={() => setShown(true)}>(reveal answer)</h3>}</div>
    {shown && <div>
      <a href='#' onClick={onRight}>I got it right! 🎉</a> • <a href='#' onClick={onWrong}>I got it wrong 😭</a>
    </div>}
  </Fragment>
}

JeopardyAnswer.propTypes = {
  answer: PropTypes.string.isRequired,
  onRight: PropTypes.func.isRequired,
  onWrong: PropTypes.func.isRequired,
}

export default JeopardyAnswer
