import express from 'express';

const app = express()
const PORT = 3001
const server = 1

app.get("/", (req, res) => {
    setInterval(() => {
        res.json({
            message: `¡El servidor ${server} te saluda!`
        })
    }, 41000)
})

app.listen(PORT, () => {
    console.log(`Servidor ${server} escuchando en http://localhost:${PORT}`);
})