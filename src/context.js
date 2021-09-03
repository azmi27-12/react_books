import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.googleapis.com/books/v1/volumes?q='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState(' ')
  const [books, setBooks] = useState([])

  const fetchDrinks = useCallback( async () => {
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      const  {items}  = data


      if (items) {
      
        const newBooks = items.map((item) => {
         const { id,
           volumeInfo : {
             title,
             authors,
             imageLinks : {
              smallThumbnail
             }
           }
         }=item;
         return {
           id : id,
           title : title,
           authors : authors,
           image : smallThumbnail
         }
        })
        setBooks(newBooks)
      } else {
        setBooks([])
      }
    } catch (error) {
      console.log(error)
    }
  },[searchTerm])
  useEffect(() => {
    fetchDrinks()
  }, [searchTerm,fetchDrinks])
  return (
    <AppContext.Provider
      value={{  books, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
