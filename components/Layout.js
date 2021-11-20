export default function Layout({ children }) {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          margin: 2.5rem 0.5rem 1rem;
          display: grid;
          row-gap: 2rem;
        }
        @media screen and (min-width: 768px) {
          div {
            width: 80vw;
            margin: 2.5rem auto 1rem;
          }
        }
      `}</style>
    </>
  );
}
