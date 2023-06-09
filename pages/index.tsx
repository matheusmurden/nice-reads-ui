import Head from 'next/head';
import SessionToast from '@/components/SessionToast'

import { gql, useQuery } from "@apollo/client";
import { FC, useState } from 'react';

const query = gql`
query GetBooks {
    books {
      id,
      title,
      author
    }
}`;

const Home: FC = () => {

  const [books, setBooks] = useState([])

  const { loading, error, data } = useQuery(query, {
    onError: (e) => {
      console.log(e?.graphQLErrors)
      console.log(e?.clientErrors)
      console.log(e?.networkError)
      console.log(e?.extraInfo)
      console.log(e?.message)
      console.log(e?.name)
      console.log(e?.stack)
    },
    onCompleted: (data) => {
      setBooks(data?.books)
    }
  })

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SessionToast/>
        <h1>Book List</h1>
        {((!loading && !error) && !!books) && (
          <ul>
            {books?.map(book => 
              <li key={book.id}>{book?.title} — {book?.author}</li>
            )}
          </ul>
        )}
      </main>
    </>
  )
}

export default Home