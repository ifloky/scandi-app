import styles from './Card.module.scss';
import React from 'react';

function Card(props) {

  const [isChecked, setChecked] = React.useState(false);


  const onCheckItem = () => {
    props.onBut(props.id)
    setChecked(!isChecked)
  }

  
  const massDel = () => {
    //for(let i=1, n=itemsDel.length; i<n; i++) {
    //  let idItem = itemsDel[i].id;
    //  try{
    //    console.log("удалить")
    //    fetch(`https://62f65180612c13062b4ba68a.mockapi.io/items/${idItem}`, {
    //            method: "DELETE",
    //        });
    //    } catch (err) {
    //      console.log('delete:' + err);
    //    }
    //}
    console.log(Card.key);
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
