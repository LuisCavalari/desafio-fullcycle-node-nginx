const express = require("express");

const app = express()
const config = {
    host: 'db-desafio',
    user: 'root',
    password: 'root',
    database: 'node_desafio'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)
connection.query(`CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255));`)
const nomes = [
    'João',
    'Maria',
    'Pedro',
    'Ana',
    'Carlos',
    'Julia',
    'Lucas',
    'Beatriz',
    'Gabriel',
    'Mariana'
];

app.get("/", (req, res) => {
    const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
    connection.query(`INSERT INTO people(name) VALUES(?)`, [nomeAleatorio], (err, results) => {
        const query = `SELECT * FROM people`
        connection.query(query, (err, results) => {
            res.send(`<h1>Full Cycle Rocks!</h1>
            <ul>
                ${results?.map(person => `<li>${person.name}</li>`).join('')}
            </ul>`)
        })
    });
});

app.listen(7000, () => {
    console.log("Server is running on port 7000");
});