import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen'
import UserScreen from './screens/UserScreen'
import {Ionicons} from '@expo/vector-icons'

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName='User' screenOptions={{
        tabBarActiveTintColor: '#3c0a6b'
      }}>
        {/* <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{headerStyle: {backgroundColor: '#3c0a6b'}}}/> */}
        <BottomTab.Screen name="Welcome" component={WelcomeScreen} options={{
          headerStyle: {backgroundColor: '#3c0a6b'}, 
          headerTintColor: '#fff',
          tabBarIcon: ({color, size}) => (<Ionicons name='home' color={color} size={size}/>)
      }}/>
        <BottomTab.Screen name="User" component={UserScreen} options={{
          tabBarIcon: ({color, size}) => (<Ionicons name='person' color={color} size={size}/>)
        }}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
