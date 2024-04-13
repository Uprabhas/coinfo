import React, { useId } from 'react'


export default function Inputbox({
    label,
    amount,
    onAmountChnage,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    currencyDisable = false,
    amountDisable = false,
    className = "",
}) {
   const amountInputid = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputid} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputid}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value = {amount}
                    onChange={(e)=>onAmountChnage&&onAmountChnage(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    disabled = {currencyDisable}
                    onChange={(e)=>onCurrencyChange&&onCurrencyChange(Number(e.target.value))}
                >
                    
                      {currencyOptions.map((currency)=>(
                        <option key={currency} value="currency">
                        {currency}
                        </option>
                      ))}  
                
                </select>
            </div>
        </div>
    );
}



