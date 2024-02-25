import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from './screens/WelcomeScreen'
import UserScreen from './screens/UserScreen'
import {Ionicons} from '@expo/vector-icons'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='User' screenOptions={{
        
      }}>
        {/* <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{headerStyle: {backgroundColor: '#3c0a6b'}}}/> */}
        <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{headerStyle: {backgroundColor: '#3c0a6b'}, headerTintColor: '#fff', drawerLabel: 'Welcome Screen', drawerActiveBackgroundColor: '#f0e1ff', drawerActiveTintColor: '#3c0a6b', drawerStyle: {backgroundColor: '#ccc'},
        drawerIcon: ({color, size}) => (<Ionicons name='home' color={color} size={size}/>)
      }}/>
        <Drawer.Screen name="User" component={UserScreen} options={{
          drawerIcon: ({color, size}) => (<Ionicons name='person' color={color} size={size}/>)
        }}/>
      </Drawer.Navigator>
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
