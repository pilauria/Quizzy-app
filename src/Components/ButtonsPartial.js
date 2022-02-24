import React from 'react'
import { useDispatch } from 'react-redux'

import FetchButton from './FetchButton'

function ButtonsPartial() {
  const dispatch = useDispatch()

  const replay = () => {
    dispatch({
      type: 'SET_INDEX',
      index: 0,
    })

    dispatch({
      type: 'SET_SCORE',
      score: 0,
    })
  }

  const settings = () => {
    dispatch({
      type: 'SET_QUESTIONS',
      questions: [],
    })

    dispatch({
      type: 'SET_SCORE',
      score: 0,
    })
  }

  return (
    <div className="buttons">
      <button className="amount color-small" onClick={replay}>
        Restart
      </button>
      <button className="amount color-small" onClick={settings}>
        Back to settings
      </button>
    </div>
  )
}
export default ButtonsPartial
