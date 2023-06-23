import React from 'react'
import spinner from './loading.svg'
const Spinner = () => {
  return (
    <div>
      <div className="text-center">
        <img src={spinner} alt="loading" className="my-3" />
      </div>
    </div>
  )
}

export default Spinner
