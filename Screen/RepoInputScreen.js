import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';

import CustomInput from '../Components/CustomInput'
import CustomButton from '../Components/CustomButton'
import Header from '../Components/Header'
import {AUTHORIZED_HEADER} from '../Constants'



const RepoInputScreen = ({navigation}) => {
  const [orgRepo, setOrgrepo] = useState('facebook/react-native')

  const submitAction = () => {
    navigation.navigate('CommitsScreen', {orgRepo: orgRepo})
  }

  return (
    <SafeAreaView style={{backgroundColor: '#e3e3e3', flex: 1}}>
      <Header logoutAction={() => navigation.navigate('UsernameScreen')} type={AUTHORIZED_HEADER} hideBack/>
      <View style={styles.container}>
        <View style={styles.inputStyle}>
          <CustomInput 
            title={'Enter a Repo You Want To See'}
            text={orgRepo}
            onChangeText={setOrgrepo}
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

export default RepoInputScreen
