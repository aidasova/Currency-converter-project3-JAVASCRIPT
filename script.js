class Converter {
    constructor() {
        this.uri = 'http://api.exchangeratesapi.io/v1/latest?'
        this.apiKey = 'a9778773f64b39c4542ec6153740a765'
        this.data = // записываем результат из getData
        this.saleRub = document.querySelector('.sale-currency')
        this.dataSelect = document.querySelector('.data-select')
        //базовая валюта, итоговая валюта - найти какие валюты выбраны
    }
    // получаем данные о текущих выбранных

    getCurrencyNames() {
        let saleCurrency = document.querySelectorAll('.sale-currency')
        console.log(saleCurrency)
       
        saleCurrency.forEach((element) => {
            element.addEventListener('click', (event) => {
                element.classList.remove('data-select');
                element.classList.add('data-select');
                let target = event.target;
                let baseCurrency = target.getAttribute('data-select'); //textContent
                console.log(baseCurrency)
            });
        });
    }
    getDataFromHost(/*базовая валюта, итоговая валюта*/) {
        // запрос к серверу и получить ответ и вернуть 
            }
    render() {

    }
    init() {
        this.getDataFromHost(/*базовая валюта, итоговая валюта*/)
        this.render( ) //вывести на экран
        this.getCurrencyNames ()
    }
}

let converter = new Converter();
converter.init();




