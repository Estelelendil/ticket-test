import { useState } from 'react';
import tickets from '../../tickets.json'
import Ticket from './Ticket';
import Filter from './Filter';

function Mapping(currency:string, stepsFilter:number[]):React.ReactNode{
  const length=tickets.tickets.length
  const result=[]
  for (let i = 0; i < length; i++) {
    console.log('map item ', tickets.tickets[i])
    if(stepsFilter.length===0||stepsFilter.includes(tickets.tickets[i].stops)){//TODO ?
     
        result.push(<Ticket item={tickets.tickets[i]} currency={currency}/>)//TODO ?
      
    }
  }
  return result
}
export default function Tickets() {
  const [currency, setCurrency]=useState<'RUB'|'USD'|'EUR'>('USD')
  const [stopsFilter, setStopsFilter]=useState<number[]>([])
    console.log('tickets', Mapping(currency, stopsFilter))
  return (
    <div className='main_container'>
      <Filter currency={currency} setCurrency={setCurrency} stopsFilter={stopsFilter} setStopsFilter={setStopsFilter}/>
      <div className='info_col'>
        {Mapping(currency, stopsFilter)}  
      </div>
    </div>
  );
}
