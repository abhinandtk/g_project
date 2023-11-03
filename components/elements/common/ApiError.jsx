import React from 'react'
import messages from '~/public/static/data/my-constants/Messages'

function ApiError() {
  return (
    <div className="home-page__api-error">
                    <p>{messages['api error']}</p>
                </div>
  )
}

export default ApiError