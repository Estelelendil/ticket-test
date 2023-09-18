import { useState } from 'react';
import tickets from '../../tickets.json'
import Ticket from './Ticket';
import Filter from './Filter';

function Mapping(currency:string):React.ReactNode{
  const length=tickets.tickets.length
  for (let i = 0; i < length; i++) {
    // result.push(callback.call(args, arr[i], i, arr));
    return <Ticket item={tickets.tickets[i]} currency={currency}/>
  }
}
export default function Tickets() {
  const [currency, setCurrency]=useState<'RUB'|'USD'|'EUR'>('USD')
  const [stepsFilter, setStepsFilter]=useState<number[]>([])
    // const data = JSON.parse(tickets)
    console.log(tickets.tickets[1])
  return (
    <div className='main_container'>
      <Filter currency={currency} setCurrency={setCurrency} stepsFilter={stepsFilter} setStepsFilter={setStepsFilter}/>
      {Mapping(currency)}  
    </div>
  );
}
