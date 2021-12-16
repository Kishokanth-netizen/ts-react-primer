import type { AppProps } from 'next/app';

import { BookProvider } from '../contexts/BookContext';

function MyApp({
 Component, pageProps,
}: AppProps) {
 return (
   <BookProvider>
     <Component {...pageProps} />
   </BookProvider>
 );
}

export default MyApp;