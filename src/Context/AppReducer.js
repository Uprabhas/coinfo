export default (state,action)=>{
    switch (action.type){
        case 'Add_coin':
            return{
                ...state,
                watchlist:[action.payload,...state.watchlist]
            }
        default:
            return state;
    }

}