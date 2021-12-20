import { 
 useEffect, 
 useRef, 
 ChangeEvent, 
 FormEvent 
} from "react";
import { InputBoxProps } from "./interfaces";

const InputBox = ({
  children,
  setBookTitle,
  bookTitle,
  searchForBook,
}: InputBoxProps) => {
    
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBookTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    searchForBook();
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div style={{ backgroundColor: "gray", padding: "10px" }}>
      {children}
      <form>
        <input
          ref={inputRef}
          placeholder="Enter title"
          value={bookTitle}
          onChange={handleChange}
        />
        <input onClick={handleSubmit} value="Search" type="submit" />
      </form>
    </div>
  );
};

export default InputBox;
