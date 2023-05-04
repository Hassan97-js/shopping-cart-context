import { Button } from 'react-bootstrap';
import { RiDeleteBinLine } from 'react-icons/ri';

import { useShoppingCart } from '../hooks/shoppingCartHooks';

import { formatCurrency } from '../utils';
import CustomIcon from './generic/CustomIcon';

type Props = {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
  quantity: number;
};

const CartItem: React.FC<Props> = ({ id, name, imgUrl, price, quantity }) => {
  const { removeFromCart } = useShoppingCart();

  /* HANDLERS */
  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  return (
    <div key={id} className='d-flex justify-content-between align-items-center'>
      <div className='d-flex align-items-center gap-3'>
        <img
          src={imgUrl}
          alt={name}
          width={90}
          height={90}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />

        <div className='d-flex flex-column'>
          <p className='d-flex gap-2 mb-0'>
            <span className='fw-semibold'>{name}</span>
            <span className='text-muted fs-6'>{quantity > 1 && `x${quantity}`}</span>
          </p>
          <span className='text-muted fs-6'>{formatCurrency(price)}</span>
        </div>
      </div>

      <div className='d-flex align-items-center gap-3'>
        <span className='d-flex justify-content-center align-items fs-6 text-muted'>
          {formatCurrency(price * quantity)}
        </span>

        <Button
          className='fs-6'
          variant='outline-danger'
          onClick={handleRemoveFromCart}>
          <CustomIcon size='1.1em' icon={<RiDeleteBinLine />} />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
