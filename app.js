new Vue({
    //"el" es un seudo selector de css
    el: '#app',

    data(){
        return{            
            name: 'Bitcoin',
            symbol: 'BTC',
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            changePercent: 4,
            value: 0,

            // cambiar color dark ligth
            color: 'f4f4f4',
            

            // el precio actual del bitcoin
            price: 8400,

            prices: [5840,7900,8200,9000,9400,10000,10200],            
            pricesWithDays: [
                {day: 'Lunes', value:8400},
                {day: 'Martes', value:7900},
                {day: 'Miercoles', value:8200},
                {day: 'Jueves', value:90000},
            ],
            showPrices: false
        }
    },
    // las propiedades computadas se almacenan en cache segun sus dependencias
    // por lo general se ponen funciones que devuelven un valor
    // son propiedades que se calculan en tiempo real en base a los valores de otras propiedades
    computed: {
        title () {
            return `${this.name} - ${this.symbol}`
        },
        convertedValue() {
            if(!this.value){
                return 0
            }
            return this.value/this.price
        }
    },

    // el nombre de la funcion debe corresponder con el nombre de una propiedad
    watch: {
        // estas funciones reciben dos valores por parametro (valor_nuevo, valor_viejo)
        showPrices (newVal, oldVal) {
            console.log(newVal, oldVal)
        }
    },


    // se usan para modificar valores de las propiedades o variables 
    methods: {
        toogleShowPrices () {
            this.showPrices = !this.showPrices

            this.color = this.color.split('')
            .reverse().join('')
        }
    }
})