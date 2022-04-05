import HeaderCartButton from './HeaderCartButton';

import styles from './Header.module.css';
import mealsImg from '../../assets/meals.jpg';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImg} alt="Food" />
      </div>
    </>
  );
};

export default Header;
