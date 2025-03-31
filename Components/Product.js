import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export function Product({name,price,image,description, onPress}){
    return(
        <TouchableOpacity onPress={onPress} style={styles.productContainer}>
            <Image source={image} style={styles.productImage} />
            <View style={styles.productDetails}>
                <Text style={styles.productName}>{name}</Text>
                <Text style={styles.productPrice}>${price}</Text>
                <Text style={styles.productDescription}>{description}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    productContainer: {
  backgrounfdColor:"white",
  justifyContent: 'center',
  borderRadius: 5,
  justifyContent:"center",
      
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
 
    
    },
    productImage: {
       
        aspectRatio:1,
        height:350,
     
      
    },
    productDetails: {
        flex: 1,
        margingLeft: 70,
        
       
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 14,
        color: '#888',
    },
    productDescription: {
        fontSize: 12,
        color: '#666',
    },
});