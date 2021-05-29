/*class Converter {
    constructor() {
        this.uri = 'http://api.exchangeratesapi.io/v1/latest?'
        this.apiKey = 'a9778773f64b39c4542ec6153740a765'
        this.data = // записываем результат из getData
        this.saleRub = document.querySelector('.sale-currency')
        базовая валюта, итоговая валюта - найти какие валюты выбраны
    }
    getCurrencyNames() {

    }
    getDataFromHost(базовая валюта, итоговая валюта) {
        // запрос к серверу и получить ответ и вернуть 
            }
    render() {

    }
    init() {
        this.getDataFromHost(базовая валюта, итоговая валюта)
        this.render( ) //вывести на экран
        this.getCurrencyNames ()
    }
}

let converter = new Converter();
converter.init();*/

saleRub = document.querySelectorAll('.sale-currency')
console.log(saleRub)
flag = true;

saleRub.forEach((element) => {
    element.addEventListener('click', (event) => {
        let color = event.target.style.backgroundColor;
        color = (flag === true) ? 'white' : '#833AE0' ;
        /* if (color === '#833AE0') {
            event.target.style.backgroundColor = 'white'
         } else {
            event.target.style.backgroundColor = '#833AE0'
         }*/
        });
});
