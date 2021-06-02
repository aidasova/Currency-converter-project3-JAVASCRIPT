class Converter {
    constructor() {
        this.url = 'http://api.exchangeratesapi.io/v1/latest?'
        this.apiKey = 'a9778773f64b39c4542ec6153740a765'
        this.data = '';
        this.input = document.querySelector('#input');
        this.inputResult = document.querySelector('#res');
        this.sale = document.querySelector('.data-sale') //выбранный элемент ввода валюта 1
        this.buy = document.querySelector('.data-buy')// выбр элемент вывода валюта 1
        this.saleCourse = document.querySelector('.val-base')
        this.buyCourse = document.querySelector('.val-get')
    }

    setEventListenersForInputs() {
        this.saleChange = document.querySelector('[name="sale"]') 
        this.buyChange = document.querySelector('[name="buy"]') 
        this.saleChange.addEventListener('input', () => {
            this.saleChange.value
            this.getDataFromHost() 
        })
    }

    setEventLIstenersForCurrencyButtons() {      
        let saleCurrency = document.querySelectorAll('.sale-currency') //все выборы из ввода валюта
        let buyCurrency = document.querySelectorAll('.buy-currency')     //все выборы из вывода  валюта    
        saleCurrency.forEach((element) => {
            element.addEventListener('click', (event) => {
                this.sale.classList.remove('data-sale');
                this.sale = event.target
                this.sale.classList.add('data-sale');
                console.log(this.sale)

               this.getCurrencyNames()
               this.getDataFromHost();
            });
        });
        buyCurrency.forEach((el) => {
            el.addEventListener('click', (event) => {
                this.buy.classList.remove('data-buy');
                this.buy = event.target
                this.buy.classList.add('data-buy');
               // console.log(this.buy)

                this.getCurrencyNames()
                this.getDataFromHost();
            })
         }); 
    }

    getCurrencyNames() { 
        this.base = this.sale.getAttribute('data-select');
        this.symbol = this.buy.getAttribute('data-buy');
        console.log(this.base)
        console.log(this.symbol) 
        this.getDataFromHost();
    }
    
    getDataFromHost() {
        if(this.base === this.symbol) {
            this.inputResult.textContent = this.input.value
            console.log(this.inputResult)
        }
        console.log(this.url + `access_key=${this.apiKey}&base=${this.base}&symbols=${this.symbol}`);
        fetch(this.url + `access_key=${this.apiKey}&base=${this.base}&symbols=${this.symbol}`)
            .then((response) => response.json())
            .then(data => {
                this.data = data.rates[this.symbol]
                this.dataBuy = 1 / this.data
               // console.log(this.data)
               this.getCourceToday ()
               this.render()
            })
            .catch(error => {
                console.log(error)
            })
    }
    /**
     * Вывод информации на страницу
     */
    render() {  
        this.inputResult.value = (parseFloat(this.input.value) * this.data).toFixed(2)
    }
    getCourceToday () {
        this.saleCourse.textContent = `1 ${this.sale.textContent} = ${this.data} ${this.buy.textContent}`
        this.buyCourse.textContent = `1 ${this.buy.textContent} = ${this.dataBuy} ${this.sale.textContent}`
    }
    init() {
        this.setEventLIstenersForCurrencyButtons()
        this.setEventListenersForInputs()
        this.getCurrencyNames()
        this.getDataFromHost();
        this.getCourceToday()
    }
}

let converter = new Converter();
converter.init();

    


