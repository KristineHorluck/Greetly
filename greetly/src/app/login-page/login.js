import express from 'express';
import mysql from 'mysql2';
import { fileURLToPath } from 'url'; // Import fileURLToPath method from the url module
import path from 'path';

const __filename = fileURLToPath(import.meta.url); // Get the current filename
const __dirname = path.dirname(__filename); // Get the directory name

const app = express();
const port = 8080; // Choose any port you prefer

// Database connection pool setup
const pool = mysql.createPool({
    host: 'localhost',
    user: 'brugernavn',
    password: 'kode',
    database: 'login_info' 
}).promise();

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the HTML login page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login-page.component.html')); // Use __dirname to get the absolute path
});

// Route to handle login form submission
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log('Form data received:', username, password);
    try {
        const match = await checkCredentials(username, password);
        if (match) {
            res.send("Authentication successful");
        } else {
            res.status(401).send("Invalid username or password");
        }
    } catch (error) {
        console.error("An error occurred:", error.message);
        res.status(500).send("Internal Server Error");
    }
});

// Function to check if the username and password match any in the database
async function checkCredentials(username, password) {
    try {
        const [rows] = await pool.query("SELECT usernames, passwords FROM login");
        for (const row of rows) {
            if (row.usernames === username && row.passwords === password) {
                return true; // Credentials match
            }
        }
        return false; // No matching credentials found
    } catch (error) {
        console.error("Error checking credentials:", error.message);
        throw error;
    }
}

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});


