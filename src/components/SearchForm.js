import React from 'react'
import { AppContext, useGlobalContext } from '../context'

const SearchForm = () => {

const {setSearchTerm} = useGlobalContext()
const searchValue = React.useRef('');

React.useEffect(()=>{
  searchValue.current.focus()
},[])

const searchBook = () =>{
  setSearchTerm(searchValue.current.value)
}

const handleSubmit = (e) => {
  e.preventDefault()
}
  return (
    <section className = 'section search'>
      <form className="search-form" onSubmit = {handleSubmit}>
        <div className="form-control">
          <label htmlFor="title">search your book</label>
          <input type="text" id= 'title' ref = {searchValue} onChange = {searchBook} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm