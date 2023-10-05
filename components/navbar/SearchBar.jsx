export default function SearchBar () {
  return (
    <form className='d-flex align-items-center text-alter1' id='form-search-bar' role='search'>
      <label htmlFor='search-bar'>
        <i id='search-bar-icon' className='bi bi-search me-2' />
      </label>
      <input
        name='search-bar'
        type='search'
        id='search-bar'
        className='form-control bg-alter1 color-alter1 border-0'
        placeholder='Buscar aquí'
      />
    </form>
  )
}
