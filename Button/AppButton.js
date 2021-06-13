import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

/**
 * can use 
 * <Text style={{ fontSize: iconSize, color: iconColor }}>+</Text>
 * at the place of Feather icon*/

export const RoundButton = ({ colors, onPress, style, iconSize = 30, bottom = 0, right = 0, icon = "plus", iconColor = 'black', backgroundColor = "white" }) => {
    const ButtonView = colors && colors.length > 1 ? LinearGradient : View
    const Icon = () => <Feather name={icon} size={iconSize} color={iconColor || 'white'} />
    return (
        <View style={{ position: 'absolute', bottom, right, }}>
            <TouchableOpacity onPress={onPress} style={[styles.roundButton, style, { backgroundColor }]}>
                <ButtonView
                    colors={colors}
                    style={styles.btnView}>
                    <Icon />
                </ButtonView>
            </TouchableOpacity>
        </View>
    )
}

export const Button = ({ label, onPress, colors, disabled = false, style, labelStyle, icon, loading, iconColor, iconSize = 20, fontSize = 18, textColor = 'white', }) => {
    const ButtonView = colors && colors.length > 1 ? LinearGradient : View
    const Icon = () => <Feather name={icon} size={iconSize} color={iconColor || 'white'} />
    const TextView = () => <Text style={{ ...labelStyle, ...styles.text, fontSize: fontSize, color: textColor, textTransform: 'capitalize' }}>{label}</Text>
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <ButtonView
                colors={colors}
                style={[styles.button, style]}>
                {!loading && icon && <Icon />}
                {!loading && label && <TextView/>}
                {loading && <ActivityIndicator color={'white'} size="small" />}
            </ButtonView>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        width: 100,
        minHeight: 45,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0091d9',
    },
    text: {
        color: 'white',
        paddingHorizontal: 10,
    },
    roundButton: {
        width: 56,
        height: 56,
        margin: 16,
        borderRadius: 30,
        shadowOffset: { width: 2, height: 0 },
        shadowColor: '#000',
        shadowOpacity: 0.6,
        shadowRadius: 0.6,
        elevation: 10,
        zIndex: 999,
    },
    btnView: {
        width: 56,
        height: 56,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    }
})