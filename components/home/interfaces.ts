import { Book } from "../../contexts/interfaces";

export interface BookListProps {
  data: Array<Book>;
  onButtonClicked: (book: Book) => void;
  isCart: boolean;
}

export interface InputBoxProps {
  children: React.ReactNode;
  setBookTitle: (bookTitle: string) => void;
  bookTitle: string;
  searchForBook: () => void;
}
