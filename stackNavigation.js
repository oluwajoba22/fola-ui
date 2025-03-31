import { View, Text } from 'react-native'
import React from 'react'
import{createNativeStackNavigator} from '@react-navigation/native-stack'
import ProductDetails from './Screens/ProductDetails'
import Cart from './Screens/Cart'
import Profile from './Screens/Profile'
import Products from './Screens/Products'



const Stack = createNativeStackNavigator();


const StackNavigation =() =>{

    return (
        <Stack.Navigator screenOptions={{headerStyle: { backgroundColor: 'tomato' }}}>
<Stack.Screen name="ShowRoom" component={Products} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        </Stack.Navigator>
    )

}



const  CartStack =() =>{
  return (
 <Stack.Navigator>
    <Stack.Screen name="CartScr" component={Cart} />
 </Stack.Navigator>  )
}

const  ProfileStack =() =>{
    return (
   <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={Profile} />
   </Stack.Navigator>  )
  }
export { CartStack, StackNavigation, ProfileStack }