import React, { useState } from 'react';
import SearchForm from '../SearchForm';

export default function Search() {
  const [results, setResults] = useState(false);

  const getResults = (evt) => {

  }

  return (
    <div className="Search">
      <SearchForm getResults={getResults}
    </div>
  )
}