import express from 'express';

const app = express()
const PORT = 3002
const server = 2

app.get("/", (req, res) => {
    res.json({
        message: `¡El servidor ${server} te saluda!`
    })
})

app.listen(PORT, () => {
    console.log(`Server ${server} listening in http://localhost:${PORT}`);
})