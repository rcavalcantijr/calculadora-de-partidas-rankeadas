let balance = calc(154, 27)

function calc(numVictories, numDefeats){
    let balance = numVictories - numDefeats
    return balance
}

let nivel;

switch(true){
    case balance <= 10:
        nivel = "FERRO"
    break;

    case balance > 10 && balance <= 20:
        nivel = "BRONZE"
    break;

    case balance > 20 && balance <= 50:
        nivel = "PRATA"
    break;

    case balance > 50 && balance <= 80:
        nivel = "OURO"
    break;

    case balance > 80 && balance <= 90:
        nivel = "DIAMANTE"
    break;

    case balance > 90 && balance <= 100:
        nivel = "LENDÁRIO"
    break;

    default:
        nivel = "IMORTAL"

}

console.log("O Herói tem saldo de " + balance + " e está no nível " + nivel)
