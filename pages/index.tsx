import { 
  useContext, 
  useState 
} from "react";
import BookList from "../components/home/BookList";
import InputBox from "../components/home/InputBox";
import { BookContext } from "../contexts/BookContext";

const Index = () => {
  const [bookTitle, setBookTitle] = useState<string>("");

  const {
    data,
    searchForTitle,
    addToCart,
    cart,
    removeFromCart,
    isLoading,
    error,
  } = useContext(BookContext);

  const searchForBook = () => {
    searchForTitle(bookTitle);
    setBookTitle("");
  };

  return (
    <section>
      <div>
        <InputBox
          setBookTitle={setBookTitle}
          bookTitle={bookTitle}
          searchForBook={searchForBook}
        >
          Welcome to the Book Search App (patent pending)
        </InputBox>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {data && (
          <BookList 
            data={data} 
            onButtonClicked={addToCart} 
            isCart={false} 
          />
        )}
        {isLoading && <p>Loading your results....</p>}
        {(!isLoading && error) ||
          (data?.length === 0 && (
            <p>Something went wrong, can you try another query please?</p>
          ))}
        <BookList 
          data={cart} 
          onButtonClicked={removeFromCart} 
          isCart 
        />
      </div>
    </section>
  );
};

export default Index;
