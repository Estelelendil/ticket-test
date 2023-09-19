import { Dispatch, SetStateAction} from "react";

export default function Filter({currency, setCurrency, stopsFilter, setStopsFilter}:
    {currency:string, setCurrency:Dispatch<SetStateAction<'RUB'|'USD'|'EUR'>>,
     stopsFilter:number[]
    setStopsFilter:Dispatch<SetStateAction<number[]>>}) {



    function checkIndex(number:number){
        let index
        for (let i = 0; i < stopsFilter.length; i++) {
            if(stopsFilter[i]===number){
                index=i
            }
        }
        console.log('index', index)
        return index
    }
const getButtonClass=(number:number):string=>{

        return checkIndex(number)||checkIndex(number)===0?'checked':'unchecked'
}
const addFilter=(number:number)=>{
    const newFilters=[...stopsFilter]
    const index=checkIndex(number)
    if(index|| index===0){
        newFilters.splice(index, 1)
        setStopsFilter(newFilters)
    }else{
        newFilters.push(number)
        setStopsFilter(newFilters)
    }
}
console.log('FILTERS', stopsFilter)
  return (
    <div className="filter">
        <h2>Валюта</h2>
        <div className="info_row">
            <button className={currency=="RUB"? 'selected':'empty'} onClick={()=>setCurrency('RUB')}>RUB</button>
            <button className={currency=="USD"? 'selected':'empty'} onClick={()=>setCurrency('USD')}>USD</button>
            <button className={currency=="EUR"? 'selected':'empty'} onClick={()=>setCurrency('EUR')}>EUR</button>
        </div>
        <h2>Количество пересадок</h2>
        <div className="info_col">
            <button className={stopsFilter.length===0?'checked':'unchecked'} onClick={()=>setStopsFilter([])}>Все</button>
            <button className={getButtonClass(0)} onClick={()=>addFilter(0)}>Без пересадок</button>
            <button className={getButtonClass(1)} onClick={()=>addFilter(1)}>1 пересадка</button>
            <button className={getButtonClass(2)} onClick={()=>addFilter(2)}>2 пересадки</button>
            <button className={getButtonClass(3)} onClick={()=>addFilter(3)}>3 пересадки</button>
        </div>
    </div>
  );
}
