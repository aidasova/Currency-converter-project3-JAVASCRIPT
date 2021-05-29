class Converter {
    constructor() {
        this.uri = 'http://api.exchangeratesapi.io/v1/latest?'
        this.apiKey = 'a9778773f64b39c4542ec6153740a765'
        this.data = // записываем результат из getData
        this.saleRub = document.querySelector('.sale-currency')
        let dataSelect = document.querySelector('.data-select')
        //базовая валюта, итоговая валюта - найти какие валюты выбраны
    }
    // получаем данные о текущих выбранных

    getCurrencyNames() {
        let saleCurrency = document.querySelectorAll('.sale-currency')
        console.log(saleCurrency)
       
        saleCurrency.forEach((element) => {
            element.addEventListener('click', (event) => {
                this.saleCurrency.classList.toggle('data-select');
                saleCurrency = event.target;
                let baseCurrency = saleCurrency.getAttribute('data-select')
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


/*
getCurrencyNames() {
    let saleCurrency = document.querySelectorAll('.sale-currency')
    console.log(saleCurrency)
   
    saleCurrency.forEach((element) => {
        element.addEventListener('click', (event) => {
            this.saleCurrency.classList.toggle('data-select');
            saleCurrency = event.target;
        // saleCurrency.classList.add('data-select')
            let baseCurrency = saleCurrency.getAttribute('data-select')
        //  let resultCurrency = saleCurrency.getAttribute('data-select')
        // render(baseCurrency, resultCurrency)
        // return baseCurrency
            console.log(baseCurrency)
        });
    });
}*/

