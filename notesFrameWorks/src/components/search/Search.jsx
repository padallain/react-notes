import React from 'react'
import style from './Search.module.css'
import { MdSearch } from 'react-icons/md'

const Search = ({handleSearchNote}) => {
  return (
    <div className={style.search}>
      <MdSearch className={style.searchIcon} size='1.3em'/>
      <input onChange={(e)=>handleSearchNote(e.target.value)} type="text" placeholder='type to search...' />
    </div>
  )
}

export default Search
