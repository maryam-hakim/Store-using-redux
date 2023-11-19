import React , { useEffect} from 'react';
import Product from './shared/Product';
import styles from './Store.module.css';
import { useSelector , useDispatch } from "react-redux";

//redux
import { fetchProductsData } from "../redux/products/productsAction";

const Store = () => {

    const dispatch = useDispatch();
    const productState = useSelector(state => state.productState);
    

    useEffect(() => {
       if(!productState.products.length) dispatch(fetchProductsData());
    },[])

    

    return (
        <div className={styles.store_container}>
            {
                
                productState.loading ?
                <h2>Loading...</h2> :
                productState.error ?
                <p>Something went wrong...</p> :
                productState.products.map(product => <Product key={product.id} productData={product} />)
            }
        </div>
    );
};

export default Store;