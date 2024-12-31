import React from 'react'
import { Link } from 'react-router'

const Image = ({to, src, alt}) => {
  return (
    <Link to={to}>
        <picture>
            <img src={src} alt={alt} />
        </picture>
    </Link>
  )
}

export default Image