

export const Adding = (payload) => async dispatch => {
    
 
    dispatch({
        type : 'Add',
        payload : payload
    })
    
    
}
export const Delete = (id) => async dispatch => {
    
    dispatch({
        type : "Delete",
        payload :id
    })
}

export const Editing = (payload) => async dispatch => {
    
    dispatch({
        type : "Edit",
        payload : payload
    })
}
