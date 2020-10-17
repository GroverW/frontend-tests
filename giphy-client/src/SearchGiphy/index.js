import React, { useState } from 'react';
import SearchForm from '../SearchForm';
import GifList from '../GifList';
import { API_URL } from './constants';

export default function Search() {
  const [results, setResults] = useState([]);

  const getResults = (query) => {
    fetch(`${API_URL}&q=${query}`)
      .then((response) => response.json())
      .then((data) => setResults(data.results))
      .catch((error) => console.log(error));
  }

  return (
    <div className="Search">
      <SearchForm getResults={getResults} />
      {Boolean(results.length) && <GifList gifs={results} />}
    </div>
  )
}