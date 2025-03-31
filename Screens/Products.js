import { FlatList, StyleSheet, Text} from 'react-native'
import React from 'react'
import { useEffect,useState } from 'react'
import {View, } from 'react-native'
import { getProducts } from '../Service/DataSource'
import { Product } from '../Components/Product'

const Products = ({navigation}) => {

 function RenderProducts({item:product}){
return (
 
  <Product
  {...product} 
   onPress={()=>{ navigation.navigate('ProductDetails', {ProductId: product.id})}} />
)
 }
 const [Products, setProducts]= useState([])

 useEffect(()=>{
  setProducts(getProducts())
 })
  return (
    <View>
      <FlatList
      style={styles.container}

      data={Products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={RenderProducts}
      />
    </View>
  )
}
export default Products

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    padding: 4,
 
  },
 
})



