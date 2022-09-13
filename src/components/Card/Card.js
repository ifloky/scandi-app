import styles from './Card.module.scss';
import React from 'react';

function Card(props) {

  
  const [isChecked, setChecked] = React.useState(false);

  const onCheckItem = () => {
    props.onBut(props);
    setChecked(!isChecked);
  }

  return (
    <div className={styles.card}>
        <img src={props.srcImg} alt="item" />
        <p className={styles.name}>{props.name}</p>
        <p className={styles.price}>{props.price} $</p>
        <p className={styles.specValue}>{props.specValue}</p>
        <p className={styles.sku}>SKU: {props.sku}</p>
        <img id={styles.checkItem} onClick={()=> onCheckItem()} src={isChecked ? 'img/checked.svg' : 'img/non-checked.svg'} />
    </div>
  );
}

export default Card;
