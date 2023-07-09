import React from 'react'
import { UseGlobalContext } from './context'

const Search = () => {
  const {query,setQuery,error} = UseGlobalContext();
  return (
  <>
  <section className='search-section'>
    <h2>Search</h2>
    <form action='#' onSubmit={(e)=>e.preventDefault()}>
      <div>
        <input type="text" placeholder='enter movie name' value={query} onChange={(e)=>setQuery(e.target.value)} />
      </div>
    </form>
    <div className='card-error'>
      <p>
        {error.show && error.msg}
      </p>
    </div>
  </section>
  </>)

}

export default Search