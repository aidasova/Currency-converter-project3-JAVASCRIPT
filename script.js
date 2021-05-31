class Converter {
    constructor() {
        this.url = 'http://api.exchangeratesapi.io/v1/latest?'
        this.apiKey = 'a9778773f64b39c4542ec6153740a765'
        this.data = '';
        this.input = document.querySelector('#input');
        this.inputResult = document.querySelector('#res');
    }

    setEventLIstenersForCurrencyButtons() {
        let saleCurrency = document.querySelectorAll('.sale-currency')
        let buyCurrency = document.querySelectorAll('.buy-currency')
       
        saleCurrency.forEach((element) => {
            element.addEventListener('click', (event) => {
                // element.classList.remove('data-select');
                // element.classList.add('data-select');
                // let target = event.target;
                // this.baseChoise = target.getAttribute('data-select'); 
                // console.log(this.baseChoise)
                // this.baseChoise = ''

                // 1. Удалить класс data-select у элемента, у которого он установлен 
                this.refreshActiveClass(saleCurrency, element);
                // 2. Получить значение из элементов sale-currency и buy-currencyчёч, у которого установлен data-select
                this.getCurrencyNames();
                // 3. СДелать запрос на сервер
                this.getDataFromHost();
                // 4. Срендерить информацию на экран
                this.render();
            });
        });
        buyCurrency.forEach((element) => {
            element.addEventListener('click', (event) => {
                // element.classList.remove('data-buy');
                // element.classList.add('data-buy');
                // let target = event.target;
                // this.symbol = target.getAttribute('data-buy'); 
                // console.log(this.symbol)
                // this.symbol = ''
            });
        });
    }

    refreshActiveClass(groupElements, element) {

    }

    getCurrencyNames() {
        
    }
    
    getDataFromHost() {
        if(this.baseChoise === this.symbol) {
            this.input.textContent = this.inputResult.value // если выбраны одинаковые валюты, вписываем также в результат
            console.log(this.inputResult)
        }
        // запрос к серверу и получить ответ и вернуть 
        fetch(this.url + `access_key=${this.apiKey}&base=${this.baseChoise}&symbols=${this.symbol}`)
            .then((response) => response.json())
            .then(data => {
                console.log(data)
                this.data = data.rates[symbol]
                console.log(this.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
   
    render() {  
        input.addEventListener('input', () => {
            inputResult.value = (parseFloat(input.value) * this.data).toFixed(2)
        })
    }

    init() {
        this.getCurrencyNames()
        this.getDataFromHost()
        this.render() //вывести на экран
    }
}

let converter = new Converter();
converter.init();

