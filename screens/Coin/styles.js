import { StyleSheet , Dimensions} from 'react-native';
import { COLORS , FONTSIZE } from '../../contains'

const height = Dimensions.get('window').height - 180

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        paddingHorizontal : 20,
        paddingVertical : 20,
        backgroundColor : '#EBFBFF'
    },
    layout : {
        flex: 1, 
        backgroundColor : COLORS.white,
        borderRadius : 15,
        shadowColor : COLORS.shadow,
        shadowOffset : {
            width : 1,
            height : 2
        },
        shadowOpacity : 0.2,
        shadowRadius : 5,
        elevation : 5,
    },
    layoutTitle : {
        flexDirection: 'row',
        backgroundColor : COLORS.primary,
        borderTopRightRadius : 15,
        borderTopLeftRadius : 15,
        height : 42,
        justifyContent : 'center',
        alignItems : 'center'
    },
    column : {
        flex: 1, 
        justifyContent : 'center',
        alignItems : 'center',
    }, 
    layoutTextHeader : {
        fontSize : FONTSIZE.h2,
        fontWeight : 'bold',
        color : COLORS.white
    },
    
})

export default styles;