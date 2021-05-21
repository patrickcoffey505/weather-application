import React from 'react';

export default function SearchBar({value, handleSubmit}) {
    return (
        <form action="/" method="GET" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search..."
                value={ value }
            />
            <button type="submit">Search</button>
        </form>
    );
  };