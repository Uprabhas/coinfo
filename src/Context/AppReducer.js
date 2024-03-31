export default (state,action)=>{
    switch (action.type){
        case 'Add_coin':
            return{
                ...state,
                watchlist:[action.payload,...state.watchlist]
            }
        case 'remove_from _watchlist':
            return{
                ...state,
                watchlist:state.watchlist.filter(coin=>coin.uuid !==action.payload)
            }
        default:
            return state;
    }

}