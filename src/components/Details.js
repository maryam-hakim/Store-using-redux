import {React , useEffect , useState} from 'react';
import axios from 'axios';
import { Link , useParams} from 'react-router-dom';
import styles from './Details.module.css';
import { useSelector } from "react-redux";

const Details = () => {
    
    const params = useParams();
    const id = params.id;
    //const id = props.match.param.id
    
    const data = useSelector(state => state.productState.products);
    const product = data[id - 1];
    

    return (
        <div className={styles.details_component}>
    
            <img src={product.image} alt="product-img"></img>
            <div>
            <h3>{product.title}</h3>
            <p>category: {product.category}</p>
            <p>{product.price} $</p>
            <Link to="/products" >back to store </Link>
            </div>
            
        </div>
    );
};

export default Details;