import React from 'react'
import { Link } from 'react-router'

const ListItem = ({className, text}) => {
  return (
    <li className='group'>
        <Link className={`${className}`}>{text}</Link>
    </li>
  )
}

export default ListItem