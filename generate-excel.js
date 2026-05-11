const XLSX = require('xlsx');

const dietData = [
  ['Protein', 'Protein per 100 gram'],
  ['SoyaBean Dal', '36.2 g'],
  ['Chickpeas / Grams', '19.3 g'],
  ['Oats', '16.9 g'],
  ['Peanuts', '25.8 g'],
  ['Total', '133 grams'],
];

const workbook = XLSX.utils.book_new();
const worksheet = XLSX.utils.aoa_to_sheet(dietData);
XLSX.utils.book_append_sheet(workbook, worksheet, 'Diet');

XLSX.writeFile(workbook, 'Daily-Workout.xlsx');
console.log('Created Daily-Workout.xlsx with Diet worksheet');
