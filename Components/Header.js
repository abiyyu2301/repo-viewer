import React from 'react'
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import Images from '../Themes/Images'
import { AUTHORIZED_HEADER } from '../Constants'

Header.propTypes = {
    type: PropTypes.string,
    logoutAction: PropTypes.func,
    onBack: PropTypes.func,
    hideBack: PropTypes.bool,
}

const APP_TITLE = 'RepoViewer'

export default function Header(props) {
    const {type} = props
    switch (type) {
        case AUTHORIZED_HEADER:
            return <AuthorizedHeader props={props}/>
        default:
            return <DefaultHeader />
    }
}

const DefaultHeader = () => {
    return (
        <View style={styles.defaultHeader}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{APP_TITLE}</Text>
        </View>
    )
}

const AuthorizedHeader = (props) => {
    const {
            onBack,
            hideBack,
            logoutAction
            } = props.props
    return (
        <View style={styles.defaultHeader}>
            {hideBack? null : 
            <TouchableOpacity onPress={onBack} style={styles.backBtnContainer}>
                <Image source={Images.leftArrow} style={styles.backIcon} />
            </TouchableOpacity>}
            <Text style={{flex: 3, textAlign: 'center', fontSize: 20, fontWeight: 'bold'}} >{APP_TITLE}</Text>
            <LogoutButton logoutAction={logoutAction} />
        </View>
    )
}

const LogoutButton = ({logoutAction}) => {
    return (
        <TouchableOpacity onPress={logoutAction} style={styles.logoutStyle}>
            <Text>Logout</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    defaultHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
        height: 70,
        backgroundColor: '#e3e3e3',
        paddingHorizontal: 15,
        borderBottomWidth: 1,
    },
    backBtnContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    backIcon: {
        width: 11,
        height: 22,
    },
    logoutStyle: {
        flex: 1,
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#cb3737',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
