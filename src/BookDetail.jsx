import PropTypes from "prop-types";

function BookDetail({ title, author }) {
  return (
    <div>
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="text-gray-600">{author}</p>
    </div>
  )
}

BookDetail.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookDetail;
