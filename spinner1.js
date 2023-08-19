process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   '); 
}, 700);

// ... fill in the rest of the animation ...

setTimeout(() => {
  process.stdout.write('\r|   '); // Back to the starting position
}, 900); // Add a delay slightly longer than the previous character

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1700); // Back to the starting position

// Add more setTimeout calls for additional characters as needed
setTimeout(() =>{
  process.stdout.write('\r' )
}, 1900);