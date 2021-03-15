import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Text,
  ActivityIndicator
} from 'react-native'
import Moment from 'moment'
import GitCommit from '../Components/GitCommit'
import Header from '../Components/Header'
import {AUTHORIZED_HEADER} from '../Constants'
import moment from 'moment'

const CommitsScreen = ({navigation, route}) => {
  const {orgRepo} = route.params
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const url = `https://api.github.com/repos/${orgRepo}/commits?${new URLSearchParams({
      per_page: 10,
      page: page
    })}`
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    })
    .then((response) => response.json())
    .then((response) => {
                      setData(data.concat(response))})
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
  }, [])

  const renderItem = ({item}) => {
    moment.locale('en')
    const avatar = item.author? item.author.avatar_url : null
    const author = item.commit? item.commit.author.name :null
    const message = item.commit? item.commit.message : null
    let commitTime = item.commit? item.commit.author.date : null
    commitTime = Moment(commitTime).format('LLL')
    return (<GitCommit
      avatar={avatar}
      author={author}
      message={message}
      commitTime={commitTime} 
    />)
  }

  const getMoreCommits = () => {
    console.log('This is called')
    setLoading(true)
    setPage(page+1)
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#e3e3e3'}}>
      <Header logoutAction={() => navigation.navigate('UsernameScreen')} onBack={() => navigation.goBack()} type={AUTHORIZED_HEADER} />
      <View style={styles.container}>
        <Text style={styles.repoTitle}>{orgRepo}</Text> 
        { data.length > 0 && 
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.sha + item.commit.author.date}
          onEndReached={getMoreCommits}
          onEndReachedThreshold={0.5}
        />
        }
        {isLoading && <ActivityIndicator style={styles.loadingStyle} />}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  repoTitle: {
    alignSelf: 'center'
  },
  loadingStyle: {
    alignSelf: 'center'
  }
})

export default CommitsScreen
