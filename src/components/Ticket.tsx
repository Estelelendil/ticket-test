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
    switch(currency){
        case 'RUB': return price + ' ₽';
        case 'USD': return Math.round(price/value) + ' $';
        case 'EUR': return Math.round(price/value) + ' €';
        default: return undefined;
    }
}

export default function Ticket({item, currency}:Ticket) {
    const[value, setValue]=useState<number>();

    useEffect(()=>{
         fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(response => response.json())
        .then(value => currency!=='RUB'&& setValue(value.Valute[currency].Value));
    },[currency])
    
  return (
    <div className='ticket'>
        <div >
            <img src="/Turkish_Airlines_logo.png"    width={150} alt='logo'/>
            <button className='button'>{`Купить за ${getPrice(item.price, currency, value||1)}`}</button>
        </div>
        <div className='info_row'>
            <div className='info_col'>
                <p>{item.departure_time}</p>
                    <p>{item.origin},{item.origin_name}</p>
                <p>{item.departure_date}</p>
            </div>
             <div className='stops'>{item.stops}{item.stops===1?' пересадка':" пересадки"}</div>
             <div className='info_col'>
                <p>{item.arrival_time}</p>
                    <p>{item.origin},{item.origin_name}</p>
                <p>{item.arrival_date}</p>
            </div>
        </div>
        
    </div>
  );
}
