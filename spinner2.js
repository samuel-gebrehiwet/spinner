const spinnerSymbols = ['|', '/', '-', '\\'];
let delay = 100;

for (const symbol of spinnerSymbols) {
  setTimeout(() => {
    process.stdout.write(`\r${symbol}   `);
  }, delay);
  delay += 200; // Increase the delay for the next symbol
}
