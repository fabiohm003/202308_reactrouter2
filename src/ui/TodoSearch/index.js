import React from 'react'
import { useSearchParams } from 'react-router-dom'
import './TodoSearch.css';

export function TodoSearch({ setSearchValue, loading }) {
   
  const [searchParams, setSearchParams] = useSearchParams()

  const paramsValue = searchParams.get('search')

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
    setSearchParams({ search: event.target.value })
  };


    return (
        <input
          className="TodoSearch"
          placeholder="Cebolla"
          value={paramsValue ?? ''}
          onChange={onSearchValueChange}
          disabled={loading}
  
        />
    )
}

