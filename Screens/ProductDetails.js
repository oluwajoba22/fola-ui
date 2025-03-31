import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useEffect, useState} from 'react'
import { getProduct } from '../Service/DataSource'
import { ScrollView } from 'react-native-gesture-handler'
import { Image } from 'react-native'
import { Button } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { CartContext } from '../CartContext'
import { useContext } from 'react'


const ProductDetails = ({route}) => {
  const {ProductId}= route.params;
  const[Product, setProduct]= useState([])
  const {addItemToCart} = useContext(CartContext)


useEffect(()=>{
  setProduct(getProduct(ProductId))
})

  function OnAddToCart(){
   addItemToCart(ProductDetails.id)
   }
  return (
    <SafeAreaView>
      <View>
        <Image source={Product.image} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{Product.name}</Text>
          <Text style={styles.productPrice}>${Product.price}</Text>
          <Text style={styles.productDescription}>{Product.description}</Text>
        </View>
      </View>
<TouchableOpacity style={{alignItems: 'center', marginTop: 20}} > 


  
<Text style={styles.button} onPress={OnAddToCart} >Add to Cart</Text>
    </TouchableOpacity>
      
    </SafeAreaView>
  )
}

export default ProductDetails

const styles = StyleSheet.create({

  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 5,
    padding: 10,
    width: 200,
    textAlign: 'center',
  },
  productDetails: {
    padding: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 20,
    color: '#888',
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
  },
})