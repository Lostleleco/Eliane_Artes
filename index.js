// Importar os módulos necessários
import express from 'express';
import mysql from 'mysql2';
import bodyParser from 'body-parser';


// Criar uma instância do aplicativo Express
const app = express();
const PORT = 3000;

// Middleware para analisar o corpo das requisições como JSON
app.use(bodyParser.json());

// Configuração do banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Altere se necessário
    password: 'admin', // Insira sua senha do MySQL
    database: 'minha_api_admin'
});

// Conectar ao banco de dados
db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL!');
});

// Rota para adicionar um novo usuário
app.post('/usuarios', (req, res) => {
    const { nome, email, whatsapp, endereco } = req.body;
    db.query('INSERT INTO usuarios (nome, email, whatsapp, endereco) VALUES (?, ?, ?, ?)', [nome, email, whatsapp, endereco], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.status(201).json({ id: results.insertId, nome, email, whatsapp, endereco });
    });
});

// Rota para obter todos os usuários
app.get('/usuarios', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
});

// Rota para obter um usuário por ID
app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, results) => {
        if (err || results.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json(results[0]);
    });
});

// Rota para atualizar um usuário
app.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email, whatsapp, endereco } = req.body;
    db.query('UPDATE usuarios SET nome = ?, email = ?, whatsapp = ?, endereco = ? WHERE id = ?', [nome, email, whatsapp, endereco, id], (err) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json({ message: 'Usuário atualizado com sucesso' });
    });
});

// Rota para deletar um usuário
app.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM usuarios WHERE id = ?', [id], (err) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json({ message: 'Usuário deletado com sucesso' });
    });
});

// Rota para adicionar um novo produto
app.post('/produtos', (req, res) => {
    const { titulo, descricao, imagem, preco, contato_email, contato_whatsapp } = req.body;
    db.query('INSERT INTO produtos (titulo, descricao, imagem, preco, contato_email, contato_whatsapp) VALUES (?, ?, ?, ?, ?, ?)',
        [titulo, descricao, imagem, preco, contato_email, contato_whatsapp],
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.status(201).json({ id: results.insertId, titulo, descricao, imagem, preco, contato_email, contato_whatsapp });
        }
    );
});

// Rota para obter todos os produtos
app.get('/produtos', (req, res) => {
    db.query('SELECT * FROM produtos', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
});

// Rota para obter um produto por ID
app.get('/produtos/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM produtos WHERE id = ?', [id], (err, results) => {
        if (err || results.length === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.json(results[0]);
    });
});

// Rota para atualizar um produto
app.put('/produtos/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, imagem, preco, contato_email, contato_whatsapp } = req.body;
    db.query('UPDATE produtos SET titulo = ?, descricao = ?, imagem = ?, preco = ?, contato_email = ?, contato_whatsapp = ? WHERE id = ?',
        [titulo, descricao, imagem, preco, contato_email, contato_whatsapp, id],
        (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.json({ message: 'Produto atualizado com sucesso' });
        }
    );
});

// Rota para deletar um produto
app.delete('/produtos/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM produtos WHERE id = ?', [id], (err) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json({ message: 'Produto deletado com sucesso' });
    });
});

// Inicie o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});


export default app;