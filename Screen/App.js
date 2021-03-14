import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Text
} from 'react-native';
import GitCommit from '../Components/GitCommit'
import Header from '../Components/Header'
import {AUTHORIZED_HEADER} from '../Constants'


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

  const renderItem = ({item}) => {
    return (<GitCommit
      author={item.author}
      message={item.message}
      commitTime={item.commitTime} 
    />)
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header type={AUTHORIZED_HEADER} />
      <View style={styles.container}>
        <Text style={styles.repoTitle}>{'facebook/react-native'}</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
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
