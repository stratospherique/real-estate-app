//const DOMAIN = 'http://localhost:3001';
const DOMAIN = process.env.NODE_ENV === 'production' ? 'https://final-app-api.herokuapp.com' : 'http://localhost:3001';

export default DOMAIN;