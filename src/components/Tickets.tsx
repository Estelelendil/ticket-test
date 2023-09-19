import { useState } from 'react';
import tickets from '../../tickets.json'
import Ticket from './Ticket';
import Filter from './Filter';

function Mapping(currency:string, stopsFilter:number[]):React.ReactNode[]{
  const length=tickets.tickets.length;
  const result=[];
  for (let i = 0; i < length; i++) {
    let isPassedFilters;
    for(let j=0; j<stopsFilter.length; j++){
      if(stopsFilter[j]===tickets.tickets[i].stops){
        isPassedFilters=true;
      }
    }
     if(stopsFilter.length===0||isPassedFilters){
        result.push(<Ticket item={tickets.tickets[i]} currency={currency}/>)
    }
  }
  return result;
}
export default function Tickets() {
  const [currency, setCurrency]=useState<'RUB'|'USD'|'EUR'>('USD')
  const [stopsFilter, setStopsFilter]=useState<number[]>([])
  return (
    <div className='main_container'>
      <Filter currency={currency} setCurrency={setCurrency} stopsFilter={stopsFilter} setStopsFilter={setStopsFilter}/>
      <div className='info_col'>
        {Mapping(currency, stopsFilter)}  
      </div>
    </div>
  );
}
