import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, GitHubLogoIcon } from '@radix-ui/react-icons';

const handleFormSubmit = (e) => {
  e.preventDefault();
};

export default function IconList() {
  const { theme, setTheme } = useTheme();
  const [show, setShow] = useState(false);

  // https://github.com/pacocoursey/next-themes/#avoid-hydration-mismatch
  useEffect(() => {
    setShow(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!show) return <></>;

  return (
    <form onSubmit={handleFormSubmit}>
      <button onClick={toggleTheme}>
        {theme === 'light' ? (
          <MoonIcon width="30" height="30" aria-label="Change to Dark Mode" />
        ) : (
          <SunIcon width="30" height="30" aria-label="Change to Light Mode" />
        )}
      </button>
      {/* <button>
        <QuestionMarkCircledIcon
          width="30"
          height="30"
          aria-label="What is this?"
        />
      </button> */}
      <a href="https://www.github.com/deadmercury/markdown-katex-previewer">
        <GitHubLogoIcon
          width="30"
          height="30"
          aria-label="View Github Repository"
        />
      </a>
      <style jsx>{`
        form {
          display: flex;
          column-gap: 1.25rem;
        }
        a {
          color: inherit;
        }
      `}</style>
    </form>
  );
}
