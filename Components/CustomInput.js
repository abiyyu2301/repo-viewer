import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

CustomInput.propTypes = {
    text: PropTypes.string,
    onChangeText: PropTypes.func,
    title: PropTypes.string,
    isPassword: PropTypes.bool,
}

export default function CustomInput(props) {
    const { title, 
            onChangeText, 
            text, 
            isPassword,
            placeholder } = props
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TextInput
                style = {styles.textInput} 
                onChangeText = {onChangeText}
                value = {text}
                placeholder = {placeholder}
                secureTextEntry = {isPassword}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    title: {
        marginLeft: 5,
        fontSize: 20,
    },
    textInput: {
        marginVertical: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    }
  })
