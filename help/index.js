
import Moment from 'moment';
import { Platform } from "react-native";

export const CustomDate = (yourDate) => {
    return (
        Moment(yourDate).format('DD-MM-YYYY')
    )
}

export const FormatPriceGold = (yourNumber) => {
    yourNumber = yourNumber * 1000000
    if (Platform.OS === 'ios'){
        return yourNumber.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
     }else{
         return yourNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' đ'
     }
}


export const FormatNumber = (yourNumber) => {
    const number = parseFloat(yourNumber).toFixed(2)
    if(number == 0.00){
        return 0.00
    }else{
        return number
    }
}

export const FormatChangeCoin = (yourNumber) => {
    return  FormatNumber(yourNumber) + ' %'
 }


 export const FormatPriceCoin = (yourNumber) => {
    if (Platform.OS === 'ios'){
        return yourNumber.toLocaleString('en-US', {style : 'currency', currency : 'USD'});
     }else{
         let price = '$' + FormatNumber(yourNumber)
         return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
     }
 }
