import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ProfileStack, StackNavigation, } from './stackNavigation';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CartProvider } from './CartContext.js';
import {CartStack} from './stackNavigation'
import { CartIcon } from './Components/CartIcon.js';







export default function App() {
  const Tabs = createBottomTabNavigator();

  return (
<CartProvider>
<NavigationContainer> 
      <Tabs.Navigator 
      screenOptions={{
        headerShown:false,
        tabBarShownLabel:true,
        tabBarBadgeStyle: {
          color: 'black',
          backgroundColor: 'yellow',
        },

       
      }}>

<Tabs.Screen name="Home" component={StackNavigation} options={{tabBarIcon: ({color, size}) => (
  <Entypo name="home" size={size} color={color} />
)}}  />
<Tabs.Screen name="Cart" component={CartStack} options={{tabBarIcon: ({color, size}) => (
  <MaterialIcons name="add-shopping-cart" size={size} color={color}options={({navigation})=>({title:Products, headerRight:()=>{<CartIcon navigation={navigation}/>}}) }/>
)}} />
         <Tabs.Screen name="Profile" component={ProfileStack}/>
     </Tabs.Navigator>
  
    </NavigationContainer>
    </CartProvider>

)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    alignItems: 'center',
    justifyContent: 'center',
  },
});
