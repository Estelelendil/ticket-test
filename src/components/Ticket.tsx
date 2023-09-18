import './styles.css'
import { useEffect, useState } from 'react';

type Ticket={
    item:{
        origin: string,
        origin_name: string,
        destination: string,
        destination_name: string,
        departure_date: string,
        departure_time: string,
        arrival_date: string,
        arrival_time: string,
        carrier: string,
        stops: number,
        price: number
    }
    currency:string
}

function getPrice(price:number, currency:string,value:number):string|undefined{
console.log('getPrice', currency, value)
switch(currency){
    case 'RUB': return price + ' ₽';
    case 'USD': return Math.round(price/value) + ' $';
    case 'EUR': return Math.round(price/value) + ' €';
    default: return undefined;
}
}

export default function Ticket({item, currency}:Ticket) {
    const[value, setValue]=useState()
    useEffect(()=>{
         fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(response => response.json())
        .then(value => {
        console.log('getActualCurrencyValue',value.Valute[currency].Value, currency)
        if(currency!=='RUB'){
            setValue(value.Valute[currency].Value)
        }
    });
    },[currency])
    console.log('currencyValue', value)
  return (
    <div className='ticket'>
      <button>{`Купить за ${getPrice(item.price, currency, value||1)}`}</button>
    </div>
  );
}
