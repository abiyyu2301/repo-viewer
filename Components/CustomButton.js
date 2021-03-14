import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

CustomButton.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
}

export default function CustomButton(props) {
    const {
        onClick,
        text
    } = props
    return (
        <View>
            <TouchableOpacity
                style = {styles.buttonStyle}
                onPress = {onClick}
            >
                <Text>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderRadius: 15,
    }
  })
