import styles from './FormAdd.module.scss';
import React from 'react';
import {useForm} from 'react-hook-form';

function Card(props) {

  const [isSelect, setSelectActive] = React.useState('Set type item');

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode:"onBlur"
  });

  const onSubmit = async (data) => {
    let dataSend = JSON.stringify(data);
    console.log(dataSend);
    try {
      const response = await fetch('https://62f65180612c13062b4ba68a.mockapi.io/items', {
        method: 'post', // или 'PUT'
        body: dataSend, // данные могут быть 'строкой' или {объектом}!
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const json = await response.json();
      console.log('Успех:', JSON.stringify(json));
    } catch (error) {
      console.error('Ошибка:', error);
    }

    reset();
  };

  let setSelect = (e) => {
    let option = e.target.value;
    setSelectActive(option);
  }
  
  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="sku">SKU</label>
          <input name="sku"             
          {...register("sku", {
              required: "Поле обязательно к заполнению"
            })}/>
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name"
            {...register("name", {
              required: "Поле обязательно к заполнению"
            })}
            />
        </div>
        <div>
          <label htmlFor="price">Price ($)</label>
          <input name="price"
            {...register("price", {
              required: "Поле обязательно к заполнению"
            })}
          />
        </div>
        <div>
          <label htmlFor="switcher">Type Switcher</label>
          <select onChange={(e) => setSelect(e)} >
            <option value="Set type item">Set type item</option>
            <option value="DVD">DVD</option>
            <option value="Furniture">Furniture</option>
            <option value="Book">Book</option>
          </select>
        </div>
        { isSelect === 'DVD' ? 
            <div id='DVD' className={styles.dvd}>
              <label htmlFor="specValue" >Size (MB)</label>
              <input type="text" name="specValue"
                {...register("specValue", {
                  required: "Поле обязательно к заполнению"
                })}
              />
            </div> : <span></span>
        }
        { isSelect === 'Furniture' ?
            <div id='Furniture' className={styles.furniture}>
              <div>
                <label htmlFor="height">Height (CM)</label>
                <input type="text"  name="height"
                  {...register("specValue", {
                  required: "Поле обязательно к заполнению"
                })}
                />
              </div>
              <div>
                <label htmlFor="width">Width (CM)</label>
                <input type="text"  name="width"
                  {...register("specValue", {
                  required: "Поле обязательно к заполнению"
                })}
                />
              </div>
              <div> 
                <label htmlFor="length">Length (CM)</label>
                <input type="text"  name="length"
                  {...register("specValue", {
                  required: "Поле обязательно к заполнению"
                })}
                />
              </div>
            </div> : <span></span>
        }
        { isSelect === 'Book' ?
              <div id='book' className={styles.book}>
                <label htmlFor="weight">Weight (KG)</label>
                <input type="text"  name="weight"
                  {...register("specValue", {
                  required: "Поле обязательно к заполнению"
                })}
                />
              </div> : <span></span>
        }
        <input type="submit"  name="submit" value='submit'/>
      </form>
    </div>
  );
}

export default Card;
