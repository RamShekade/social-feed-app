import React from 'react';

export default function Filter({ setFilter }) {
  return (
    <input
      type="text"
      placeholder="Filter by username"
      onChange={(e) => setFilter(e.target.value)}
      className="filter-input"
    />
  );
}
