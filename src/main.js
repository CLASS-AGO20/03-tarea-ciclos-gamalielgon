export default class App {
    sumatoriaSerieUno(numero){
        let suma = 0;
        for(let i = 1; i <= numero; i++){
            let div = 1 / i;
            suma = div + suma;
        }
        return suma;
    }
}

let app = new App();
console.log(app.sumatoriaSerieUno(3));