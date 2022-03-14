import { StyleSheet } from 'react-native';

import { COLORS } from '../../contains'

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : COLORS.second,
        marginBottom : 15,
        borderRadius : 15
    },
    boxImg : {
        flex : 1,
    },
    img : {
        width : '100%',
        height : '100%',
        borderTopLeftRadius : 15,
        borderBottomLeftRadius : 15,
        resizeMode : 'cover'
    },
    boxContent : {
        flex : 1.5,
        padding : 12
    },
    title : {
        fontWeight : 'bold',
        fontSize : 14,
        color : COLORS.title,
        marginBottom : 20
    },
    time : {
        flexDirection : 'row'
    },
    timeText : {
        color : COLORS.icon
    }
})

export default styles;