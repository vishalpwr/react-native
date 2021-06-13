import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Badge, Surface, Title } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
import Colors from '../constants/Colors';

const IconSize = 24;

const AppHeader = ({ menu, back, title, right, rightFunction, optionalIcon, optionalFunc, navigation, headerBg, iconColor, titleAlight, optionalBadge }) => {
    return (
        <Surface style={[styles.header, {backgroundColor: headerBg}]}>
            <View style={styles.view}>
                {menu && <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Feather name="menu" size={IconSize} color={iconColor} />
                </TouchableOpacity>}
                {back && <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" size={IconSize} color={iconColor} />
                </TouchableOpacity>}
            </View>
            <View style={styles.titleView}>
                <Title style={{ color: iconColor, textAlign: titleAlight }}>{title}</Title>
            </View>
            <View style={[styles.view, styles.rightView]}>
                {optionalFunc && <TouchableOpacity style={styles.rowView} onPress={optionalFunc}>
                    <Feather name={optionalIcon} size={IconSize} color={iconColor} />
                    {optionalBadge && <Badge style={{position: 'absolute', top: -5, right: -10}}>{optionalBadge}</Badge>}
                </TouchableOpacity>}
                {rightFunction && <TouchableOpacity onPress={rightFunction}>
                    <Feather name={right} size={IconSize} color={iconColor} />
                </TouchableOpacity>}
            </View>
        </Surface>
    )
}

export default AppHeader

const styles = StyleSheet.create({
    header: {
        height: 50,
        elevation: 4,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.black,
    },
    view: {
        margin: 10,
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor: 'yellow'
    },
    titleView:{
        flex: 1,
    },
    rightView: {
        justifyContent: 'flex-end',
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    }
})