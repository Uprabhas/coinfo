import { useEffect, useState } from "react";

export default function UseCurrencyInfo(currency) {
    console.log(currency)
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/c004668bd82f0eb1952559ca/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res.conversion_rates);
                console.log(res.conversion_rates); // This will log the updated state
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [currency]);
    
    
return data;

}

