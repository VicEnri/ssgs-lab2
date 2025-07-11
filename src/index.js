const readline = require('readline');
const {
  reverseString,
  isPalindrome,
  truncateString,
  countCharacters,
} = require('./stringUtils.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log('\nSeleziona un’operazione:');
  console.log('1. Inverti stringa');
  console.log('2. Controlla palindromo');
  console.log('3. Tronca stringa');
  console.log('4. Conta caratteri');
  console.log('5. Esci');
}

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function main() {
  console.log('🤖 String CLI Utility');
  while (true) {
    showMenu();
    const choice = await ask('Numero funzione (1–5): ');
    switch (choice.trim()) {
      case '1': {
        const s = await ask('Inserisci la stringa da invertire: ');
        console.log(`Risultato: "${reverseString(s)}"`);
        break;
      }
      case '2': {
        const s = await ask('Inserisci la stringa da controllare: ');
        console.log(`Palindroma? ${isPalindrome(s)}`);
        break;
      }
      case '3': {
        const s = await ask('Inserisci la stringa da troncare: ');
        const nRaw = await ask('Lunghezza massima: ');
        const n = parseInt(nRaw, 10);
        if (isNaN(n) || n < 0) {
          console.log('⚠️ Lunghezza non valida, deve essere un numero ≥ 0');
        } else {
          console.log(`Risultato: "${truncateString(s, n)}"`);
        }
        break;
      }
      case '4': {
        const s = await ask('Inserisci la stringa da analizzare: ');
        console.log('Conteggio caratteri:', countCharacters(s));
        break;
      }
      case '5':
        console.log('👋 Uscita. A presto!');
        rl.close();
        return;
      default:
        console.log('⚠️ Scelta non valida, riprova.');
    }
  }
}

main();