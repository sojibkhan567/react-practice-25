import BookList from "./BookList"
import Header from "./Header"
import Search from "./Search"

function Boimela() {
  return (
    <div className="mx-auto p-8">
      <>
        <Header />
        <Search />
        <BookList />
      </>
    </div>
  )
}

export default Boimela
