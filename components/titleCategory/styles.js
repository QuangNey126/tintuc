import { StyleSheet , Dimensions } from 'react-native';

import { COLORS } from '../../contains'

const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : height/2,
    },
    title : {
        height : 30,
        borderBottomWidth : 3,
        borderBottomColor : COLORS.primary,
        marginBottom : 15
    },
    titleText : {
        backgroundColor : COLORS.primary,
        maxWidth : 140,
        textAlign : 'center',
        height : '100%',
        fontSize : 14,
        fontWeight : 'bold',
        color : COLORS.second,
        lineHeight : 30,
    },
    box : {
        flex : 1,
        flexDirection : 'row',
        marginLeft : -8,
        marginRight : -8
    },
    boxProduct : {
        flex : 1,
        flexWrap : 'wrap',
    }
})

export default styles;