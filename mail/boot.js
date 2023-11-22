/*Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.*/



// Lista di email autorizzate
const listaAutorizzata = ["utente1@example.com", "utente2@example.com", "utente3@example.com"];

// Chiedi all'utente la sua email
const emailUtente = prompt("Inserisci il tuo indirizzo email:");

// Controlla se l'email è nella lista autorizzata
if (listaAutorizzata.includes(emailUtente)) {
    document.write("<h1>Accesso consentito. Benvenuto!</h1>");
} else {
    document.write("<h1>Accesso negato. L'indirizzo email non è autorizzato.</h1>");
}