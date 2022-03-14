import { StyleSheet } from 'react-native';

import { COLORS } from '../../contains'

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    background : {
        flex : 1,
        position : 'absolute',
        width : '100%',
        height : '100%',
        resizeMode : 'repeat',
        opacity : 0.5
    },
    boxImg : {
        flex : 1,
    },
    img : {
        width : '100%',
        height : '100%'
    },  
    boxContent : {
        flex : 3,
        paddingHorizontal : 20,
        paddingVertical : 40,
        shadowColor : COLORS.shadow,
        shadowOffset : {
            width : 1,
            height : 2
        },
        shadowOpacity : 0.2,
        shadowRadius : 5,
        elevation : 5
    },
    content : {
        flex : 1,
        backgroundColor : COLORS.white,
        borderRadius : 15,
        padding : 10
    }

})

export default styles;