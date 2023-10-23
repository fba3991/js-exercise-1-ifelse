/* let tazzeVendute = prompt("quante tazze hai venduto oggi?");
let prezzo = 2;
let guadagni = tazzeVendute * prezzo;
let messaggio = "Oggi hai venduto " ;
let fine = " tazze di caffe"
let frase = messaggio + guadagni + fine;
alert(frase); */

/* let AnnoDiNAscita = prompt( "indica il tuo anno di nascita?")
let AnnoAttuale = 2023;
let calcolo = AnnoAttuale - AnnoDiNAscita;
alert(calcolo) */

/* let Temperatura = prompt("indica temperatura in far")
let Celcius1 = 32;
let celcius2  = 9;
let celcius3 = 5;
let calcolo1 =  Temperatura - Celcius1;
let calcolo2 =  calcolo1 / celcius2
let calcolo3 = calcolo2 *  celcius3
let frase = " ° celsius"
alert(calcolo3 + frase) 
 */

/* let student1 = prompt( "indica la valutazione del tuo test") 
let studentN1 = parseInt(student1)
let student2 = prompt("indica la valutazione del tuo test")
let studentN2 = parseInt(student2)
let student3 = prompt ("indica la valutazione del tuo test")
let studentN3 = parseInt(student3)
let  media = (studentN1 + studentN2 + studentN3 ) / 3
alert(media) */


/* 
let totale = parseFloat(prompt("Qual è il totale del conto?"));
let percentuale = parseFloat(
  prompt("Quale percentuale di mancia vuoi lasciare?")
);
let calcolo = (totale * percentuale) / 100;
alert("La mancia da lasciare è: " + calcolo); */


/* 
   var eta = parseInt(prompt("Quanti anni hai?"));
   if (eta < 13) {
    alert("Puoi vedere solo film con classificazione PG.");
} else if (eta >= 13 && eta < 17) {
    alert("Puoi vedere film con classificazione PG e PG-13.");
} else {
    alert("Puoi vedere tutti i film.");
} 
 */
 
 

/* let totale = parseFloat(prompt("Qual è il prezzo dell'articolo?"));
let percentuale = parseFloat(prompt("qual'è la percentuale di sconto?"));

let calcolo = (totale * percentuale) / 100;
if (calcolo < 49) {
  alert(calcolo + " buona serata");
} else {
  alert(calcolo + " è un ottimo affare");
}  */
/* 
let kg =  parseInt(prompt("indica il tuo peso in kg"));
let m =  parseInt(prompt (" indica la tua altezza in metri"));
let bmi = peso / (altezza * altezza);
 
if (bmi < 18.5){
    alert("sei sotto posso");
}
else if (bmi >= 18.5 && bmi <= 24.9)   {
    alert("hai un peso normale");
}
else {
    alert("sei sovrappeso");
} */


let peso = parseInt(prompt("Indica il tuo peso in kg"));
let altezza = parseInt(prompt("Indica la tua altezza in centimetri")) /100;
let bmi = peso / (altezza * altezza);

if (bmi < 18.5){
    alert("Sei sottopeso. Il tuo BMI è: " + bmi);
} else if (bmi >= 18.5 && bmi <= 24.9) {
    alert("Hai un peso normale. Il tuo BMI è: " + bmi);
} else {
    alert("Sei sovrappeso. Il tuo BMI è: " + bmi);
}






