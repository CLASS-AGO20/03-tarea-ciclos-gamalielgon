export default class App {
    sumatoriaSerieUno(numero){
        let suma = 0;
        for(let i = 1; i <= numero; i++){
            let div = 1 / i;
            suma = div + suma;
        }
        return suma;
    }
    sumatoriaSerieDos(numero){
        let suma = 0;
        let i = 1;
        while(i <= numero){
            if(i == 1 || i%2 == 0){
                suma = suma + (1 / i);
            } else{
                suma = suma - (1 / i);
            }

            i++;
        }
        return suma;

    }
    esPrimo(numero){
        let primo = 0;
        let i = numero;
        do{
            if(numero%i == 0){
                primo++;
            }

            i--;
        } while(i>=1)
        if(primo == 2){
            return true;
        } else {
            return false;
        }
    }
    obtenerMultiplos(inicio, fin){
        let l = "";
        if (fin < inicio){
            let n = inicio;
            inicio = fin;
            fin = n;
        }
        do{
            if(inicio%3==0){
                l = l + inicio.toString();
            }

            inicio++;
        }while (inicio<=fin)
        return l;
    }
    obtenerImpares(numero1,numero2){
        let l = "";
        if (numero2 < numero1){
            let k = numero1;
            numero1 = numero2;
            numero2 = k;
        }
        for(let n = numero2; n >= numero1; n--){
            if(n%2==1){

                l = `${l}${n},`;
            }
        }
        l = l.slice(0, -1);
        return l;
    }    
}

let app = new App();
console.log(app.sumatoriaSerieUno(3));
console.log(app.sumatoriaSerieDos(3));
console.log(app.esPrimo(4));
console.log(app.obtenerMultiplos(3,9));
console.log(app.obtenerImpares(11,1));