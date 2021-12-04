import math from 'remark-math';
import katex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import ReactMarkdown from 'react-markdown';

export default function OutputSection({ input }) {
  return (
    <>
      <section>
        <h3>Preview</h3>
        <div>
          <ReactMarkdown rehypePlugins={[katex]} remarkPlugins={[math]}>
            {input}
          </ReactMarkdown>
        </div>
        <style jsx>{`
          h3 {
            font-family: sans-serif;
            font-size: 1.375rem;
            font-weight: 600;
          }
          div {
            height: 25ch;
            width: 100%;
            padding: 0.5rem;
            overflow: auto;
            color: inherit;
            border: 1px solid;
          }
        `}</style>
      </section>
    </>
  );
}
