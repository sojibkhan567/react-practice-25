import BookDetail from "./BookDetail"
import FatureBook from "./FeatureBook"

import PropTypes from "prop-types";


function BookRow({ book }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
      <BookDetail title={book.title} author={book.author} />
      <FatureBook featured={book.featured} />
    </div>
  )
}

//prop validation
BookRow.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookRow
