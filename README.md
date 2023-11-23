# aula3-mod2
ATIVIDADE E ALGUNS EXERCÍCIOS UTILIZANDO LAÇO DE REPETIÇÃO FOR, FOREACH, WHILE, DO WHILE, SWICH - MATERIAL PARA CONSULTA

let listaElementos = [1,2,3,4,5,6,7,8,9,10]
let i = 0

>> WHILE
while(i < 10){
    console.log(`O indice ${i} representa o número: ${listaElementos[i]}`)
    i++
}

##################################################

>> DO WHILE
do{
    console.log(`O indice ${i} representa o número: ${listaElementos[i]}`)
    i++    
}while(i < 10)

##################################################

>> FOR
for(let indice = 0; indice < listaElementos.length; indice++){
    console.log(`A variável indice: ${indice} representa o número: ${listaElementos[indice]}`)
}

>> FOREACH
listaElementos.forEach(elemento =>{
    console.log(`O indice ${elemento} representa o número: ${elemento}`)
})

##################################################

>> SWICH
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
