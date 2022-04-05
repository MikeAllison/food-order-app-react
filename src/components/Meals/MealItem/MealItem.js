import MealItemForm from './MealItemForm';

import styles from './MealItem.module.css';

const MealItem = props => {
  return (
    <li className={styles.meal} id={props.id}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>${props.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
