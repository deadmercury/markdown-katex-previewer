import { TrashIcon, ClipboardCopyIcon } from '@radix-ui/react-icons';

const handleFormSubmit = (e) => {
  e.preventDefault();
};

export default function InputSection({ input, setInput }) {
  const clearInput = () => {
    setInput('');
  };

  const copyInput = () => {
    navigator.clipboard.writeText(input);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="input">Markdown + Katex</label>
          <div>
            <button onClick={clearInput}>
              <TrashIcon width="32" height="32" aria-label="Clear All" />
            </button>
            <button onClick={copyInput}>
              <ClipboardCopyIcon width="28" height="28" aria-label="Copy All" />
            </button>
          </div>
          <style jsx>{`
            label {
              font-family: 'Inter', sans-serif;
              font-size: 1.375rem;
              font-weight: 600;
            }
            div {
              display: flex;
              justify-content: space-between;
            }
            div > div {
              display: flex;
              align-items: center;
              column-gap: 1rem;
            }
          `}</style>
        </div>
        <textarea
          id="input"
          value={input}
          onChange={({ currentTarget }) => {
            setInput(currentTarget.value);
          }}
        ></textarea>
      </form>
    </>
  );
}
