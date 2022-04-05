import Cart from '../Cart/Cart';

import styles from './Modal.module.css';

const Modal = () => {
  return (
    <>
      <div className={styles.backdrop}></div>
      <div className={styles.modal}>
        <Cart />
      </div>
    </>
  );
};

export default Modal;
