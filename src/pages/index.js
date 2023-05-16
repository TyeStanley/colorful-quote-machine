import { useState } from 'react'
import Head from 'next/head'
import quotes from '../assets/quotes.json'


export default function Home() {
  return (
    <>
      <Head>
        <title>Colorful Quote Machine</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="background-cover">
        <div id="quote-box">
          <p id="text">&quot;{quote.quote}&quot;</p>
          <div id="author">-{quote.author}</div>
          <div className="buttons-wrapper">
            <a href="https://twitter.com/intent/tweet" id="tweet-quote" target="_blank" rel="noreferrer">
              <button>Tweet Quote</button>
            </a>
            <button id="new-quote">
              New Quote
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
