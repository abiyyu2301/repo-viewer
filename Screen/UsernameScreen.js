import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';

import CustomInput from '../Components/CustomInput'
import CustomButton from '../Components/CustomButton'
import Header from '../Components/Header'



const UsernameScreen = ({navigation}) => {
  const [username, setUsername] = useState('')
  const submitAction = () => {
    navigation.navigate('PasswordScreen', {username: username})
  }
  return (
    <SafeAreaView style={{ backgroundColor: '#e3e3e3', flex: 1}}>
      <Header />
      <View style={styles.container}>
        <View style={styles.inputStyle}>
          <CustomInput 
            title={'Username'}
            value={username}
            onChangeText={setUsername}
            placeholder={'Username'}
          />
        </View>
        <CustomButton
          text={'SUBMIT'}
          onClick={()=>{submitAction()}}
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

export default UsernameScreen
