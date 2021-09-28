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
        const available = data.saleInfo.saleability

        function makeNewBookAvailable(data){
            const {
                volumeInfo : {
                title : title,
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
    
            setBook(newBook);
        }

        function makeNewBookNotAvailable(data){
          const {
                volumeInfo : {
                title : title,
                authors : authors,
                publisher : publisher,
                description : description,
                imageLinks : {thumbnail}
                },
                saleInfo : {
                  buyLink : link
                }
            } = data
          
            let amount = 'not for sale'
            const newBook = {
              title,
              authors,
              publisher,
              description,
              thumbnail,
              amount, 
              link
            }
            setBook(newBook);
        }
          if(data){
            if(available === 'FOR_SALE')  
              makeNewBookAvailable(data)
            else
              makeNewBookNotAvailable(data)
          }else{
            setBook(null)
            return (<h2 className="section-title">no book to display</h2>)
          }
          
      }catch (error) {
        console.log(error)
      }
      
    }
    getBook()
  }, [id])

  if(book){
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
                <span className = 'book-data'>title :</span>
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
                <span className="book-data">description :</span>
                {description}
              </p>
              <p>
                <span className="book-data">price :</span>
                {amount}
              </p>
              
                <span className="book-data">link :</span>
                  {
                    link !== undefined ? 
                      <a href = {link}> click here </a>
                      :
                      <p >non disponibile</p> 
                  }
              
            </div>
          </div>
          
          
          <Link to = '/' className = 'btn btn-primary'>
            back home
          </Link>
        </section>
      )
    
    
  } else{
    return(
     <h2 className="section-title">loading book</h2>
    )
  }
}
