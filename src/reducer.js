export const initialState = {
     showOverflow : true
}

const reducer = (state ,action) => {
    switch(action.type){
        case 'SHOW_OVERFLOW' : return { ...state , showOverflow : true}

        case 'HIDE_OVERFLOW' : return { ...state , showOverflow : false}

        default : return state
    }
}

export default reducer