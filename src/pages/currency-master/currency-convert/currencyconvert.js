import React from 'react'
import { useState } from 'react';
import Inputbox from '../inputbox';
import useCurrencyInfo from '../../../hooks/useCurrencyInfo';

export default function Currencyconvert() {
    const [amount, setamount] = useState(0)
    const [to, setto] = useState("USD")
    const [from,setfrom] = useState("INR")
    const [convertamount,setconvertamount] = useState(0)

    const currencyInfo = useCurrencyInfo(from)
    const options = Object.keys(currencyInfo)

    const swap = ()=>{
        setfrom(to)
        setto(from)  
        setconvertamount(amount)
        setamount(setconvertamount)
    }

    const convert = () =>{
        setconvertamount(amount *currencyInfo[to])
    }
    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/843700/pexels-photo-843700.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                          <Inputbox 
                          label='from'
                          amount = {amount}
                          currencyOptions={options}
                          onCurrencyChange={(currency)=>{
                            setamount(amount)
                          }}
                          selectCurrency={from}
                          onAmountChnage={(amount)=>{
                            setamount(amount)
                          }}
                          />  
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Inputbox
                                label="To" 
                          amount = {convertamount}
                          currencyOptions={options}
                          onCurrencyChange={(currency)=>{
                            setto(amount)
                          }}
                          selectCurrency={to}  
                          amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                        >
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
