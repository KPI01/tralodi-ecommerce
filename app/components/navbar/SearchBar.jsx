"use client";

import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  
  return (
    <form className="d-flex align-items-center text-alter1" id="form-search-bar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        class="bi bi-search me-2"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
      <input
        type="search"
        id="search-bar"
        className="form-control bg-primary color-alter1 border-0 fs-5"
        placeholder="Buscar aquí"
        onChange={event => setQuery(event.target.value)}
        style={{width: query && query.length + 6.5 + 'ch'}}
      />
    </form>
  );
}
