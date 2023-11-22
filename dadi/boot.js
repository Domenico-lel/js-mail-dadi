/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.*/


// Restituisce un numero casuale tra 'min' e 'max', inclusi.
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Dado a sei facce, restituisce un numero casuale tra 1 e 6.
const rollDice = () => getRandomNumber(1, 6);

// creamo un input dove i player inseriscono il proprio nome
document.getElementById("roll").addEventListener("click",
     function () {
  const player1 = document.getElementById("player1").value;
  const player2 = document.getElementById("player2").value;

  // lanciamo i dadi per entrambi i giocatori
  const player1Score = rollDice();
  const player2Score = rollDice();

  // creo la stringa vuota per memorizzare il risultato 
  let result = "";

  // determiniamo il risultato con una variabile
  if (player1Score > player2Score) {
    result = `${player1} vince il round`;
  }else if (player2Score > player1Score) {
    result = `${player2} vince il round`;
  }else{
    result = "This round is tied";
  }

  // visualizza il risultato sula pagina
  document.getElementById("results").innerHTML = `
  <p>${player1} ${player1Score}</p>
  <p>${player2} ${player2Score}</p>
  <p>${result}</p>`;
});