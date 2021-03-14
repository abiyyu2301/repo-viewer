import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';

import CustomInput from '../Components/CustomInput'
import CustomButton from '../Components/CustomButton'
import Header from '../Components/Header'



const RepoInputScreen = () => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header hideBack/>
      <View style={styles.container}>
        <View style={styles.inputStyle}>
          <CustomInput 
            title={'Enter a Repo You Want To See'}
            text={'facebook/react-native'}
          />
        </View>
        <CustomButton
          text={'SUBMIT'} 
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
