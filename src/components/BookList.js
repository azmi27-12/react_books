import React from 'react'
import Book from './Book'
import { AppContext, useGlobalContext } from '../context'

const BookList = () => {
  const {books} = useGlobalContext();

  

  if(books.length < 1){
    return(
    <h2 className = 'section-title'>
      type the title of the book
    </h2>
    )  
}

  return (
    <section className="section">
      <h2 className="section-title">
        books
      </h2>
      <div className ='books-center'>
      {
        books.map((item)=>{
          return <Book key={item.id} {...item} />
        })
      }

      </div>
    </section>
  )
}

export default BookList