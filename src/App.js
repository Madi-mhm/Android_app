import { View } from 'react-native'
import { AppStyle } from './Styles/Views/App'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Views/Home';
import Profile from './Views/Profile';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View style={AppStyle.mainContainer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false, animation: 'slide_from_right'}}/>
          <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App