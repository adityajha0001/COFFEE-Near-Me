const Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'YOUR_API_KEY'
});
const base = Airtable.base('app4SCSV4j8rTkNNM');

const table =base("coffee-stores");

console.log({table});