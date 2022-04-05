import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = () => {
  const cartButtonClickHandler = e => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <button className={styles.button} onClick={cartButtonClickHandler}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
