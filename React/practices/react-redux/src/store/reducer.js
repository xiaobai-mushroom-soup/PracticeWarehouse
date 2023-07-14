const initialState = {
    counter:100
}

function reducer(state = initialState, action){
    switch(action.type) {
        case 'add_num':
            return {...state,counter: state.counter + action.num}
        case 'sub_num':
            return {...state,counter: state.counter - action.num}
        default :
        return state
    }
}

export default reducer