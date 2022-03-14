import { StyleSheet } from 'react-native';

import { COLORS, FONTSIZE } from '../../contains'

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        borderWidth : 1,
        borderColor : COLORS.white,
        borderTopColor : COLORS.settingTitle,
        paddingVertical : 20
    },
    title : {
        fontSize : FONTSIZE.h2
    },
    inputIOS : {
        fontSize: FONTSIZE.h3,
        color: COLORS.black,
        paddingTop : 10
    },
    inputAndroid : {
        color: COLORS.black
    }
})

export default styles;