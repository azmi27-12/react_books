import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function SingleBook() {
  let { id } = useParams()
  id = id.substr(1);
  const [book, setBook] = React.useState(null)

  const url = 'https://www.googleapis.com/books/v1/volumes/'

  React.useEffect(() => {
    async function getBook() {
      try {
        const response = await fetch(`${url}${id}`)
        const data =await response.json()
       
        if(data){
          const {
            volumeInfo : {title : title,
            authors : authors,
            publisher : publisher,
            description : description,
            imageLinks : {thumbnail}
            },
            saleInfo : {
              retailPrice : {amount},
              buyLink : link
            }


          } = data

          const newBook = {
            title,
            authors,
            publisher,
            description,
            thumbnail,
            amount, 
            link
          }

          setBook(newBook)
        }else{
          setBook(null)
        }
        
      } catch (error) {
        console.log(error)
      }
      
    }
    getBook()
  }, [id])

  

  if(!book){
    return(
     <h2 className="section-title">no book to display</h2>
    )
  }
  const {
    title,
    authors,
    publisher,
    description,
    thumbnail,
    amount,
    link
  } = book;

    return (
      <section className="section book-section">
        <h2 className="section-title">
          {title}
        </h2>
        <div className="book-div">
          <img src={thumbnail} alt={title} />
          <div className="book-info">
            <p>
              <span className="book-data">title :</span>
              {title}
            </p>
            <p>
              <span className="book-data">authors :</span>
              {authors}
            </p>
            <p>
              <span className="book-data">publisher :</span>
              {publisher}
            </p>
            <p>
              <span className="book-data">price :</span>
              {amount} €
            </p>
            <p>
              <span className="book-data">description :</span>
              {description}
            </p>
            <p>
              <span className="book-data">link :</span>
              <a href={link}>click here</a>
            </p>
            
          </div>
        </div>
        <Link to = '/' className = 'btn btn-primary'>
          back home
        </Link>
      </section>
    )
  
}
