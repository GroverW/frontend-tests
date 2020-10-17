import React, { useState } from 'react';
import { SEARCH_QUERY, INITIAL_STATE } from './constants';

export default function SearchForm({ getResults }) {
  const [formValues, setFormValues] = useState({ ...INITIAL_STATE });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormValues((current) => ({ ...current, [name]: value }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    getResults(formValues[SEARCH_QUERY]);
  }

  return (
    <div className="SearchForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name={SEARCH_QUERY}
          value={formValues[SEARCH_QUERY]}
          onChange={handleChange}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}