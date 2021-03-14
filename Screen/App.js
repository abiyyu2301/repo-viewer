import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Text
} from 'react-native'
import UsernameScreen from '../Screen/UsernameScreen'
import PasswordScreen from '../Screen/PasswordScreen'
import CommitsScreen from '../Screen/CommitsScreen'
import RepoInputScreen from '../Screen/RepoInputScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const DATA = [
  {
    id: '1',
    author: 'abiyyu123',
    message: 'merged something',
    commitTime: '1 hour ago'
  },
  {
    id: '2',
    author: 'abiyyu123',
    message: 'I have done something',
    commitTime: '2 hours ago'
  },
  {
    id: '3',
    author: 'abiyyu123',
    message: 'I am now creating something',
    commitTime: '3 hours ago'
  }
]

const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName={'UsernameScreen'}
      screenOptions={{
        headerShown: false
      }}
    >
        <Stack.Screen name='UsernameScreen' component={UsernameScreen} />
        <Stack.Screen name='PasswordScreen' component={PasswordScreen} />
        <Stack.Screen name='CommitsScreen' component={CommitsScreen} />
        <Stack.Screen name='RepoInputScreen' component={RepoInputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 15,
  },
  repoTitle: {
    alignSelf: 'center'
  }
})

export default App
