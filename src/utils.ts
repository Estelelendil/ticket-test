// function MapFunction(arr:string[], component: React.ReactNode){
//     const result
//     const length=arr.length
//     for (let i = 0; i < arr.length; i++) {
//         // result.push(callback.call(args, arr[i], i, arr));
//         return component(props=arr[i])
//       }

// }


export async function getActualCurrencyValue() {
    // let rates;
    
    // if (rates === null) {
        // rates = JSON.parse(file_get_contents('https://www.cbr-xml-daily.ru/daily_json.js'));
        await fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(response => response.json())
        .then(value => {
        console.log('getActualCurrencyValue',value)
            return value});
        // if (response.ok) { // если HTTP-статус в диапазоне 200-299
        //     // получаем тело ответа (см. про этот метод ниже)
        //     let json = await response.json();
        //   } else {
        //     alert("Ошибка HTTP: " + response.status);
        //   }
    }
    
    // return rates;
// }
