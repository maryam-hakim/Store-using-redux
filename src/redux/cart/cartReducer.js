import {React } from 'react';

const initialState = {
    selectedItems: [],
    sumProduct: 0,
    checkOut: false,
    sumPrice: 0
}

const sumItems = items =>{
    const sumProduct = items.reduce((total , product) => total + product.quantity , 0);
    const sumPrice = items.reduce((total , product) => total + product.price * product.quantity , 0).toFixed(2);
    return ({sumProduct , sumPrice});
}

const cartReducer = (state=initialState, action) =>{
    switch(action.type) {
        case "ADD_ITEM":
            if(!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return{
                ...state,
                ...state.selectedItems,
                ...sumItems(state.selectedItems),
                checkOut: false,

            }
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            return{
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumItems(newSelectedItems)
            }
        case "INCREASE":
            const indexI= state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return{
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "DECREASE":
            const indexD= state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return{
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "CHECKOUT":
            return{
                selectedItems: [],
                sumProduct: 0,
                checkOut: true,
                sumPrice: 0

            }
        case "CLEAR":
            return{
                selectedItems: [],
                sumProduct: 0,
                checkOut: false,
                sumPrice: 0

            }
        default:
            return state;
            
    } 

}

export default cartReducer;




