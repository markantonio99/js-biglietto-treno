
let chilometriPercorsi =parseFloat(prompt('Ciao, quanti km devi perccorrere?')) 
console.log(chilometriPercorsi);

let etàDelViaggiatore = parseFloat(prompt('Inserisci la tua età')) 
console.log(etàDelViaggiatore);


const prezzoPerKilometro = parseFloat(("0.21"))


const prezzoViaggio = parseFloat(chilometriPercorsi * prezzoPerKilometro ) 
console.log(prezzoViaggio);


const scontoGiovani = parseFloat(prezzoViaggio / 100 * 20)
console.log(scontoGiovani);

const scontoAnziani = parseFloat(prezzoViaggio / 100 * 40)
console.log(scontoAnziani);

let titleEelement = document.getElementById("maintitle")

if (etàDelViaggiatore < 18)  {
    titleEelement.innerHTML =  'Il costo del viaggio giovani è' + ' ' + (prezzoViaggio - scontoGiovani) + '€'
}
else if (etàDelViaggiatore > 65) {

    titleEelement.innerHTML =  'Il costo del tuo vaiggio anziani è' + ' ' + (prezzoViaggio - scontoAnziani) + '€'
}
else {
    titleEelement.innerHTML =  'Il costo del tuo viaggio è' + ' ' + (prezzoViaggio) +'€'

}