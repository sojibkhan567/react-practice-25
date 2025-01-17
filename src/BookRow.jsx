import BookDetail from "./BookDetail"
import FatureBook from "./FeatureBook"

import PropTypes from "prop-types";


function BookRow({ book }) {
  return (
    <>
      <BookDetail title={book.title} author={book.author} />
      <FatureBook featured={book.featured} />
    </>
  )
}

//prop validation
BookRow.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookRow
