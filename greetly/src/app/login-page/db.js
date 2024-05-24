// Code that connects to mySQL and query to the database
import mysql from 'mysql2'


const pool = mysql.createPool({
    host: 'localhost',
    user: 'brugernavn',
    password: 'kode', // Din egen adgangskode (til serveren)
    database: 'login_info' // Ændre hvis din database hedder noget andet
}).promise()


const result = await pool.query("SELECT * FROM login") // Min table hedder login, ændrer hvis du har kaldt den noget andet.
console.log(result)