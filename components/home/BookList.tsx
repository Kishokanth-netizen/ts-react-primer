import { BookListProps } from "./interfaces";

const BookList = ({ data, onButtonClicked, isCart }: BookListProps) => {
  return (
    <section style={{ width: `${isCart ? "30vw" : "60vw"}` }}>
      {data?.map((book) => (
        <div
          style={{
            border: "1px solid black",
            margin: "10px 0px",
            padding: "10px",
            backgroundColor: `${isCart && "gray"}`,
          }}
          key={book._version_}
        >
          <p>{`Name: ${book.title}`}</p>
          <p>{`Author: ${book.author_name}`}</p>
          <p>{`First published in: ${book.first_publish_year}`}</p>
          <button
            onClick={() => {
              onButtonClicked(book);
            }}
            type="button"
          >
            {isCart ? "Remove from cart" : "Add to Cart"}
          </button>
        </div>
      ))}
    </section>
  );
};

export default BookList;
