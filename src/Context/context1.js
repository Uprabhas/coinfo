import React,{ createContext,useReducer,useEffect } from "react";
import AppReducer from'./AppReducer'


//inital state

const initialstate = {
    watchlist:localStorage.getItem('watchlist')?JSON.parse(localStorage.getItem('watchlist')):[]
}

//create context
export const GlobalContext= createContext(initialstate);

//provider components
export const GlobalProvider = (props)=>{
    const [state , dispatch]= useReducer(AppReducer,initialstate)

    useEffect(()=>{
        localStorage.setItem('watchlist',JSON.stringify(state.watchlist))
    },[state.watchlist]);

    //action
    const addcointowatchlist = (coindata)=>{
        dispatch({type:'Add_coin',payload:coindata})
    }
    // const removefromwatchlist = (id) => {
    //     watchlist = watchlist.filter(coin => coin.uuid !== id);
    //     return watchlist;
    // };

return(
    <GlobalContext.Provider value={{watchlist:state.watchlist,addcointowatchlist,}}>
        {props.children}
    </GlobalContext.Provider>
)
}