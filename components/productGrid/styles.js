import { StyleSheet } from 'react-native';

import { COLORS } from '../../contains'

const styles = StyleSheet.create({
    container : {
        flex : 1,
        width : '100%',
        justifyContent : 'center',
        alignItems : 'center',
        marginBottom : 15,
        paddingHorizontal : 5,
        height : 200
    },
    product : {
        flex : 1,
        backgroundColor : COLORS.second,
        width : '100%',
        height : '100%',
        borderRadius : 15,
    },
    boxImg : {
        flex : 2,
        width : '100%',
    },
    img : {
        width : '100%',
        height : '100%',
        borderTopLeftRadius : 15,
        borderTopRightRadius : 15
    },
    boxContent : {
        flex : 1,
        padding : 12,
        alignItems : 'center',
        justifyContent : 'center'
    },
    title : {
        fontWeight : 'bold',
        fontSize : 14,
        color : COLORS.title,
        marginBottom : 8,
        textAlign : 'center'
    },
    time : {
        flexDirection : 'row'
    },
    timeText : {
        color : COLORS.icon
    }
})

export default styles;