import React from 'react'

export const Helmet = (props) => {

    document.title = 'A-Store - ' + props.title 
  return (
    <div className='w-100'>{props.children}</div>
  )
}
