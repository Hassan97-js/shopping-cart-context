import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { Home, About, Store, NotFound } from './routes';
import { Navbar } from './components';
import { ShoppingCartProvider } from './context';

type Props = Record<string, never>;

const App: React.FC<Props> = (): JSX.Element => {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/about' element={<About />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
  );
};

export default App;
