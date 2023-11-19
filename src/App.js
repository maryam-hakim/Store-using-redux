import './App.css';
import { Provider } from "react-redux";

//redux
import store from "./redux/store"


//components
import Store from './components/Store';
import Details from './components/Details';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';

import {Routes , Route , Navigate} from 'react-router-dom';

function App() {
  return (
    
    <Provider store={store}>
        <Navbar />
      <Routes>
        <Route path="/products/:id" element={<Details />} />
        <Route path="/products" element={<Store />} />
        <Route path="/shop" element={<ShopCart />} />
        
        <Route path="/*" element={<Navigate to="/products"/>} />
      </Routes>
    </Provider>
      
    
  );
}

export default App;
