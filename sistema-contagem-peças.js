//se a peça possuir um peso superior a 100 gramas, pode cadastrar
//dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente
//caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro

let capacidadeLimiteCaixa=listaPecas

let pesoPeca= parseFloat window.prompt("Digite o peso da peça:")

if (pesoPeca>100) {
    pesoPeca.push(listaPecas)
    nomePeca= parseFloat window.prompt("Digite o nome da peça:")
    console.log ("Pode cadastrar")

    if (listaPecas.lenght>10) {
        console.log ("Limite de capacidade excedido")

        if (nomePeca.lenght>3) {
            console.log ("Peça cadastrada com sucesso!")

        } else {
            
            console.log ("Nome inválido")
        }

    } else {
        console.log ("Pode cadastrar, capacidade ok") 
    }
    
} else {
    console.log ("Peso mínimo não atingido, não será possível cadastrar")
    
}


    
    
