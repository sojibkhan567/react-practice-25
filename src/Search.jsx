import PropTypes from "prop-types";
function Search({ searchTerm, onSearchBook }) {
  return (
    <form>
      <input
        className="border w-full rounded-md p-1 mb-4"
        value={searchTerm}
        onChange={(event) => onSearchBook(event.target.value)}
        type="text"
        placeholder="Search Books...."
      />
    </form>
  )
}
Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchBook: PropTypes.func.isRequired,
}

export default Search
