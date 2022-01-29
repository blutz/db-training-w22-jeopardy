import { useState, useEffect } from 'react'
import JeopardyQuestion from './JeopardyQuestion'

const URL = '//jservice.io/api/random'

function Jeopardy() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  const [score, setScore] = useState(0)

  async function loadData() {
    try {
      setData((await (await fetch(URL)).json())[0])
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { loadData() }, [])

  function changeScore(amount=0) {
    setScore(score+amount)
    loadData()
  }

  if(loading) {
    return <div>Loading&hellip;</div>
  } else if(data) {
    return <div>
      <JeopardyQuestion
        key={data.id}
        data={data}
        onRight={() => changeScore(data.value)}
        onWrong={() => changeScore()}
      />
      <hr />
      <div>Score: ${score}</div>
    </div>
  } else {
    return <div className='error'>Error: {JSON.stringify(error || 'Undefined')}</div>
  }
}

export default Jeopardy
