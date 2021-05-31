class Converter {
    constructor() {
        this.url = 'http://api.exchangeratesapi.io/v1/latest?'
        this.apiKey = 'a9778773f64b39c4542ec6153740a765'
        this.data = ''
    }

    getCurrencyNames() {
        let saleCurrency = document.querySelectorAll('.sale-currency')
        let buyCurrency = document.querySelectorAll('.buy-currency')
       
        saleCurrency.forEach((element) => {
            element.addEventListener('click', (event) => {
                element.classList.remove('data-select');
                element.classList.add('data-select');
                let target = event.target;
                let baseChoise = target.getAttribute('data-select'); 
                console.log(baseChoise)
            baseChoise = ''
            });
        });
        buyCurrency.forEach((element) => {
            element.addEventListener('click', (event) => {
                element.classList.remove('data-buy');
                element.classList.add('data-buy');
                let target = event.target;
                let symbol = target.getAttribute('data-buy'); 
                console.log(symbol)
            symbol = ''
            });
        });
        this.getDataFromHost(baseChoise, symbol)
    }
    
    getDataFromHost(baseChoise = 'EUR', symbol = 'GBP') {
        if(baseChoise === symbol) {
            this.inputResult.textContent = this.inputSale.value // если выбраны одинаковые валюты, вписываем также в результат
            console.log(this.inputResult)
        }
        // запрос к серверу и получить ответ и вернуть 
        fetch(this.url + `access_key=${this.apiKey}&base=${baseChoise}&symbols=${symbol}`)
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
        let input = document.querySelector('#input')
        let inputResult = document.querySelector('#res')
        console.log(input)
        console.log(inputResult)

        input.addEventListener('input', () => {
            inputResult.value = (parseFloat(input.value) * this.data).toFixed(2)
        })
        
    }

    init() {
        this.getDataFromHost()
        this.render() //вывести на экран
        this.getCurrencyNames ()
    }
}

let converter = new Converter();
converter.init();

