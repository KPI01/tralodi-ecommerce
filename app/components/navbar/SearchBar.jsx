import BsSearch from "../svg/BsSearch";

export default function SearchBar() {  
  return (
    <form className="d-flex align-items-center justify-content-end text-alter1 my-md-3 mx-auto" id="form-search-bar" role="search">
      <label htmlFor="search-bar">
      <BsSearch />
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
