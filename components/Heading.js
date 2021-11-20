export default function Heading() {
  return (
    <div>
      <h1>
        Markdown + Katex <span>Previewer</span>
      </h1>
      <style jsx>{`
        h1 {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          display: grid;
          font-size: 2.3rem;
        }
        span {
          font-weight: 400;
          font-size: 1.9rem;
        }
        div {
          text-align: left;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
