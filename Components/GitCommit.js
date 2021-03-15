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
                    uri: avatar,
                }}
            />
            <View style={styles.wrapper}>
                <Text numberOfLines={1} ellipsizeMode='tail'>{message}</Text>
                <View style={styles.authorText}>
                    <Text style={{fontWeight: 'bold'}} >{author}</Text>
                    <View flex={1}>
                        <Text>{`Committed ${commitTime}`}</Text>
                    </View>
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
        marginVertical: 10,
        backgroundColor: '#fafafa'
    },
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 10
    },
    authorText: {
        flex: 1
    },
    avatarStyle: {
        width: 50,
        height: 50,
        borderRadius: 5,
        alignSelf: 'center'
    }
})
