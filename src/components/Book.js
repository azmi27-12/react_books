
import React from 'react'
import { Link } from 'react-router-dom'

const Book = ({id,title,image,authors}) => {
  return (
    <article className="book">
      <div className="img-container">
        <img src={image} alt = {title} />
      </div>
      <div className="book-footer">
        <h3>{title}</h3>
        <h4>{authors}</h4>
        <Link to = {`/book/:${id}`} className = 'btn btn-primary btn-details'>
        details
        </Link>
      </div>
    </article>
  )
}

export default Book