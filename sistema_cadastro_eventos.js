//se a data do evento for posterior à data atual, permitir evento; senão, alertar que o cadastro não será permitido por data inválida
//se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade
//listar participantes e palestrantes por evento
//enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite

let dataAtual = new Date ()
let palestrantes = ["Maria" ,"Joao" ,"Pedro" ]
let participantes = ["Fernando" ,"Patricia", "Matheus", "Sara", "Henrique"]
const quantidadeLimiteParticipantes=100
const idadeMinima = 18
let dataDoEvento= 


if (dataDoEvento>dataAtual) {
    window.prompt ("Digite a sua idade:")

    if (idadeAtual>=idadeMinima) {
        let listaPalestrantes=palestrantes
        let listaParticipantes=participantes.lenght

       while (listaParticipantes<quantidadeLimiteParticipantes) {
        alert("Cadastro realizado com sucesso")

             if (listaParticipantes>=quantidadeLimiteParticipantes) {
                alert("Cadastro não permitido por exceder o limite de participantes")
                
            }

            }
             
       }
        
    } else {
        alert ("Idade não permitida para o evento")
        
    }

    
} else {
    alert ("Cadastro não permitido por data inválida")
    
}