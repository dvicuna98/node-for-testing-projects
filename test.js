const xlsx = require('xlsx');
// Or var xlsx = require('node-xlsx').default;

const workbook = xlsx.readFile('./20122021.xlsx');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

// for (let z in worksheet) {
//     console.log(z);
// }

