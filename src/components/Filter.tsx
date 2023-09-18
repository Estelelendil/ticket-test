import { Dispatch, SetStateAction} from "react";

export default function Filter({currency, setCurrency, stepsFilter, setStepsFilter}:
    {currency:string, setCurrency:Dispatch<SetStateAction<'RUB'|'USD'|'EUR'>>,
     stepsFilter:number[]
    setStepsFilter:Dispatch<SetStateAction<number[]>>}) {



    function checkIndex(number:number){
        let index
        for (let i = 0; i < stepsFilter.length; i++) {
            if(stepsFilter[i]===number){
                index=i
            }
        }
        console.log('index', index)
        return index
    }
const addFilter=(number:number)=>{
    const newFilters=[...stepsFilter]
    const index=checkIndex(number)
    if(index|| index===0){
        newFilters.splice(index, 1)//TODO ?
        setStepsFilter(newFilters)
    }else{
        newFilters.push(number) //TODO ?
        setStepsFilter(newFilters)
    }
}
console.log('FILTERS', stepsFilter)
  return (
    <div className="info_col">
        <h2>Валюта</h2>
        <div className="info_row">
            <button className={currency=="RUB"? 'selected':'empty'} onClick={()=>setCurrency('RUB')}>RUB</button>
            <button className={currency=="USD"? 'selected':'empty'} onClick={()=>setCurrency('USD')}>USD</button>
            <button className={currency=="EUR"? 'selected':'empty'} onClick={()=>setCurrency('EUR')}>EUR</button>
        </div>
        <h2>Количество пересадок</h2>
        <div className="info_col">
            <button className={stepsFilter.length===0?'checked':'unchecked'} onClick={()=>setStepsFilter([])}>Все</button>
            <button className={checkIndex(0)||checkIndex(0)===0?'checked':'unchecked'} onClick={()=>addFilter(0)}>Без пересадок</button>
            <button className={checkIndex(1)||checkIndex(1)===0?'checked':'unchecked'} onClick={()=>addFilter(1)}>1 пересадка</button>
            <button className={checkIndex(2)||checkIndex(2)===0?'checked':'unchecked'} onClick={()=>addFilter(2)}>2 пересадки</button>
            <button className={checkIndex(3)||checkIndex(3)===0?'checked':'unchecked'} onClick={()=>addFilter(3)}>3 пересадки</button>
        </div>
    </div>
  );
}
