import Head from 'next/head';
import { useState } from 'react';
import Heading from '../components/Heading';
import IconList from '../components/IconList';
import InputSection from '../components/InputSection';
import OutputSection from '../components/OutputSection';

export default function Home() {
  const [input, setInput] = useState('');

  return (
    <>
      <Head>
        <title>Markdown + Katex Previewer</title>
        <meta
          name="description"
          content="Markdown and katex online previewer"
        />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <header>
        <Heading />
      </header>
      <main>
        <InputSection input={input} setInput={setInput} />
        <OutputSection input={input} />
      </main>
      <footer>
        <IconList />
      </footer>
      <style jsx>{`
        main {
          display: grid;
          row-gap: 1rem;
        }
        footer {
          justify-self: center;
        }
      `}</style>
    </>
  );
}
