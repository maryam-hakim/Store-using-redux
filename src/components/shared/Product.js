import {React } from 'react';
import {shorten , isInCart , quantityCount} from '../../helper/functions';
import {Link} from 'react-router-dom';
import styles from '../shared/Product.module.css';
import trash  from '../../assets-icons/trash.svg';
import { useSelector , useDispatch } from "react-redux";
import { addItem , removeItem , increase , decrease } from "../../redux/cart/cartAction"



const Product = ({productData}) => {
    
    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();

    return (
        <div className={styles.product_container}>
            <img src={productData.image} alt="product"></img>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price} $</p>
            <Link to= {`/products/${productData.id}`}>details</Link>
            <div>
                <div className={styles.buttons}>
                {
                isInCart(state , productData.id)?
                 <button onClick={() => dispatch(increase(productData))}>+</button>
                 : <button onClick={() => dispatch(addItem(productData))}>add to basket</button>
                 }

                 {quantityCount(state , productData.id)}

                 {
                     quantityCount(state , productData.id) === 1 &&
                     <button onClick={() => dispatch(removeItem(productData))}><img className={styles.icon} src={trash} /></button>
                 }

                {
                     quantityCount(state , productData.id) > 1 &&
                     <button onClick={() => dispatch(decrease(productData))}>-</button>
                 }


                </div> 
            </div>
        </div>
    );
};

export default Product;