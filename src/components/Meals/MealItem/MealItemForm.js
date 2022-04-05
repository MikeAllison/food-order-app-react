import Input from '../../UI/Input';

import styles from './MealItemForm.module.css';

const MealItemForm = () => {
  const formHandler = e => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form className={styles.form}>
      <Input type={'text'} label={'Quantity'} id={'quantity'} />
      <button onClick={formHandler}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
