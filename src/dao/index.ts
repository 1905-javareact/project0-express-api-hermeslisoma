import {Pool} from 'pg'

export const connectionPool:Pool = new Pool({
    user: 'hermeslisoma',
    host: 'hermeslisoma.cvnmtqur08tc.us-east-2.rds.amazonaws.com',
    database: 'hermeslisoma',
    password: 'hermes243',
    port: 5432,
    max: 5
})

// console.log({
//     user: 'hermeslisoma',
//     host: 'hermeslisoma.cvnmtqur08tc.us-east-2.rds.amazonaws.com',
//     database: 'hermeslisoma',
//     password: 'hermes243',
//     port: 5432,
//     max: 5
// });
