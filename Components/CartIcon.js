import React,{useContext, useEffect} from 'react'
import {View,Text,StyleSheet} from "react-native"

import { CartContext } from '../CartContext'
export function CartIcon ({navigation}){
    const {getItemCount} = useContext(CartContext);
    return(
        <View  style={Styles.container }>
            <Text onPress={()=>{navigation.navigate('Cart')}}>
                cart {(getItemCount)}
            </Text>
        </View>
    )
}

const Styles= StyleSheet.create({
    container:{
height:20,
borderRadius:5,
backgroundColor:"orange",
padding:6

    }
})
