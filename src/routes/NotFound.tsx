import { CSSProperties } from 'react';

type Props = Record<string, never>;

const NotFound: React.FC<Props> = () => {
  const notFoundStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const notFoundStyleHeading: CSSProperties = {
    fontSize: '4rem',
    fontWeight: 'bold'
  };

  const notFoundStyleParagraph: CSSProperties = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#666'
  };

  return (
    <main className='main' style={notFoundStyle}>
      <h1 style={notFoundStyleHeading}>404 Not Found</h1>
      <p style={notFoundStyleParagraph}>
        The page you are looking for does not exist.
      </p>
    </main>
  );
};

export default NotFound;
