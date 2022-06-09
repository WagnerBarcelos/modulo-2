const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3001;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'curriculoDB.db';
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static("../frontend/"));
app.use(express.json());
/* Definição dos endpoints */
/****** CRUD ******************************************************************/
// Retorna todos registros (é o R do CRUD - Read)
app.get('/Certificacoes', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
    var db = new sqlite3.Database(DBPATH); // Abre o banco
var sql = 'SELECT * FROM Certificacoes ORDER BY id COLLATE NOCASE';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});


// Insere um registro (é o C do CRUD - Create)
app.post('/Certificacaoinsert', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
    sql = "INSERT INTO Certificacoes id, titulo, anoDeConclusao, instituicao VALUES ('" + req.body.id + "','" + req.body.titulo + "','" + req.body.anoDeConclusao + "', '" + req.body.instituicao + "' )";
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
    });
    db.close(); // Fecha o banco
    res.end();
});


// NETWORKDELETE - deletar registros cadastrados na tabela NETWORK;
app.post('/Certificacaodelete', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    // deleta segundo o id
    sql = "DELETE FROM Certificacoes WHERE id = " + req.body.id;
    var db = new sqlite3.Database(DBPATH);
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close();
});


//atualiza um registro existente
app.post('/Certificacaoupdate', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    // permite alterar o nome e o tipo dado certo id (chave primária)
   sql = "UPDATE Certificacoes SET titulo = '" + req.body.titulo + "', anoDeConclusao = '" + req.body.anoDeConclusao + "', instituicao = '" + req.body.instituicao + "' WHERE id = " + req.body.id;
    var db = new sqlite3.Database(DBPATH);
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close();
});


/* Inicia o servidor */
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });