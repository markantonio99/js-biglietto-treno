
let chilometriPercorsi =parseFloat(prompt('Ciao, quanti km devi perccorrere?')) 
console.log(chilometriPercorsi);

let etàDelViaggiatore = parseFloat(prompt('Inserisci la tua età')) 
console.log(etàDelViaggiatore);


const prezzoPerKilometro = parseFloat(("10"))


const prezzoViaggio = parseFloat(chilometriPercorsi * prezzoPerKilometro ) 
console.log(prezzoViaggio);


const scontoGiovani = parseFloat(prezzoViaggio / 100 * 20)
console.log(scontoGiovani);