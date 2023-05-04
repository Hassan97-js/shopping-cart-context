import { Row, Col } from 'react-bootstrap';
import { items } from '../data';

import { StoreItem } from '../components';

type Props = Record<string, never>;

const Store: React.FC<Props> = () => {
  return (
    <main className='main mt-5'>
      <Row style={{ overflow: 'hidden' }} xs={1} md={2} lg={3} className='g-4'>
        {items.map((item) => (
          <Col
            key={item.id}
            style={{
              textOverflow: 'ellipsis',
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10
            }}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </main>
  );
};

export default Store;
