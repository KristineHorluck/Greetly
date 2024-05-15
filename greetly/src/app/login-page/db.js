// Importér mysql2-modulet ved hjælp af require-syntaksen
import mysql from 'mysql2'

// Opret en pool af forbindelser til databasen
const pool = mysql.createPool({
    host: 'localhost',
    user: 'brugernavn',
    password: 'kode',
    database: 'login_info' 
}).promise();

// Udfør en SQL-forespørgsel
pool.query("SELECT * FROM login")
    .then((result) => {
        console.log(result[0]); // Udskriv resultatet af forespørgslen
    })
    .catch((error) => {
        console.error('Fejl ved udførelse af forespørgsel:', error); // Hvis der opstår en fejl
    });
