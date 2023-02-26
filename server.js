const express = require("express")
const app = express()
app.use(express.json())

app.get("/usuarios", (req, res) => { /** Lista todos */
    return res.json({
        erro: false,
        nome: "Sebastião", email: "rodrigoexer1@gmail.com"
    })
})
app.get("/usuario/:id", (req, res) => { /** Lista by Id */
    const { id } = req.params
    return res.json({
        erro: false,
        id: id, nome: "Sebastião", email: "rodrigoexer1@gmail.com"
    })
})
app.post("/usuario/", (req, res) => { /** Insere */
    const { nome, email } = req.params
    return res.json({
        erro: false,
        nome: nome, email: email
    })
})
app.put("/usuario/", (req, res) => { /** Atualiza */
    const { id, nome, email } = req.params
    return res.json({
        erro: false,
        id: id, nome: nome, email: email
    })
})
app.delete("/usuario/:id", (req, res) => { /** Delete */
    const { id } = req.params
    return res.json({
        erro: false,
        id: id,
    })
})
app.listen(8080, () => {
    console.log('Server is Running port 8080')
})