// 1. Crie um array com 10 elementos e mostre-os na tela 
//usando cada uma das estruturas de repetição: while, do-while, for e foreach.

let listaElementos = [1,2,3,4,5,6,7,8,9,10]
let i = 0

// while(i < 10){
//     console.log(`O indice ${i} representa o número: ${listaElementos[i]}`)
//     i++
// }

// do{
//     console.log(`O indice ${i} representa o número: ${listaElementos[i]}`)
//     i++    
// }while(i < 10)

// for(let indice = 0; indice < listaElementos.length; indice++){
//     console.log(`A variável indice: ${indice} representa o número: ${listaElementos[indice]}`)
// }

// listaElementos.forEach(elemento =>{
//     console.log(`O indice ${elemento} representa o número: ${elemento}`)
// })

//listaElementos.forEach((elemento) => console.log(elemento));

// 2. Faça um algoritmo para exibir a tabuada de 2. 
// O resultado na tela deve ser algo parecido com isso:

// for(let indice = 1; indice <=10; indice++){
//     console.log("2 x " + indice + " = " + indice*2)
// }

// 3. Crie um array com 5 números reais, e para cada elemento utilize funções matemáticas para exibir respectivamente:

// a. O quadrado
// b. A raiz quadrada
// c. Apenas a parte inteira
// d. O número arredondado para baixo
// e. O número arredondado para cima

let listaExercicio3 = [2, 9, 3.2, 5.1, 5.5]

for(let i = 0; i < listaExercicio3.length; i++){

    switch(i){
        case 0:
            console.log(`O quadrado do ${listaExercicio3[i]} é ${Math.pow(listaExercicio3[i], 2)}`);            
            break;
        case 1:
            console.log("A raiz quadrada do " + listaExercicio3[i] + " é: " + Math.sqrt(listaExercicio3[i]));
            break;
        case 2:
            console.log("Apenas a parte inteira de " + listaExercicio3[i] + " é: " + Math.trunc(listaExercicio3[i]));
            break;
        case 3:
            console.log("Arredondado para baixo o número: " + listaExercicio3[i] + " é: " + Math.floor(listaExercicio3[i]));
            break;
        case 4:
            console.log("Arredondado para cima o número: " + listaExercicio3[i] + " é: " + Math.ceil(listaExercicio3[i]));
            break;
        default:
            console.log("default");
    }



}