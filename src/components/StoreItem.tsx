import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { RiAddFill } from 'react-icons/ri';

import { useShoppingCart } from '../hooks/shoppingCartHooks';
import { formatCurrency } from '../utils';

import CustomIcon from './generic/CustomIcon';

type Props = {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
};

const StoreItem: React.FC<Props> = ({ id, name, imgUrl, price }) => {
  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    getItemQuantity
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  const formatPrice = formatCurrency(price);

  /* HANDLERS */
  const handleAddToCart = () => {
    increaseCartQuantity(id);
  };

  const handleDecreaseCartQuantity = () => {
    decreaseCartQuantity(id);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  return (
    <Card className='h-100'>
      <Card.Img
        style={{ height: 250, objectFit: 'cover', objectPosition: 'center' }}
        variant='top'
        src={imgUrl}
        alt={name}
      />

      <Card.Body className='d-flex flex-column'>
        <Card.Title className='fw-semibold d-flex flex-wrap justify-content-between align-items-baseline mb-4'>
          <span className='fs-3'>{name}</span>
          <span className='ms-2 text-muted'>{formatPrice}</span>
        </Card.Title>

        <Card.Text className='text-truncate'>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>

        {/* Conditional rendering based on StoreItem quantity */}
        <div className='mt-auto'>
          {quantity < 1 && (
            <Button
              className='fw-semibold mt-2 d-flex align-items-center justify-content-center w-100'
              variant='outline-dark'
              onClick={handleAddToCart}>
              <CustomIcon icon={<RiAddFill />} className='me-1' />
              <span>Add to cart</span>
            </Button>
          )}

          {quantity > 0 && (
            <div className='d-flex align-items-center g-1'>
              <div className='d-flex flex-column align-items-center justify-content-center w-100 g-1'>
                <ButtonGroup aria-label='product quantity'>
                  <Button
                    size='sm'
                    className='fs-6'
                    variant='dark'
                    onClick={handleAddToCart}>
                    +
                  </Button>
                  <Button size='sm' className='fs-5' disabled variant='dark'>
                    {quantity}
                  </Button>
                  <Button
                    size='sm'
                    className='fs-6'
                    variant='dark'
                    onClick={handleDecreaseCartQuantity}>
                    -
                  </Button>
                </ButtonGroup>

                <Button
                  size='sm'
                  className='outline-bg-danger mt-3'
                  variant='outline-danger'
                  onClick={handleRemoveFromCart}>
                  Remove
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
