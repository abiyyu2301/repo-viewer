import React, {useState} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native'
import base64 from 'react-native-base64'

import CustomInput from '../Components/CustomInput'
import CustomButton from '../Components/CustomButton'
import Header from '../Components/Header'



const PasswordScreen = ({navigation, route}) => {
  const {username} = route.params
  const [token, setToken] = useState('')

  const submitAction = () => {
    const url = `https://api.github.com/users/${username}`
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      }
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      navigation.navigate('RepoInputScreen', {data: response})})
  }
  return (
    <SafeAreaView style={{backgroundColor: '#e3e3e3', flex: 1}}>
      <Header />
      <View style={styles.container}>
        <View style={styles.inputStyle}>
          <CustomInput 
            title={'Enter Your Password'}
            placeholder={'Password'}
            value={token}
            onChangeText={setToken}
            isPassword
          />
        </View>
        <CustomButton
          text={'SUBMIT'}
          onClick={() => submitAction()}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  inputStyle: {
    flex: 1,  
    justifyContent: 'center',
  }
})

export default PasswordScreen
