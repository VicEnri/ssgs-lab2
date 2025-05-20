# Labo-String: CLI per Utilità su Stringhe

Questo progetto fornisce una base per una semplice Command-Line Interface (CLI) Node.js che offre diverse utilità per la manipolazione di stringhe.

## Funzionalità Principali

- Inversione di una stringa.
- Verifica se una stringa è palindroma.
- Troncamento di una stringa a una lunghezza massima specificata.
- Conteggio delle occorrenze di ciascun carattere in una stringa.

## Installazione

1. Clona il repository:
   ```bash
   git clone https://github.com/VicEnri/ssgs-lab2.git
   cd ssgs-lab2
   ```

2. Installa le dipendenze:
   ```bash
   npm ci
   ```

## Utilizzo

- **Avvio CLI**
  ```bash
  npm start
  ```

- **Eseguire i test**
  ```bash
  npm test
  ```


## Code Quality
Il progetto ha un coverage del 100%


## Struttura dei Test

I test coprono tutte le funzioni principali:
- `reverseString`: inversione di stringhe, inclusi casi limite.
- `isPalindrome`: verifica di palindromi, inclusi casi vuoti e singolo carattere.
- `truncateString`: troncamento e aggiunta di ellissi, con vari scenari di lunghezza.
- `countCharacters`: conteggio accurato di ogni carattere, distinguendo maiuscole/minuscole e spazi.

## Continuous Integration

Il progetto utilizza GitHub Actions per eseguire automaticamente i test e generare il report di code coverage ad ogni push o pull request su `main`.  
Il report HTML della coverage è scaricabile come artefatto dal workflow.

## Note

- Le cartelle `node_modules/` e `coverage/` sono escluse dal versionamento tramite `.gitignore`.

---