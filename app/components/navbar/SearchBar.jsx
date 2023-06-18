export default function SearchBar() {  
  return (
    <form className="d-flex align-items-center justify-content-end text-alter1 my-md-3 mx-auto" id="form-search-bar" role="search">
      <label htmlFor="search-bar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        class="bi bi-search me-2"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
      </label>
      <input
        name="search-bar"
        type="search"
        id="search-bar"
        className="form-control bg-alter1 color-alter1 border-0"
        placeholder="Buscar aquí"
      />
    </form>
  );
}
