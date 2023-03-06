/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Lunch from './src/screens/Lunch';
import Login from './src/screens/Login';
import { SafeAreaFrameContext } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native';


const Stack = createNativeStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Lunch"
          component={Lunch}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;
