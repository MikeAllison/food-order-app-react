import CartItem from './CartItem';

const Cart = () => {
  return (
    <ul>
      <CartItem name={'Lasagna'} price={12.99} amount={2} />
    </ul>
  );
};

export default Cart;
