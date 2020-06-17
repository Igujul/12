import React, { useState } from 'react'
import { history } from '../redux'

const Main = () => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }
  const onClick = () => {
    history.push(`/${value}`)
  }
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white hover:text-white-500 text-black font-bold rounded-lg border shadow-lg p-0.1">
          <input
            id="input-field"
            value={value}
            onChange={onChange}
            type="text"
            placeholder="input username"
          />
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            type="button"
            onClick={onClick}
            id="search-button"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
