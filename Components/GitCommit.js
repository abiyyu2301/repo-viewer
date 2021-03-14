import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import PropTypes from 'prop-types'

GitCommit.propTypes = {
    avatar: PropTypes.string,
}

export default function GitCommit(props) {
    const {
        avatar,
        author,
        message,
        commitTime
    } = props
    return (
        <View style={styles.container}>
            <Image
                style = {styles.avatarStyle}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
            <View style={styles.wrapper}>
                <Text>{message}</Text>
                <View style={styles.authorText}>
                    <Text>{author}</Text>
                    <Text>{` committed ${commitTime}`}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        marginVertical: 10
    },
    wrapper: {
        flexDirection: 'column',
        marginHorizontal: 10
    },
    authorText: {
        flexDirection: 'row'
    },
    avatarStyle: {
        width: 30,
        height: 30,
        borderRadius: 5,
        alignSelf: 'center'
    }
})
