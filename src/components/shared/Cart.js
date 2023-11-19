import React , { useContext } from 'react';
import trash from "../../assets-icons/trash.svg";
import styles from './Cart.module.css';
import {shorten} from '../../helper/functions';
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from '../../redux/cart/cartAction';

const Cart = (props) => {
    const { title , price , image , quantity } = props.data;
    const  dispatch  = useDispatch();

    return (
        <div className={styles.cart_container}>
            <img src={image} alt="cart-img" className={styles.cart_image}/>
            <div className={styles.title}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>

            <div className={styles.buttons}>

            {
            quantity === 1 ?
            <button onClick={() => dispatch(removeItem(props.data))}><img className={styles.icon} src={trash} /></button> :
            <button onClick={() => dispatch(decrease(props.data))}>-</button>
            }
            <span>{quantity}</span>
            {
            <button onClick={() => dispatch(increase(props.data))}>+</button>
            }
            </div>

            
        </div>
    );
};

export default Cart;