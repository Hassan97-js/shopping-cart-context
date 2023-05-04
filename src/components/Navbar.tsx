import { Navbar as NavbarBS, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { useShoppingCart } from '../hooks/shoppingCartHooks';

import ShoppingCart from './ShoppingCart';
import CustomIcon from './generic/CustomIcon';
import CustomBadge from './generic/CustomBadge';

import { RiShoppingBagLine } from 'react-icons/ri';

type Props = Record<string, never>;

const Navbar: React.FC<Props> = () => {
  const { computeCartQuantity, isOpen, closeCart, toggleCart, cartItems } =
    useShoppingCart();

  const cartQuantity = computeCartQuantity();

  const handleCartToggle = () => {
    toggleCart();
  };

  const handleClose = () => {
    closeCart();
  };

  return (
    <NavbarBS sticky='top' className='bg-white shadow-sm'>
      <Container>
        <NavbarBS.Brand href='/'>Shopify</NavbarBS.Brand>

        <Nav className='me-auto'>
          <Nav.Link as={NavLink} to='/'>
            Home
          </Nav.Link>

          <Nav.Link as={NavLink} to='/store'>
            Store
          </Nav.Link>

          <Nav.Link as={NavLink} to='/about'>
            About
          </Nav.Link>
        </Nav>

        <Button
          variant='outline-dark'
          className='rounded-pill position-relative'
          onClick={handleCartToggle}>
          <CustomIcon icon={<RiShoppingBagLine />} />

          {cartQuantity !== '0' && cartQuantity && (
            <CustomBadge
              badgeClassName='badge'
              position='top-0'
              start='start-100'
              translate='translate-middle'
              backgroundColor='danger'
              text={cartQuantity}
            />
          )}
        </Button>

        <ShoppingCart cartItems={cartItems} isOpen={isOpen} onHide={handleClose} />
      </Container>
    </NavbarBS>
  );
};

export default Navbar;
