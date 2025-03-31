import React, {useContext, useEffect} from 'react'
import { View,Text, Button, FlatList,StyleSheet } from 'react-native'
import {CartContext} from '../CartContext'



export default function Cart(){

  const {items, getItemsCount, getTotalPrice} = useContext(CartContext);
  function Total(){

    const [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice())
    })
    return (
      <View style={styles.total}>
        <Text style={styles.totalText}>Total: ${total}</Text>
      </View>
    )

  }


  function renderItem(item){
    return(
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.product.name}</Text>
        <Text style={styles.itemText}>Qty: {item.qty}</Text>
     
        <Text style={styles.itemText}>Total: ${item.totalPrice}</Text>
      </View>
    )

  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cart</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListFooterComponent={Total}
      
      />
     
    </View>
  )




}
const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    padding: 4,
 
  },


 
})


