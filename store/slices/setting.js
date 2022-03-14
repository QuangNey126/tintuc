import { createSlice } from '@reduxjs/toolkit'


const SettingSlice = createSlice({
    name : 'Setting',
    initialState : {
        home : [
            {id : 1 , type : 'grid' , status : false},
            {id : 2 , type : 'column' , status : true},
            {id : 3 , type : 'grid' , status : true},
        ]
    },
    reducers : {
        SettingHome : ( state , action ) => {
            let { id , type , status } = action.payload
            if(!type) type = 'grid'
            const item = state.home.find(item => item.id === id)
            if(item) {
                state.home = state.home.filter(item => {
                    if(item.id == id){
                        item.type       = type
                        item.status     = status
                    }
                    return item
                })
            }else{
                if(!action.payload.type) action.payload.type = 'grid'
                state.home = [...state.home,action.payload]
            }
        }
    }

})

export const { SettingHome } = SettingSlice.actions
export default SettingSlice.reducer