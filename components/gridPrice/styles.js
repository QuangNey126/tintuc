import { StyleSheet , Dimensions } from 'react-native';

const height = Dimensions.get('window').height - 180

import { COLORS , FONTSIZE } from '../../contains'

const styles = StyleSheet.create({
    layoutChild : {
        flexDirection: 'row',
        justifyContent : 'center',
        alignItems : 'center',
        height : 60,
        borderColor : COLORS.white,
        borderBottomColor : COLORS.border,
        borderWidth : 1,
        paddingHorizontal : 5
    },
    column : {
        flex: 1, 
        justifyContent : 'center',
        alignItems : 'center',
    }, 
    layoutText : {
        fontSize : FONTSIZE.h3,
        color : COLORS.layoutText
    },
    layoutTextInCr : {
        color : COLORS.numberInc
    },
    layoutTextDow : {
        color : COLORS.numberDow
    }
})

export default styles;