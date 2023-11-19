import React , { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useSelector } from "react-redux";



import shopIcon from '../../assets-icons/shop.svg';

const Navbar = () => {
    
    const state = useSelector(state => state.cartState);

    return (
        <div>
            <div className={styles.navbar_container}>
                <Link to="/products">Products</Link>
                <div className={styles.shop_cart}>
                    {state.sumProduct > 0 && <span className={styles.shop_span}>{ state.sumProduct }</span>}
                   <Link to="/shop"><img src={shopIcon} alt="shopIcon" /></Link> 
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;