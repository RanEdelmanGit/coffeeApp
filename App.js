import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import OrderHistory from './pages/OrderHistory';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer >
        <Tab.Navigator initialRouteName='Home'
          screenOptions={{
            tabBarStyle: {
              backgroundColor: '#0d0f14',
              
            },
            tabBarLabelPosition: "beside-icon",
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#D17842",
            tabBarInactiveTintColor: "#52555A",
            headerStyle: {
             height:0,
             backgroundColor: '#0d0f14'
            },
            style: {
              backgroundColor: '#0d0f14',
            },
            headerTintColor: '#0d0f14',
            headerTitleStyle: { fontWeight: "bold" },
            headerTitleAlign: "center"
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Entypo name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Cart"
            component={Cart}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="shopping-bag" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Favorites"
            component={Favorites}
            options={{
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="heart" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="OrderHistory"
            component={OrderHistory}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="history" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
