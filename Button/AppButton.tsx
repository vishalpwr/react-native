import React from 'react'
import { View, Text, TouchableOpacity, TouchableNativeFeedback, StyleSheet } from 'react-native'
import { ActivityIndicator, Surface } from 'react-native-paper';
import AppColors from '../constants/AppColors'
import Icons, { iconList } from "./Icons";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const AppButton = ({ title, onClick, disabled=false, style, icon, loading, iconColor, iconSize = 24, elevated, fontSize=16, textColor=AppColors.white }) => {
    return (
        <TouchableOpacity onPress={onClick} disabled={disabled}>
            <Surface style={[styles.button, style, { elevation: elevated && 8 }]}>
                {!loading && title && (<Text style={[styles.buttonText, {fontSize: fontSize, color: textColor}]}>{title}</Text>)}
                {!loading && icon && (<Icons icon={iconList.Feather} name={icon} size={iconSize} color={iconColor || AppColors.light} />)}
                {loading && <ActivityIndicator color={AppColors.accent} size="small" />}
            </Surface>
        </TouchableOpacity>
    )
}

export default AppButton
const styles = StyleSheet.create({
    button: {
        backgroundColor: AppColors.primary,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: AppColors.white,
    }
})
