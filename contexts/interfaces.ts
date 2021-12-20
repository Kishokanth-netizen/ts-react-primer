export interface InitiaStateValue {
  data: Array<Book> | null;
  cart: Array<Book>;
  isLoading: boolean;
  error: boolean;
  searchForTitle: (titleOfBook: string) => void;
  addToCart: (book: Book) => void;
  removeFromCart: (bookToRemove: Book) => void;
}

export type UserAction =
  | {
      type: "setData";
      payload: Array<Book>;
    }
  | {
      type: "addToCart";
      payload: Book;
    }
  | {
      type: "removeFromCart";
      payload: Book;
    }
  | {
      type: "setIsLoading";
    }
  | {
      type: "error";
    };

export interface SearchResultData {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: Array<Book>;
  num_found: number;
  q: string;
  offset: null;
}
export interface Book {
  _version_: number;
  title: string;
  author_name: Array<string>;
  first_publish_year: number;
}
