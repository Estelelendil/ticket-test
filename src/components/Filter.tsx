import { Dispatch, SetStateAction } from "react";

export default function Filter({currency, setCurrency}:{currency:string, setCurrency:Dispatch<SetStateAction<'RUB'|'USD'|'EUR'>>}) {
    
  return (
    <div>
      <button className={currency=="RUB"? 'selected':'empty'} onClick={()=>setCurrency('RUB')}>RUB</button>
      <button className={currency=="USD"? 'selected':'empty'} onClick={()=>setCurrency('USD')}>USD</button>
      <button className={currency=="EUR"? 'selected':'empty'} onClick={()=>setCurrency('EUR')}>EUR</button>
    </div>
  );
}
