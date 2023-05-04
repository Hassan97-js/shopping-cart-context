import { Offcanvas, Stack } from 'react-bootstrap';

import { useShoppingCart } from '../hooks/shoppingCartHooks';
import { formatCurrency } from '../utils';

import CartItem from './CartItem';

type CartItem = {
  id: number;
  quantity: number;
};

type Props = {
  cartItems: CartItem[];
  isOpen: boolean;
  onHide: () => void;
};

const ShoppingCart: React.FC<Props> = ({ isOpen, onHide, cartItems }) => {
  const { storeItems, computeCartTotal } = useShoppingCart();

  const cartTotal = computeCartTotal();

  return (
    <Offcanvas show={isOpen} onHide={onHide} placement='end'>
      <Offcanvas.Header className='mb-2' closeButton>
        <Offcanvas.Title className='fs-2 fw-semibold'>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <Stack gap={3} className='mb-5'>
          {cartItems.length ? (
            cartItems.map((item) => {
              const storeItem = storeItems.find(
                (storeItem) => storeItem.id === item.id
              );

              if (!storeItem) {
                return;
              }

              return (
                <CartItem key={item.id} quantity={item.quantity} {...storeItem} />
              );
            })
          ) : (
            <p className='fs-5 text-muted'>Cart is empty</p>
          )}
        </Stack>

        {cartTotal > 0 && (
          <div className='d-flex justify-content-between align-items-center my-3'>
            <p className='fs-3 mb-0'>Total</p>
            <p className='fs-5 fw-bold mb-0'>{formatCurrency(cartTotal)}</p>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
