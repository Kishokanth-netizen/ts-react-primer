import { 
 createContext, 
 useReducer 
} from "react";
import { AxiosInstance } from "../instances/AxiosInstance";
import {
  Book,
  InitiaStateValue,
  SearchResultData,
  UserAction,
} from "./interfaces";

export const initialState: InitiaStateValue = {
  data: null,
  cart: [],
  isLoading: false,
  error: false,
  searchForTitle: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
};

export const BookContext = createContext(initialState);

const reducer = (
  state: InitiaStateValue,
  action: UserAction
): InitiaStateValue => {
  switch (action.type) {
    case "setData":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: false,
      };
    case "addToCart":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "removeFromCart":
      return {
        ...state,
        cart: state.cart.filter(
          (book) => book._version_ !== action.payload._version_
        ),
      };
    case "setIsLoading":
      return {
        ...state,
        isLoading: true,
        data: null,
      };
    case "error":
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchForTitle = async (title: string) => {
    try {
      dispatch({
        type: "setIsLoading",
      });

      const {
        data: { docs },
      } = await AxiosInstance.get<SearchResultData>("search.json?title=", {
        params: {
          title: title,
        },
      });

      dispatch({
        type: "setData",
        payload: docs,
      });
    } catch (error) {
      dispatch({
        type: "error",
      });
    }
  };

  const addToCart = (book: Book) => {
    dispatch({
      type: "addToCart",
      payload: book,
    });
  };

  const removeFromCart = (bookToRemove: Book) => {
    dispatch({
      type: "removeFromCart",
      payload: bookToRemove,
    });
  };

  return (
    <BookContext.Provider
      value={{
        data: state.data,
        cart: state.cart,
        isLoading: state.isLoading,
        error: state.error,
        searchForTitle,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
