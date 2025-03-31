import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createContext,useState } from 'react'
import { getProduct } from './Service/DataSource';



export const CartContext = createContext();
export const CartProvider = (props) => {
const [items, setItems]= useState([]);
  
function addItemToCart(id){
const product = getProduct(id);
setItems((prevItems)=> {
  const item = prevItems.find((item) => (item.id==id));
  if(!item){

    return [...prevItems, { id,product,qty:1,totalPrice:product.price}]
  }

  else {
    return prevItems.map((item) => {
      if(item.id == id){
         {   item.qty++, 
          item.totalPrice += product.price ;}
      }
     return item;
    });
    }
})

  }

  function getItemsCount(){
 items.reduce((sum, item) => sum + item.qty, 0);
  }

  function getTotalPrice(){
    items.reduce((sum, item) => sum + item.totalPrice, 0);

  }

  
return (
  <CartContext.Provider value={{ items, addItemToCart, getItemsCount, getTotalPrice }}>
    {props.children}
  </CartContext.Provider>
)
}



const styles = StyleSheet.create({})